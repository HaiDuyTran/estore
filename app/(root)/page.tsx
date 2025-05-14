import ProductList from '@/components/shared/product/product-list';
import { getLatestProducts } from '@/lib/actions/product.actions';
import ProductCarousel from '@/components/shared/product/product-carousel';
import ViewAllProductsButton from '@/components/view-all-products-button';
import IconBoxes from '@/components/icon-boxes';
import DealCountdown from '@/components/deal-countdown';

const Homepage = async () => {
  const latestProducts = await getLatestProducts();
  // const featuredProducts = await getFeaturedProducts();
  const featuredProducts = [
    {
      id: '7f118672-798a-4733-acbf-38b92b3d9f63',
      name: 'Tommy Hilfiger Classic Fit Dress Shirt',
      slug: 'tommy-hilfiger-classic-fit-dress-shirt',
      category: "Men's Dress Shirts",
      images: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvE9lv9m0qzfWwFbm97BFAmMoD2OqI2QIbiQ&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvE9lv9m0qzfWwFbm97BFAmMoD2OqI2QIbiQ&s',
      ],
      brand: 'Tommy Hilfiger',
      description: 'A perfect blend of sophistication and comfort. Non-Iron.',
      stock: 0,
      price: '99.95',
      rating: '4.9',
      numReviews: 3,
      isFeatured: false,
      banner: '/images/banner-2.jpg',
      createdAt: new Date('2025-04-28T01:41:34.705Z'),
      embedding: {},
    },
    {
      id: 'd362ba61-18e3-4ba6-ad2a-21c6b9a4e3d4',
      name: 'Polo Sporting Stretch Shirt',
      slug: 'polo-sporting-stretch-shirt',
      category: "Men's Dress Shirts",
      images: [
        '/images/sample-products/p1-1.jpg',
        '/images/sample-products/p1-2.jpg',
      ],
      brand: 'Polo',
      description: 'Classic Polo style with modern comfort',
      stock: 5,
      price: '59.99',
      rating: '4.5',
      numReviews: 10,
      isFeatured: true,
      banner: '/images/banner-1.jpg',
      createdAt: new Date('2025-04-28T01:41:34.705Z'), // Convert string to Date object
      embedding: {},
    },
  ];
  return (
    <>
      {featuredProducts.length > 0 && (
        <ProductCarousel data={featuredProducts} />
      )}
      <ProductList data={latestProducts} title='Newest Arrivals' limit={4} />
      <ViewAllProductsButton />
      <DealCountdown />
      <IconBoxes />
    </>
  );
};

export default Homepage;
