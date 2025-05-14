import ProductList from '@/components/shared/product/product-list';
import {
  getLatestProducts,
  getFeaturedProducts,
} from '@/lib/actions/product.actions';
import ProductCarousel from '@/components/shared/product/product-carousel';
import ViewAllProductsButton from '@/components/view-all-products-button';
import IconBoxes from '@/components/icon-boxes';
import DealCountdown from '@/components/deal-countdown';

const Homepage = async () => {
  const latestProducts = await getLatestProducts();
  // const featuredProducts = await getFeaturedProducts();
  const featuredProducts = [
    {
      id: 'd61c200b-a83e-4d08-b1f5-ff2d42a652d4',
      name: 'Apple iPhone 15 Pro',
      slug: 'apple-iphone-15-pro',
      category: 'Electronics - Smartphones',
      images: [
        'https://cdn2.fptshop.com.vn/unsafe/828x0/filters:format(webp):quality(75)/2023_9_13_638301983422003341_VN_iPhone_15_Pro_Natural_Titanium_PDP_Image_Position-1A_Natural_Titanium_Color.jpg',
        'https://cdn2.fptshop.com.vn/unsafe/828x0/filters:format(webp):quality(75)/2023_9_13_638301983422003341_VN_iPhone_15_Pro_Natural_Titanium_PDP_Image_Position-1A_Natural_Titanium_Color.jpg',
      ],
      brand: 'Apple',
      description: 'The latest powerful iPhone with Pro camera system.',
      stock: 25,
      price: '1099',
      rating: '4.8',
      numReviews: 155,
      isFeatured: true,
      banner: '/images/banner-2.jpg',
      createdAt: new Date('2025-04-28T01:41:34.705Z'), // Convert string to Date object
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
