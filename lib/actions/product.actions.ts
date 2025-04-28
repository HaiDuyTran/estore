'use server';
import { prisma } from '@/db/prisma';
import { convertToPlainObject, formatError } from '../utils';
import { LATEST_PRODUCTS_LIMIT, PAGE_SIZE } from '../constants';
import { revalidatePath } from 'next/cache';
import { insertProductSchema, updateProductSchema } from '../validators';
import { z } from 'zod';
import { Prisma } from '@/prisma/app/generated/prisma/client';
import { Product } from '@/types';

// Get latest products
export async function getLatestProducts() {
  
  const data = await prisma.product.findMany({
    take: LATEST_PRODUCTS_LIMIT,
    orderBy: { createdAt: 'desc' },
  });

  return convertToPlainObject(data);
}

// Get single product by it's slug
export async function getProductBySlug(slug: string) {
  return await prisma.product.findFirst({
    where: { slug: slug },
  });
}

// Get single product by it's ID
export async function getProductById(productId: string) {
  const data = await prisma.product.findFirst({
    where: { id: productId },
  });

  return convertToPlainObject(data);
}

// Get all products
export async function getAllProducts({
  query,
  limit = PAGE_SIZE,
  page,
  category,
  price,
  rating,
  sort,
}: {
  query: string;
  limit?: number;
  page: number; // Ensure page is treated as a number
  category?: string;
  price?: string;
  rating?: string;
  sort?: string;
}): Promise<{ // Define the return type for clarity
  data: Product[]; // Replace 'any' with your actual Product type if possible
  totalPages: number;
  currentPage: number;
}> {
  // --- Build the WHERE clause ---
  const queryFilter: Prisma.ProductWhereInput =
    query && query !== 'all'
      ? {
          name: {
            contains: query,
            mode: 'insensitive',
          } as Prisma.StringFilter, // Keep type assertion if needed
        }
      : {};

  const categoryFilter: Prisma.ProductWhereInput =
    category && category !== 'all' ? { category } : {};

  const priceFilter: Prisma.ProductWhereInput =
    price && price !== 'all'
      ? {
          price: {
            gte: Number(price.split('-')[0]),
            lte: Number(price.split('-')[1]),
          },
        }
      : {};

  const ratingFilter: Prisma.ProductWhereInput =
    rating && rating !== 'all'
      ? {
          rating: {
            gte: Number(rating),
          },
        }
      : {};

  // Combine filters into a single 'where' object
  const where: Prisma.ProductWhereInput = {
    ...queryFilter,
    ...categoryFilter,
    ...priceFilter,
    ...ratingFilter,
  };

  // --- Build the ORDER BY clause ---
  const orderBy: Prisma.ProductOrderByWithRelationInput =
    sort === 'lowest'
      ? { price: 'asc' }
      : sort === 'highest'
      ? { price: 'desc' }
      : sort === 'rating'
      ? { rating: 'desc' }
      : { createdAt: 'desc' }; // Default to newest

  // --- Perform COUNT and FIND MANY with the SAME 'where' clause ---
  // Use Promise.all for potentially better performance (optional)
  const [dataCount, data] = await Promise.all([
    prisma.product.count({
      where, // <<< Use the combined 'where' clause for count
    }),
    prisma.product.findMany({
      where, // <<< Use the same combined 'where' clause for findMany
      orderBy,
      skip: (page - 1) * limit,
      take: limit,
    }),
  ]);

  // --- Calculate totalPages based on the FILTERED count ---
  const totalPages = Math.ceil(dataCount / limit);

  return {
    data: convertToPlainObject(data), // Apply conversion here
    totalPages,
    currentPage: page, // Return the current page number
  };
}

// Delete a product
export async function deleteProduct(id: string) {
  try {
    const productExists = await prisma.product.findFirst({
      where: { id },
    });

    if (!productExists) throw new Error('Product not found');

    await prisma.product.delete({ where: { id } });

    revalidatePath('/admin/products');

    return {
      success: true,
      message: 'Product deleted successfully',
    };
  } catch (error) {
    return { success: false, message: formatError(error) };
  }
}

// Create a product
export async function createProduct(data: z.infer<typeof insertProductSchema>) {
  try {
    const product = insertProductSchema.parse(data);
    await prisma.product.create({ data: product });

    revalidatePath('/admin/products');

    return {
      success: true,
      message: 'Product created successfully',
    };
  } catch (error) {
    return { success: false, message: formatError(error) };
  }
}

// Update a product
export async function updateProduct(data: z.infer<typeof updateProductSchema>) {
  try {
    const product = updateProductSchema.parse(data);
    const productExists = await prisma.product.findFirst({
      where: { id: product.id },
    });

    if (!productExists) throw new Error('Product not found');

    await prisma.product.update({
      where: { id: product.id },
      data: product,
    });

    revalidatePath('/admin/products');

    return {
      success: true,
      message: 'Product updated successfully',
    };
  } catch (error) {
    return { success: false, message: formatError(error) };
  }
}

// Get all categories
export async function getAllCategories() {
  const categories = await prisma.product.groupBy({
    by: ['category'],
    _count: {
      category: true,
    },
    orderBy: {
      _count: {
        category: 'desc', // Optional: order by popularity
      },
    },
  });
  // Map to simpler structure if needed
  return categories.map(c => ({ category: c.category }));
}

// Get featured products
export async function getFeaturedProducts() {
  const data = await prisma.product.findMany({
    where: { isFeatured: true ,banner: {not: null}},
    orderBy: { createdAt: 'asc' },
    take: 2,
  });

  return convertToPlainObject(data);
}
