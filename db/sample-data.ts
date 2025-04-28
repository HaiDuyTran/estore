const sampleData = {
  users: [
    {
      name: 'John',
      email: 'admin@example.com',
      password: '123456',
      role: 'admin',
    },
    {
      name: 'Jane',
      email: 'user@example.com',
      password: '123456',
      role: 'user',
    },
  ],
  products: [
    // --- Updated Products ---
    {
      name: 'Polo Sporting Stretch Shirt',
      slug: 'polo-sporting-stretch-shirt',
      category: "Men's Dress Shirts",
      description: 'Classic Polo style with modern comfort',
      images: [
        '/images/sample-products/p1-1.jpg',
        '/images/sample-products/p1-2.jpg',
      ],
      price: 59.99,
      brand: 'Polo',
      rating: 4.5,
      numReviews: 10,
      stock: 5,
      isFeatured: true,
      banner: '/images/banner-1.jpg',
    },
    {
      name: 'Brooks Brothers Long Sleeved Shirt',
      slug: 'brooks-brothers-long-sleeved-shirt',
      category: "Men's Dress Shirts",
      description: 'Timeless style and premium comfort',
      images: [
        '/images/sample-products/p2-1.jpg',
        '/images/sample-products/p2-2.jpg',
      ],
      price: 85.9,
      brand: 'Brooks Brothers',
      rating: 4.2,
      numReviews: 8,
      stock: 10,
      isFeatured: true,
      banner: '/images/banner-2.jpg',
    },
    {
        name: 'Tommy Hilfiger Classic Fit Dress Shirt',
        slug: 'tommy-hilfiger-classic-fit-dress-shirt',
        category: "Men's Dress Shirts",
        description: 'A perfect blend of sophistication and comfort. Non-Iron.',
        images: [
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvE9lv9m0qzfWwFbm97BFAmMoD2OqI2QIbiQ&s', // Amazon example 1
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvE9lv9m0qzfWwFbm97BFAmMoD2OqI2QIbiQ&s'  // Amazon example 2
        ],
        price: 99.95,
        brand: 'Tommy Hilfiger',
        rating: 4.9,
        numReviews: 3,
        stock: 0,
        isFeatured: false,
        banner: null,
      },
      {
        name: 'Calvin Klein Slim Fit Stretch Shirt',
        slug: 'calvin-klein-slim-fit-stretch-shirt',
        category: "Men's Dress Shirts",
        description: 'Streamlined design with flexible stretch fabric. Steel Collection.',
        images: [
          'https://calvinklein.scene7.com/is/image/CalvinKlein/22701000_540_main', // Amazon example 1
          'https://calvinklein.scene7.com/is/image/CalvinKlein/22701000_540_main'  // Amazon example 2
        ],
        price: 39.95,
        brand: 'Calvin Klein',
        rating: 3.6,
        numReviews: 5,
        stock: 10,
        isFeatured: false,
        banner: null,
      },
      {
        name: 'Polo Ralph Lauren Oxford Shirt',
        slug: 'polo-ralph-lauren-oxford-shirt',
        category: "Men's Dress Shirts",
        description: 'Iconic Polo design with refined oxford fabric. Classic Fit.',
        images: [
          'https://m.media-amazon.com/images/I/61Kzh2K7teL._AC_SL1320_.jpg', // Amazon example 1
          'https://m.media-amazon.com/images/I/61Kzh2K7teL._AC_SL1320_.jpg'  // Amazon example 2 (color variation)
        ],
        price: 79.99,
        brand: 'Polo Ralph Lauren',
        rating: 4.7,
        numReviews: 18,
        stock: 6,
        isFeatured: false,
        banner: null,
      },
      {
        name: 'Polo Classic Pink Hoodie',
        slug: 'polo-classic-pink-hoodie',
        category: "Men's Sweatshirts",
        description: 'Soft, stylish, and perfect for laid-back days. Fleece.',
        images: [
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTozY98jDMwKlYRn03wiicsOnKTFMK7Ib5leA&s', // Amazon example 1 (similar product)
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTozY98jDMwKlYRn03wiicsOnKTFMK7Ib5leA&s'  // Amazon example 2 (similar product back)
        ],
        price: 99.99,
        brand: 'Polo Ralph Lauren',
        rating: 4.6,
        numReviews: 12,
        stock: 8,
        isFeatured: true,
        banner: null,
      },
      // --- New Products with Example Real URLs ---
      {
        name: 'Apple iPhone 15 Pro',
        slug: 'apple-iphone-15-pro',
        category: 'Electronics - Smartphones',
        description: 'The latest powerful iPhone with Pro camera system.',
        images: [
          'https://cdn2.fptshop.com.vn/unsafe/828x0/filters:format(webp):quality(75)/2023_9_13_638301983422003341_VN_iPhone_15_Pro_Natural_Titanium_PDP_Image_Position-1A_Natural_Titanium_Color.jpg', // Apple Store URL 1
          'https://cdn2.fptshop.com.vn/unsafe/828x0/filters:format(webp):quality(75)/2023_9_13_638301983422003341_VN_iPhone_15_Pro_Natural_Titanium_PDP_Image_Position-1A_Natural_Titanium_Color.jpg'  // Apple Store URL 2
        ],
        price: 1099.00,
        brand: 'Apple',
        rating: 4.8,
        numReviews: 155,
        stock: 25,
        isFeatured: true,
        banner: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-og-202309?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1693069337087', // Example Banner
      },
      {
        name: 'Samsung Galaxy S24 Ultra',
        slug: 'samsung-galaxy-s24-ultra',
        category: 'Electronics - Smartphones',
        description: 'Experience the new era of mobile AI.',
        images: [
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmggTvcAH6L3zKsHCT3RXj4EP09axbQVPq4A&s', // Samsung URL 1
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmggTvcAH6L3zKsHCT3RXj4EP09axbQVPq4A&s' // Samsung URL 2
        ],
        price: 1299.99,
        brand: 'Samsung',
        rating: 4.7,
        numReviews: 122,
        stock: 30,
        isFeatured: true,
        banner: null,
      },
      {
        name: 'Sony WH-1000XM5 Noise Cancelling Headphones',
        slug: 'sony-wh-1000xm5-noise-cancelling-headphones',
        category: 'Electronics - Headphones',
        description: 'Industry-leading noise cancellation and superb sound quality.',
        images: [
          'https://www.sony.com.vn/image/6145c1d32e6ac8e63a46c912dc33c5bb?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF', // Amazon URL 1
          'https://www.sony.com.vn/image/6145c1d32e6ac8e63a46c912dc33c5bb?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF'  // Amazon URL 2
        ],
        price: 399.99,
        brand: 'Sony',
        rating: 4.9,
        numReviews: 250,
        stock: 50,
        isFeatured: true,
        banner: 'https://m.media-amazon.com/images/S/aplus-media-library-service-media/f738181c-af57-4724-97e6-1f6e5ff7674a.__CR0,0,1464,600_PT0_SX1464_V1___.jpg', // Example Banner
      },
      {
        name: 'Nike Air Max 270',
        slug: 'nike-air-max-270',
        category: "Men's Shoes - Sneakers",
        description: 'Big Air cushioning for all-day comfort and style.',
        images: [
          'https://storage.googleapis.com/ssr_uk/products/a75b54b54fcd2a25af1f28d4a35a4ae1.jpg', // Nike URL 1
          'https://storage.googleapis.com/ssr_uk/products/a75b54b54fcd2a25af1f28d4a35a4ae1.jpg' // Nike URL 2 (Often same primary shot for sneakers)
        ],
        price: 160.00,
        brand: 'Nike',
        rating: 4.5,
        numReviews: 305,
        stock: 15,
        isFeatured: false,
        banner: null,
      },
      {
        name: "Levi's 501 Original Fit Jeans",
        slug: 'levis-501-original-fit-jeans',
        category: "Men's Clothing - Jeans",
        description: 'The iconic straight fit with signature button fly.',
        images: [
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI3nQes9sd8fPAz40pa1u0QOIi20dCnQOD1Q&s', // Levis URL 1
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI3nQes9sd8fPAz40pa1u0QOIi20dCnQOD1Q&s'   // Levis URL 2
        ],
        price: 69.50,
        brand: "Levi's",
        rating: 4.6,
        numReviews: 452,
        stock: 40,
        isFeatured: false,
        banner: null,
      },
      {
        name: 'Dell XPS 15 Laptop',
        slug: 'dell-xps-15-laptop',
        category: 'Electronics - Laptops',
        description: 'Powerful performance meets stunning 15-inch display.',
        images: [
          'https://www.laptopvip.vn/images/detailed/31/notebook-xps-15-9530-t-black-g--1-~1-pkeb-ii-www.laptopvip.vn-1683083662.png', // Dell URL 1
          'https://www.laptopvip.vn/images/detailed/31/notebook-xps-15-9530-t-black-g--1-~1-pkeb-ii-www.laptopvip.vn-1683083662.png'  // Dell URL 2
        ],
        price: 1899.99,
        brand: 'Dell',
        rating: 4.7,
        numReviews: 95,
        stock: 12,
        isFeatured: true,
        banner: null,
      },
      {
        name: 'Adidas Ultraboost Light',
        slug: 'adidas-ultraboost-light',
        category: "Women's Shoes - Running",
        description: 'Epic energy return with lighter BOOST cushioning.',
        images: [
          'https://assets.adidas.com/images/w_600,f_auto,q_auto/dfeaac2e2d8f46558e76af7f010bafe5_9366/Ultraboost_Light_Shoes_Black_HQ6339_01_standard.jpg', // Adidas URL 1
          'https://assets.adidas.com/images/w_600,f_auto,q_auto/dfeaac2e2d8f46558e76af7f010bafe5_9366/Ultraboost_Light_Shoes_Black_HQ6339_01_standard.jpg'  // Adidas URL 2
        ],
        price: 190.00,
        brand: 'Adidas',
        rating: 4.6,
        numReviews: 210,
        stock: 28,
        isFeatured: false,
        banner: null,
      },
      {
        name: 'Canon EOS R6 Mark II Camera Body',
        slug: 'canon-eos-r6-mark-ii-camera-body',
        category: 'Electronics - Cameras',
        description: 'Full-frame mirrorless camera for hybrid shooters.',
        images: [
          'https://cdn.vjshop.vn/may-anh/mirrorless/canon/canon-eos-r6-mark-ii/canon-eos-r6-mark-ii.jpg', // Amazon URL 1
          'https://cdn.vjshop.vn/may-anh/mirrorless/canon/canon-eos-r6-mark-ii/canon-eos-r6-mark-ii.jpg'  // Amazon URL 2
        ],
        price: 2499.00,
        brand: 'Canon',
        rating: 4.8,
        numReviews: 75,
        stock: 8,
        isFeatured: true,
        banner: null,
      },
      {
        name: 'The North Face Borealis Backpack',
        slug: 'the-north-face-borealis-backpack',
        category: 'Accessories - Backpacks',
        description: 'Versatile backpack for commuting or hitting the trail.',
        images: [
          'https://product.hstatic.net/1000008082/product/nf0a52sekx7_6_9fabf5ea048e434ca7d52c9fb1f8a10b_02e63d52d7b24fbdaf2acacc4bdf974e.jpg', // Amazon URL 1
          'https://product.hstatic.net/1000008082/product/nf0a52sekx7_6_9fabf5ea048e434ca7d52c9fb1f8a10b_02e63d52d7b24fbdaf2acacc4bdf974e.jpg'  // Amazon URL 2
        ],
        price: 99.00,
        brand: 'The North Face',
        rating: 4.7,
        numReviews: 550,
        stock: 60,
        isFeatured: false,
        banner: null,
      },
      {
        name: 'Apple Watch Series 9',
        slug: 'apple-watch-series-9',
        category: 'Electronics - Smartwatches',
        description: 'Smarter, brighter, and more powerful Apple Watch.',
        images: [
          'https://product.hstatic.net/200000850199/product/3_cae3c290c1304ada9b5dbb1c72748027_4a963c3f875a44c9b0aa57d35edf4c86.jpg', // Apple Store URL 1
          'https://product.hstatic.net/200000850199/product/3_cae3c290c1304ada9b5dbb1c72748027_4a963c3f875a44c9b0aa57d35edf4c86.jpg' // Apple Store URL 2 (Cellular variant)
        ],
        price: 399.00,
        brand: 'Apple',
        rating: 4.8,
        numReviews: 180,
        stock: 45,
        isFeatured: true,
        banner: null,
      },
      {
        name: 'Instant Pot Duo 7-in-1 Electric Pressure Cooker',
        slug: 'instant-pot-duo-7-in-1-electric-pressure-cooker',
        category: 'Home Goods - Kitchen Appliances',
        description: 'Multi-cooker that saves time and space in the kitchen.',
        images: [
          'https://dienmayquanghanh.com/Upload/avatar/ava-website/ava-noi-ap-suat-instant-pot-duo-60-7-in-1-1.jpg', // Amazon URL 1
          'https://dienmayquanghanh.com/Upload/avatar/ava-website/ava-noi-ap-suat-instant-pot-duo-60-7-in-1-1.jpg'  // Amazon URL 2
        ],
        price: 89.95,
        brand: 'Instant Pot',
        rating: 4.7,
        numReviews: 12500,
        stock: 60,
        isFeatured: true,
        banner: 'https://m.media-amazon.com/images/S/aplus-media-library-service-media/72f6c1d2-1837-41d2-97a0-02526604123c.__CR0,0,970,600_PT0_SX970_V1___.jpg', // Example Banner
      },
      {
        name: 'Patagonia Better Sweater Fleece Jacket',
        slug: 'patagonia-better-sweater-fleece-jacket',
        category: "Men's Clothing - Jackets",
        description: 'Warm, low-bulk full-zip jacket made with recycled polyester.',
        images: [
          'https://cdn-images.farfetch-contents.com/25/63/78/20/25637820_55764814_322.jpg', // Amazon URL 1
          'https://cdn-images.farfetch-contents.com/25/63/78/20/25637820_55764814_322.jpg'  // Amazon URL 2 (different color)
        ],
        price: 149.00,
        brand: 'Patagonia',
        rating: 4.9,
        numReviews: 680,
        stock: 35,
        isFeatured: false,
        banner: null,
      },
      {
        name: 'Kindle Paperwhite (16 GB)',
        slug: 'kindle-paperwhite-16-gb',
        category: 'Electronics - E-readers',
        description: 'Read comfortably with a glare-free display and adjustable warm light.',
        images: [
          'https://thinktech.vn/wp-content/uploads/2024/12/may-doc-sach-amazon-kindle-paperwhite-kids-16gb-ban-2024.jpg', // Amazon URL 1
          'https://thinktech.vn/wp-content/uploads/2024/12/may-doc-sach-amazon-kindle-paperwhite-kids-16gb-ban-2024.jpg'  // Amazon URL 2
        ],
        price: 149.99,
        brand: 'Amazon',
        rating: 4.7,
        numReviews: 25000,
        stock: 100,
        isFeatured: false,
        banner: null,
      },
      {
        name: 'Logitech MX Master 3S Mouse',
        slug: 'logitech-mx-master-3s-mouse',
        category: 'Electronics - Computer Accessories',
        description: 'Advanced wireless mouse for performance and comfort.',
        images: [
          'https://resource.logitech.com/content/dam/logitech/en/products/mice/mx-master-3s-mac-bluetooth-mouse/gallery/space-grey/mx-master-3s-for-mac-mouse-top-view-space-grey.png', // Amazon URL 1
          'https://resource.logitech.com/content/dam/logitech/en/products/mice/mx-master-3s-mac-bluetooth-mouse/gallery/space-grey/mx-master-3s-for-mac-mouse-top-view-space-grey.png'  // Amazon URL 2
        ],
        price: 99.99,
        brand: 'Logitech',
        rating: 4.8,
        numReviews: 3500,
        stock: 75,
        isFeatured: false,
        banner: null,
      },
      {
        name: 'Samsung 65" Class QN90C Neo QLED 4K Smart TV',
        slug: 'samsung-65-qn90c-neo-qled-4k-smart-tv',
        category: 'Electronics - Televisions',
        description: 'Stunning picture quality with Quantum Mini LEDs.',
        images: [
          'https://salt.tikicdn.com/cache/w300/ts/product/fc/17/71/da6dd82dd59d4b39019ac9371360c5b9.jpg', // Samsung URL 1
          'https://salt.tikicdn.com/cache/w300/ts/product/fc/17/71/da6dd82dd59d4b39019ac9371360c5b9.jpg' // Samsung URL 2
        ],
        price: 1999.99,
        brand: 'Samsung',
        rating: 4.7,
        numReviews: 450,
        stock: 10,
        isFeatured: true,
        banner: null,
      },
     // ... (Continue updating the rest similarly) ...
     // Add more products here with real image URLs following the pattern
     // It's recommended to find images from official brand sites or major retailers like Amazon, Best Buy etc.

    // --- Placeholder for remaining products (Needs manual URL finding) ---
    // Products 17-56 still have placeholder URLs in this example.
    // You would need to manually find and insert real URLs for these.
    {
        name: 'Keurig K-Elite Coffee Maker',
        slug: 'keurig-k-elite-coffee-maker',
        category: 'Home Goods - Kitchen Appliances',
        description: 'Single serve K-Cup pod coffee brewer with iced coffee capability.',
        images: [
          'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ubuy.vn%2Fen%2Fproduct%2FJ26D0Z8GO-keurig-k-elite-single-serve-k-cup-pod-coffee-maker-brushed-gold&psig=AOvVaw3dobY1iPnztdK7X21P0hNJ&ust=1745566723649000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOibmvaU8IwDFQAAAAAdAAAAABAE', // Example Amazon URL
          'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ubuy.vn%2Fen%2Fproduct%2FJ26D0Z8GO-keurig-k-elite-single-serve-k-cup-pod-coffee-maker-brushed-gold&psig=AOvVaw3dobY1iPnztdK7X21P0hNJ&ust=1745566723649000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOibmvaU8IwDFQAAAAAdAAAAABAE'  // Example Amazon URL
        ],
        price: 189.99,
        brand: 'Keurig',
        rating: 4.6,
        numReviews: 8500,
        stock: 40,
        isFeatured: false,
        banner: null,
      },
      {
        name: 'Anker PowerCore 10000 Portable Charger',
        slug: 'anker-powercore-10000-portable-charger',
        category: 'Electronics - Accessories',
        description: 'Compact high-speed charging power bank.',
        images: [
          'https://bizweb.dktcdn.net/thumb/grande/100/405/018/products/a1263-1.jpg?v=1671512282213', // Example Amazon URL
          'https://bizweb.dktcdn.net/thumb/grande/100/405/018/products/a1263-1.jpg?v=1671512282213'  // Example Amazon URL
        ],
        price: 25.99,
        brand: 'Anker',
        rating: 4.7,
        numReviews: 50000,
        stock: 200,
        isFeatured: false,
        banner: null,
      },
      {
        name: 'Lululemon Align Pant 28"',
        slug: 'lululemon-align-pant-28',
        category: "Women's Clothing - Leggings",
        description: 'Buttery-soft Nulu fabric, feels weightless.',
        images: [
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR4fTqQF6zerD-wGIEq1tLnODjybYo6nY-Kw&s', // Lululemon URL
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR4fTqQF6zerD-wGIEq1tLnODjybYo6nY-Kw&s'  // Lululemon URL
        ],
        price: 98.00,
        brand: 'Lululemon',
        rating: 4.8,
        numReviews: 1500,
        stock: 55,
        isFeatured: false,
        banner: null,
      },
      {
        name: 'Bose QuietComfort Ultra Headphones',
        slug: 'bose-quietcomfort-ultra-headphones',
        category: 'Electronics - Headphones',
        description: 'World-class noise cancellation and immersive audio.',
        images: [
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQECSOwtSnYbWNRQ1yV1uQRIe41TcImeKjfbw&s', // Bose URL
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQECSOwtSnYbWNRQ1yV1uQRIe41TcImeKjfbw&s' // Bose URL (Case)
        ],
        price: 429.00,
        brand: 'Bose',
        rating: 4.7,
        numReviews: 320,
        stock: 30,
        isFeatured: true,
        banner: null,
      },
      {
        name: 'Yeti Rambler 30 oz Tumbler',
        slug: 'yeti-rambler-30-oz-tumbler',
        category: 'Home Goods - Drinkware',
        description: 'Keeps drinks cold or hot for hours, durable stainless steel.',
        images: [
          'https://down-vn.img.susercontent.com/file/5b7929defa963c39e798f2cb1ffb7256', // Amazon Example
          'https://down-vn.img.susercontent.com/file/5b7929defa963c39e798f2cb1ffb7256'  // Amazon Example (different color)
        ],
        price: 38.00,
        brand: 'Yeti',
        rating: 4.9,
        numReviews: 22000,
        stock: 150,
        isFeatured: false,
        banner: null,
      },
      {
        name: 'Nintendo Switch - OLED Model',
        slug: 'nintendo-switch-oled-model',
        category: 'Electronics - Gaming Consoles',
        description: 'Play at home or on-the-go with a vibrant 7-inch OLED screen.',
        images: [
          'https://thegioigames.vn/wp-content/uploads/2021/07/nintendo-switch-console-oled-model-w-2.jpg', // Amazon Example
          'https://thegioigames.vn/wp-content/uploads/2021/07/nintendo-switch-console-oled-model-w-2.jpg'  // Amazon Example
        ],
        price: 349.99,
        brand: 'Nintendo',
        rating: 4.8,
        numReviews: 18000,
        stock: 40,
        isFeatured: true,
        banner: 'https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.0/c_scale,w_1200/ncom/en_US/switch/oled/gallery/hero', // Example Banner
      },
      // ... Continue for the rest of the 56 products ...
      // Manually find URLs for products 28 through 56
      // Example for one more:
      {
        name: 'GAP Modern Crewneck T-Shirt',
        slug: 'gap-modern-crewneck-t-shirt',
        category: "Men's Clothing - T-Shirts",
        description: 'Soft cotton jersey, classic fit.',
        images: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST1Q3mdSvS1i2swxWSFAukxI-IHnOKV1wWGg&s', // GAP Example URL 1
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST1Q3mdSvS1i2swxWSFAukxI-IHnOKV1wWGg&s' // GAP Example URL 2
        ],
        price: 24.95,
        brand: 'GAP',
        rating: 4.4,
        numReviews: 1200,
        stock: 100,
        isFeatured: false,
        banner: null,
      },
      // ... (Assume the rest are filled similarly) ...
      // Add dummy entries for the remaining to reach 56 total products
       // ... [Products 29 to 55 would go here, updated similarly] ...
       {
        name: 'Carhartt Men\'s Loose Fit Midweight Logo Sleeve Graphic Sweatshirt',
        slug: 'carhartt-midweight-logo-sleeve-sweatshirt',
        category: "Men's Sweatshirts",
        description: 'Durable and comfortable sweatshirt with iconic logo.',
        images: [
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZkzGFyHeQ9YbmNfjk0hGudSy4KXOh-388Hw&s', // Amazon Example
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZkzGFyHeQ9YbmNfjk0hGudSy4KXOh-388Hw&s'  // Amazon Example (Back)
        ],
        price: 54.99,
        brand: 'Carhartt',
        rating: 4.8,
        numReviews: 18000,
        stock: 80,
        isFeatured: false,
        banner: null,
      }
      ,
       
        {
            name: "Japan S Women Lifestyle Shoes - White",
            slug: "japan-s-women-lifestyle-shoes-white",
            category: "Women Lifestyle Shoes",
            description: "The JAPAN S™ shoes are based on one of our throwback offerings from 1981. This reworked iteration is formed with a low-top silhouette that's complete with a court-inspired toe box. Updated with a lightweight design that features a modified cupsole, this shoe",
            images: [
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-ASI22A11812400W009-1.jpg",
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-ASI22A11812400W009-2.jpg"
            ],
            price: 34.98,
            brand: "ASICS",
            rating: 4.9,
            numReviews: 101,
            stock: 412,
            isFeatured: false,
            banner: null
        },
     
       
       
        {
            name: "1906 Unisex Sneakers Shoes - Khaki",
            slug: "1906-unisex-sneakers-shoes-khaki",
            category: "Unisex Sneakers Shoes",
            description: "The 1906R, like its cousins the 2002R and the 860v2, is led by a sole unit featuring a combination of flexible ACTEVA LITE cushioning, shock absorbing N-ergy, and segmented ABZORB SBS pods at the heel. This hi-tech approach is also reflected in the 1906R’s",
            images: [
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-NEWU1906ROBSAN008-1.jpg",
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-NEWU1906ROBSAN008-2.jpg"
            ],
            price: 179.96,
            brand: "NEW BALANCE",
            rating: 0.9,
            numReviews: 435,
            stock: 319,
            isFeatured: true,
            banner: null
        },
        {
            name: "Speedcat Og Unisex Lifestyle Shoes - Black",
            slug: "speedcat-og-unisex-lifestyle-shoes-black",
            category: "Unisex Lifestyle Shoes",
            description: "A PUMA classic inspired by the speed of the racetrack: the Speedcat OG. It stands out from the crowd with its race-shoe inspired shape and sleek lines that look fast and bold. Bring motorsport to the street and own the low profile trend with this new version",
            images: [
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-PMA398846-01005004-1.jpg",
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-PMA398846-01005004-2.jpg"
            ],
            price: 100.0,
            brand: "PUMA",
            rating: 3.8,
            numReviews: 407,
            stock: 117,
            isFeatured: true,
            banner: null
        },
        
        {
            name: "740 Unisex Sneakers Shoes - Beige",
            slug: "740-unisex-sneakers-shoes-beige",
            category: "Unisex Sneakers Shoes",
            description: "The original 740 was the kind of daily runner that would be worn into the ground with heavy miles and bought all over again. This longtime fan favorite returns from the archives, poised to inspire a whole new generation of devotees. The 740 combines familiar",
            images: [
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-NEWU740LN100W007-1.jpg",
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-NEWU740LN100W007-2.jpg"
            ],
            price: 115.96,
            brand: "NEW BALANCE",
            rating: 0.7,
            numReviews: 209,
            stock: 469,
            isFeatured: false,
            banner: null
        },
        {
            name: "Gel-1130 Women'S Sneakers Shoes - White/Malachite Green",
            slug: "gel-1130-womens-sneakers-shoes-whitemalachite-green",
            category: "Women'S Sneakers Shoes",
            description: "Spanning across decades of design evolution, the GEL-1130 sneaker pays homage to the ninth iteration of the GEL-1000 series.\n\nThe stability running shoe from 2008 was originally inspired by the GEL-KAYANO 14 sneaker, featuring similar aesthetics as the hero",
            images: [
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-ASI22A16411400W005-1.jpg",
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-ASI22A16411400W005-2.jpg"
            ],
            price: 51.98,
            brand: "ASICS",
            rating: 4.6,
            numReviews: 195,
            stock: 363,
            isFeatured: true,
            banner: null
        },
        {
            name: "530 Unisex Sneakers Shoes - White",
            slug: "530-unisex-sneakers-shoes-white",
            category: "Unisex Sneakers Shoes",
            description: "Unisex Sneakers Shoes - White",
            images: [
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-NEWMR530CE00W007-1.jpg",
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-NEWMR530CE00W007-2.jpg"
            ],
            price: 106.36,
            brand: "NEW BALANCE",
            rating: 1.1,
            numReviews: 159,
            stock: 322,
            isFeatured: true,
            banner: null
        },
        {
            name: "Gel-1130 Ns Unisex Sneakers Shoes - Wood Crepe/Graphite Grey",
            slug: "gel-1130-ns-unisex-sneakers-shoes-wood-crepegraphite-grey",
            category: "Unisex Sneakers Shoes",
            description: "The GEL-1130 NS sneaker from the EARTHENWARE Pack is inspired by various earth tones found in nature and their influences in the color palettes from iconic outdoor garments.\n\nIts traditional design is reworked with rip-stop underlays, no-sew reinforcements,",
            images: [
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-ASI23A413201CAM011-1.jpg",
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-ASI23A413201CAM011-2.jpg"
            ],
            price: 57.98,
            brand: "ASICS",
            rating: 4.1,
            numReviews: 275,
            stock: 449,
            isFeatured: false,
            banner: null
        },
        {
            name: "327 Women'S Sneakers Shoes - White/Beige",
            slug: "327-womens-sneakers-shoes-whitebeige",
            category: "Women'S Sneakers Shoes",
            description: "As recreational running established widespread popularity in the 1970s, the benchmark for running footwear shifted from mere existence to performance. While the era’s designs would be considered simple by today’s standards, the decade stands out as the mom",
            images: [
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-NEWWS327NKD018006-1.jpg",
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-NEWWS327NKD018006-2.jpg"
            ],
            price: 99.96,
            brand: "NEW BALANCE",
            rating: 3.6,
            numReviews: 340,
            stock: 312,
            isFeatured: true,
            banner: null
        },
        {
            name: "530 Unisex Sneakers Shoes - Beige/Blue",
            slug: "530-unisex-sneakers-shoes-beigeblue",
            category: "Unisex Sneakers Shoes",
            description: "The original 530 combined turn of the millennium aesthetics with the reliability of a high milage running shoe. The reintroduced 530 applies a contemporary, everyday style outlook to this performance-minded design. A segmented ABZORB midsole is paired with a",
            images: [
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-NEWU530NEA01804H-1.jpg",
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-NEWU530NEA01804H-2.jpg"
            ],
            price: 114.36,
            brand: "NEW BALANCE",
            rating: 3.4,
            numReviews: 161,
            stock: 354,
            isFeatured: false,
            banner: null
        },
        {
            name: "9060 Unisex Sneakers Shoes - Grey",
            slug: "9060-unisex-sneakers-shoes-grey",
            category: "Unisex Sneakers Shoes",
            description: "The 9060 is a new expression of the refined style and innovation-led design that have made the 99X series home to some of the most iconic models in New Balance history. The 9060 reinterprets familiar elements sourced from classic 99X models with a warped sensi",
            images: [
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-NEWU9060FJDGRE008-1.jpg",
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-NEWU9060FJDGRE008-2.jpg"
            ],
            price: 178.36,
            brand: "NEW BALANCE",
            rating: 1.7,
            numReviews: 45,
            stock: 98,
            isFeatured: true,
            banner: null
        },
        {
            name: "Cloud 6 Women'S Sneakers Shoes - Black",
            slug: "cloud-6-womens-sneakers-shoes-black",
            category: "Women'S Sneakers Shoes",
            description: "On Cloud 6 Women's Sneakers Shoes - Black",
            images: [
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-ONRW10060299005005-1.jpg",
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-ONRW10060299005005-2.jpg"
            ],
            price: 179.96,
            brand: "ON",
            rating: 0.8,
            numReviews: 131,
            stock: 426,
            isFeatured: true,
            banner: null
        },
        {
            name: "Sabrina 1 Ep Women'S Basketball Shoes - Malachite",
            slug: "sabrina-1-ep-womens-basketball-shoes-malachite",
            category: "Women'S Basketball Shoes",
            description: "Broken records, top tournament seeds and triple-doubles galore. Sabrina Ionescu rose to stardom repping the green and yellow. This special design pays tribute to Sabrina’s alma mater and one of her self-proclaimed favorite places on the planet. Her signature",
            images: [
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-NIKFQ338930000G006-1.jpg",
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-NIKFQ338930000G006-2.jpg"
            ],
            price: 102.45,
            brand: "NIKE",
            rating: 2.0,
            numReviews: 224,
            stock: 178,
            isFeatured: true,
            banner: null
        },
        {
            name: "530 Unisex Sneakers Shoes - White/Grey",
            slug: "530-unisex-sneakers-shoes-whitegrey",
            category: "Unisex Sneakers Shoes",
            description: "The original 530 combined turn of the millennium aesthetics with the reliability of a high milage running shoe. The reintroduced 530 applies a contemporary, everyday style outlook to this performance-minded design. A segmented ABZORB midsole is paired with a",
            images: [
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-NEWU530CSB00W007-1.jpg",
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-NEWU530CSB00W007-2.jpg"
            ],
            price: 106.36,
            brand: "NEW BALANCE",
            rating: 2.2,
            numReviews: 281,
            stock: 465,
            isFeatured: true,
            banner: null
        },
        {
            name: "Japan S Women'S Sneakers Shoes - White/Malachite Green",
            slug: "japan-s-womens-sneakers-shoes-whitemalachite-green",
            category: "Women'S Sneakers Shoes",
            description: "The JAPAN S shoes are based on one of our throwback offerings from 1981.\n\nUpdated with a lightweight design and a modified cupsole, this shoe is made for comfort. It's also paired with nostalgic branding, like the ASICS Stripes on the quarter-panels and \"ASICS\"",
            images: [
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-ASI22A11812500W009-1.jpg",
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-ASI22A11812500W009-2.jpg"
            ],
            price: 34.98,
            brand: "ASICS",
            rating: 1.4,
            numReviews: 416,
            stock: 463,
            isFeatured: false,
            banner: null
        },
        {
            name: "On Running Cloudeasy Women'S Running Shoes - Black",
            slug: "on-running-cloudeasy-womens-running-shoes-black",
            category: "Women'S Running Shoes",
            description: "On Running Cloudeasy",
            images: [
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-ONR7698441005006-1.jpg",
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-ONR7698441005006-2.jpg"
            ],
            price: 109.17,
            brand: "ON",
            rating: 0.7,
            numReviews: 136,
            stock: 346,
            isFeatured: true,
            banner: null
        },
        {
            name: "Air Jordan 4 Retro Men'S Basketball Shoes - Black",
            slug: "air-jordan-4-retro-mens-basketball-shoes-black",
            category: "Men'S Basketball Shoes",
            description: "AIR JORDAN 4 RETRO",
            images: [
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-NIKFV5029006005007-1.jpg",
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-NIKFV5029006005007-2.jpg"
            ],
            price: 209.25,
            brand: "NIKE",
            rating: 1.1,
            numReviews: 337,
            stock: 277,
            isFeatured: true,
            banner: null
        },
      
        {
            name: "530 Unisex Sneakers Shoes - Grey",
            slug: "530-unisex-sneakers-shoes-grey",
            category: "Unisex Sneakers Shoes",
            description: "A versatile running shoe that takes a performance look and gives it a stylish lifestyle twist.",
            images: [
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-NEWMR530FRN018006-5.jpg",
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-NEWMR530FRN018006-1.jpg"
            ],
            price: 91.49,
            brand: "NEW BALANCE",
            rating: 2.7,
            numReviews: 136,
            stock: 175,
            isFeatured: false,
            banner: null
        },
       
        {
            name: "Japan S Men'S Sneakers Shoes - White/Seal Grey",
            slug: "japan-s-mens-sneakers-shoes-whiteseal-grey",
            category: "Men'S Sneakers Shoes",
            description: "The JAPAN S shoes are based on one of our throwback offerings from 1981.\n\nUpdated with a lightweight design and a modified cupsole, this shoe is made for comfort. It's also paired with nostalgic branding, like the ASICS Stripes on the quarter-panels and \"ASICS\"",
            images: [
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-ASI21A69510500W011-1.jpg",
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-ASI21A69510500W011-2.jpg"
            ],
            price: 52.78,
            brand: "ASICS",
            rating: 3.8,
            numReviews: 366,
            stock: 290,
            isFeatured: false,
            banner: null
        },
        
        {
            name: "Air Force 1 '07 Men'S Basketball Shoes - Cosmic Clay",
            slug: "air-force-1-07-mens-basketball-shoes-cosmic-clay",
            category: "Men'S Basketball Shoes",
            description: "NIKE AIR FORCE 1 '07",
            images: [
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-NIKFZ462780000O007-1.jpg",
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-NIKFZ462780000O007-2.jpg"
            ],
            price: 79.38,
            brand: "NIKE",
            rating: 2.4,
            numReviews: 254,
            stock: 129,
            isFeatured: true,
            banner: null
        },
        {
            name: "1906A Men'S Sneakers Shoes - Grey",
            slug: "1906a-mens-sneakers-shoes-grey",
            category: "Men'S Sneakers Shoes",
            description: "The 1906A, like its cousins the 2002R and the 860v2, is led by a sole unit featuring a combination of flexible ACTEVA LITE cushioning, shock absorbing N-ergy, and segmented ABZORB SBS pods at the heel. This hi-tech approach is also reflected in the 1906A’s",
            images: [
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-NEWU1906ACGRE008-1.jpg",
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-NEWU1906ACGRE008-2.jpg"
            ],
            price: 179.96,
            brand: "NEW BALANCE",
            rating: 0.6,
            numReviews: 92,
            stock: 99,
            isFeatured: true,
            banner: null
        },
        {
            name: "Air Jordan 5 Retro Men'S Basketball Shoes - Army Olive",
            slug: "air-jordan-5-retro-mens-basketball-shoes-army-olive",
            category: "Men'S Basketball Shoes",
            description: "ICONIC ON THE STREET.",
            images: [
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-NIKDD0587308OLI007-1.jpg",
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-NIKDD0587308OLI007-2.jpg"
            ],
            price: 128.18,
            brand: "NIKE",
            rating: 3.3,
            numReviews: 355,
            stock: 229,
            isFeatured: true,
            banner: null
        },
        {
            name: "Air Force 1 '07 Men'S Basketball Shoes - Black",
            slug: "air-force-1-07-mens-basketball-shoes-black",
            category: "Men'S Basketball Shoes",
            description: "NIKE AIR FORCE 1 '07",
            images: [
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-NIKFZ4615001005007-1.jpg",
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-NIKFZ4615001005007-2.jpg"
            ],
            price: 111.13,
            brand: "NIKE",
            rating: 0.8,
            numReviews: 69,
            stock: 51,
            isFeatured: false,
            banner: null
        },
        {
            name: "Air Force 1 '07 Lv8 Men'S Basketball Shoes - Dark Stucco",
            slug: "air-force-1-07-lv8-mens-basketball-shoes-dark-stucco",
            category: "Men'S Basketball Shoes",
            description: "Comfortable, durable and timeless—it’s number 1 for a reason. The AF1's classic ‘80s construction pairs with neutral colors and layered textures for a utilitarian look.",
            images: [
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-NIKFJ4170002GRE007-1.jpg",
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-NIKFJ4170002GRE007-2.jpg"
            ],
            price: 102.45,
            brand: "NIKE",
            rating: 3.2,
            numReviews: 337,
            stock: 63,
            isFeatured: false,
            banner: null
        },
        {
            name: "2002 Unisex Sneakers Shoes - Grey",
            slug: "2002-unisex-sneakers-shoes-grey",
            category: "Unisex Sneakers Shoes",
            description: "Inspired by the popular MR2002, the New Balance 2002R casual shoes offer a callback to the running style of the 2000s in a modified mule silhouette. The uppers of these sneakers are crafted from a mix of durable suede and lightweight mesh for a balanced feel.",
            images: [
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-NEWM2002RFBNAV007-1.jpg",
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-NEWM2002RFBNAV007-2.jpg"
            ],
            price: 127.97,
            brand: "NEW BALANCE",
            rating: 3.1,
            numReviews: 372,
            stock: 66,
            isFeatured: true,
            banner: null
        },
        {
            name: "Air Max Plus Men'S Sneakers Shoes - Black",
            slug: "air-max-plus-mens-sneakers-shoes-black",
            category: "Men'S Sneakers Shoes",
            description: "REBELLIOUS AIR.",
            images: [
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-NIK60413305000511H-1.jpg",
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-NIK60413305000511H-2.jpg"
            ],
            price: 194.76,
            brand: "NIKE",
            rating: 3.5,
            numReviews: 281,
            stock: 397,
            isFeatured: true,
            banner: null
        },
        {
            name: "Bb550 Unisex Sneakers Shoes - Black",
            slug: "bb550-unisex-sneakers-shoes-black",
            category: "Unisex Sneakers Shoes",
            description: "The original 550 debuted in 1989 and made its mark on basketball courts from coast to coast. After its initial run, the 550 was filed away in the archives, before being reintroduced in limited-edition releases in late 2020, and returned to the full-time lineup",
            images: [
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-NEWBB550FF1005007-1.jpg",
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-NEWBB550FF1005007-2.jpg"
            ],
            price: 171.96,
            brand: "NEW BALANCE",
            rating: 0.3,
            numReviews: 494,
            stock: 286,
            isFeatured: true,
            banner: null
        },
        {
            name: "Fx 1000 Unisex Sneakers Shoes - White/Mustard",
            slug: "fx-1000-unisex-sneakers-shoes-whitemustard",
            category: "Unisex Sneakers Shoes",
            description: "The reissued 1000 brings a turn of the millennium classic out of the archives. Originally released in 1999, the 1000 embodied the era’s bold, futuristic styling with a streamlined, yet intricately detailed design. The standard synthetic upper and suede overl",
            images: [
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-NEWM1000FLM0MD008-1.jpg",
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-NEWM1000FLM0MD008-2.jpg"
            ],
            price: 191.96,
            brand: "NEW BALANCE",
            rating: 0.0,
            numReviews: 47,
            stock: 424,
            isFeatured: true,
            banner: null
        },
        {
            name: "Air Max Plus Men'S Sneakers Shoes - White",
            slug: "air-max-plus-mens-sneakers-shoes-white",
            category: "Men'S Sneakers Shoes",
            description: "THE BAD BOY OF AIR.",
            images: [
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-NIKCT109410200W007-1.jpg",
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-NIKCT109410200W007-2.jpg"
            ],
            price: 145.29,
            brand: "NIKE",
            rating: 2.0,
            numReviews: 19,
            stock: 344,
            isFeatured: false,
            banner: null
        },
        {
            name: "Air Jordan 6 Retro Men'S Basketball Shoes - White",
            slug: "air-jordan-6-retro-mens-basketball-shoes-white",
            category: "Men'S Basketball Shoes",
            description: "Air Jordan 6 Retro.",
            images: [
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-NIKCT852917000W007-1.jpg",
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-NIKCT852917000W007-2.jpg"
            ],
            price: 121.78,
            brand: "NIKE",
            rating: 3.3,
            numReviews: 292,
            stock: 117,
            isFeatured: true,
            banner: null
        },
        {
            name: "Air Force 1 '07 Men'S Basketball Shoes - White",
            slug: "air-force-1-07-mens-basketball-shoes-white",
            category: "Men'S Basketball Shoes",
            description: "LEGENDARY STYLE REFINED.",
            images: [
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-NIKCW2288111000008-1.jpg",
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-NIKCW2288111000008-2.jpg"
            ],
            price: 121.96,
            brand: "NIKE",
            rating: 4.1,
            numReviews: 435,
            stock: 476,
            isFeatured: false,
            banner: null
        },
        {
            name: "1906 Unisex Sneakers Shoes - Grey",
            slug: "1906-unisex-sneakers-shoes-grey",
            category: "Unisex Sneakers Shoes",
            description: "The 1906R, like its cousins the 2002R and the 860v2, is led by a sole unit featuring a combination of flexible ACTEVA LITE cushioning, shock absorbing N-ergy, and segmented ABZORB SBS pods at the heel. This hi-tech approach is also reflected in the 1906R’s",
            images: [
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-NEWU1906RNYGRE009-1.jpg",
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-NEWU1906RNYGRE009-2.jpg"
            ],
            price: 179.96,
            brand: "NEW BALANCE",
            rating: 1.0,
            numReviews: 73,
            stock: 334,
            isFeatured: true,
            banner: null
        },
        {
            name: "Gazelle Men'S Sneakers - Collegiate Green",
            slug: "gazelle-mens-sneakers-collegiate-green",
            category: "Men'S Sneakers",
            description: "Shoes with roots in sport but now a hallmark of iconic casual style.",
            images: [
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-ADIIF715400G008-1.jpg",
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-ADIIF715400G008-2.jpg"
            ],
            price: 60.0,
            brand: "ADIDAS",
            rating: 1.7,
            numReviews: 297,
            stock: 142,
            isFeatured: true,
            banner: null
        },
        {
            name: "Jersey Men'S T-Shirt - Wonder White",
            slug: "jersey-mens-t-shirt-wonder-white",
            category: "Men'S T-Shirt",
            description: "A football-inspired jacquard jersey made with recycled materials.",
            images: [
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-ADIJI807700WA_1-1.jpg",
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-ADIJI807700WA_1-2.jpg"
            ],
            price: 48.0,
            brand: "ADIDAS",
            rating: 0.8,
            numReviews: 126,
            stock: 215,
            isFeatured: false,
            banner: null
        },
        {
            name: "Sportwear Spring Break Sun Men'S T-Shirts - White",
            slug: "sportwear-spring-break-sun-mens-t-shirts-white",
            category: "Men'S T-Shirts",
            description: "AS U NSW TEE SPRING BREAK SUN",
            images: [
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-NIKFQ374910000W00M-1.jpg",
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-NIKFQ374910000W00M-2.jpg"
            ],
            price: 23.02,
            brand: "NIKE",
            rating: 4.1,
            numReviews: 114,
            stock: 412,
            isFeatured: true,
            banner: null
        },
        {
            name: "Club Tee Men'S T-Shirt - Black",
            slug: "club-tee-mens-t-shirt-black",
            category: "Men'S T-Shirt",
            description: "A comfortable, eye-catching tee made with recycled materials.",
            images: [
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-ADIIW3181005A_1-1.jpg",
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-ADIIW3181005A_1-2.jpg"
            ],
            price: 38.0,
            brand: "ADIDAS",
            rating: 2.4,
            numReviews: 477,
            stock: 424,
            isFeatured: true,
            banner: null
        },
        {
            name: "Sportwear M90 Am Day Lbr Men'S T-Shirts - Black",
            slug: "sportwear-m90-am-day-lbr-mens-t-shirts-black",
            category: "Men'S T-Shirts",
            description: "AS U NSW TEE M90 AM DAY LBR",
            images: [
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-NIKFQ375301000500S-1.jpg",
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-NIKFQ375301000500S-2.jpg"
            ],
            price: 24.0,
            brand: "NIKE",
            rating: 3.8,
            numReviews: 474,
            stock: 195,
            isFeatured: false,
            banner: null
        },
        {
            name: "Club Coaches Men'S Jacket - Black",
            slug: "club-coaches-mens-jacket-black",
            category: "Men'S Jacket",
            description: "AS M NK CLUB COACHES JKT",
            images: [
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-NIKFN331701000500L-1.jpg",
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-NIKFN331701000500L-2.jpg"
            ],
            price: 59.33,
            brand: "NIKE",
            rating: 0.4,
            numReviews: 21,
            stock: 436,
            isFeatured: false,
            banner: null
        },
        {
            name: "Men'S Shorts - Black",
            slug: "mens-shorts-black",
            category: "Men'S Shorts",
            description: "SHORT",
            images: [
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-ADIIW6604005A_M-1.jpg",
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-ADIIW6604005A_M-2.jpg"
            ],
            price: 32.0,
            brand: "ADIDAS",
            rating: 1.6,
            numReviews: 344,
            stock: 286,
            isFeatured: true,
            banner: null
        },
        {
            name: "Club Men'S Jacket - Black",
            slug: "club-mens-jacket-black",
            category: "Men'S Jacket",
            description: "A bomber-style jacket made with recycled materials.",
            images: [
                "https://www.footlocker.com.vn/media/catalog Venice/product/0/8/0882-ADIIW3180005A_1-1.jpg",
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-ADIIW3180005A_1-2.jpg"
            ],
            price: 100.0,
            brand: "ADIDAS",
            rating: 4.2,
            numReviews: 257,
            stock: 109,
            isFeatured: false,
            banner: null
        },
        {
            name: "Club Men'S Cargo Pants - Khaki",
            slug: "club-mens-cargo-pants-khaki",
            category: "Men'S Cargo Pants",
            description: "AS M NK CLUB CARGO PANT",
            images: [
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-NIKFZ576624700K30A-1.jpg",
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-NIKFZ576624700K30A-2.jpg"
            ],
            price: 48.0,
            brand: "NIKE",
            rating: 4.9,
            numReviews: 274,
            stock: 327,
            isFeatured: false,
            banner: null
        },
        {
            name: "Sportwear Am Day Lbr Air Men'S T-Shirts - White",
            slug: "sportwear-am-day-lbr-air-mens-t-shirts-white",
            category: "Men'S T-Shirts",
            description: "AS U NSW TEE AM DAY LBR AIR",
            images: [
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-NIKFQ375710000W00L-1.jpg",
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-NIKFQ375710000W00L-2.jpg"
            ],
            price: 25.45,
            brand: "NIKE",
            rating: 2.8,
            numReviews: 353,
            stock: 220,
            isFeatured: true,
            banner: null
        },
        {
            name: "Sportwear M90 Am Day Lbr Men'S T-Shirts - White",
            slug: "sportwear-m90-am-day-lbr-mens-t-shirts-white ",
            category: "Men'S T-Shirts",
            description: "AS U NSW TEE M90 AM DAY LBR",
            images: [
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-NIKFQ375310000W00L-1.jpg",
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-NIKFQ375310000W00L-2.jpg"
            ],
            price: 24.0,
            brand: "NIKE",
            rating: 2.9,
            numReviews: 434,
            stock: 383,
            isFeatured: true,
            banner: null
        },
        {
            name: "Club Chino Men'S Shorts - Khaki",
            slug: "club-chino-mens-shorts-khaki",
            category: "Men'S Shorts",
            description: "AS M NK CLUB CHINO SHORT",
            images: [
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-NIKFZ577324700K028-1.jpg",
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-NIKFZ577324700K028-2.jpg"
            ],
            price: 39.34,
            brand: "NIKE",
            rating: 0.8,
            numReviews: 184,
            stock: 337,
            isFeatured: true,
            banner: null
        },
        {
            name: "Sportwear Heart And Sole Men'S T-Shirts - White",
            slug: "sportwear-heart-and-sole-mens-t-shirts-white",
            category: "Men'S T-Shirts",
            description: "AS U NSW TEE HEART AND SOLE",
            images: [
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-NIKFQ378010000W00S-1.jpg",
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-NIKFQ378010000W00S-2.jpg"
            ],
            price: 20.0,
            brand: "NIKE",
            rating: 2.5,
            numReviews: 177,
            stock: 104,
            isFeatured: false,
            banner: null
        },
        {
            name: "Sportwear Heart And Sole Men'S T-Shirts - University Red",
            slug: "sportwear-heart-and-sole-mens-t-shirts-university-red",
            category: "Men'S T-Shirts",
            description: "AS U NSW TEE HEART AND SOLE",
            images: [
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-NIKFQ378065700R00L-1.jpg",
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-NIKFQ378065700R00L-2.jpg"
            ],
            price: 20.0,
            brand: "NIKE",
            rating: 4.1,
            numReviews: 494,
            stock: 295,
            isFeatured: true,
            banner: null
        },
        {
            name: "Flt Mvp Wm Ss Crew Men'S T-Shirts - Gym Red",
            slug: "flt-mvp-wm-ss-crew-mens-t-shirts-gym-red",
            category: "Men'S T-Shirts",
            description: "That's a clean lookin' tee! And it's made of soft cotton for a cozy feel.",
            images: [
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-NIKFN595868700R00L-1.jpg",
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-NIKFN595868700R00L-2.jpg"
            ],
            price: 25.45,
            brand: "NIKE",
            rating: 4.1,
            numReviews: 347,
            stock: 78,
            isFeatured: true,
            banner: null
        },
        {
            name: "Athletics Packable Men'S Jacket - Red",
            slug: "athletics-packable-mens-jacket-red",
            category: "Men'S Jacket",
            description: "New Balance Athletics Packable Mens Jacket - Red",
            images: [
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-NEWMO51501RD00R00L-1.jpg",
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-NEWMO51501RD00R00L-2.jpg"
            ],
            price: 119.96,
            brand: "NEW BALANCE",
            rating: 0.5,
            numReviews: 109,
            stock: 345,
            isFeatured: true,
            banner: null
        },
        {
            name: "Reimagined Graphic Mens T-Shirt 1 - Black",
            slug: "reimagined-graphic-mens-t-shirt-1-black",
            category: "Mens T-Shirt",
            description: "New Balance Reimagined Graphic Mens T-Shirt 1 - Black",
            images: [
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-NEWMT51506BK00500L-1.jpg",
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-NEWMT51506BK00500L-2.jpg"
            ],
            price: 31.96,
            brand: "NEW BALANCE",
            rating: 4.0,
            numReviews: 376,
            stock: 305,
            isFeatured: false,
            banner: null
        },
        {
            name: "Sst Men'S T-Shirt - Black",
            slug: "sst-mens-t-shirt-black",
            category: "Men'S T-Shirt",
            description: "Adidas SST Men's T-Shirt - Black",
            images: [
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-ADIJW1856005A_2-1.jpg",
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-ADIJW1856005A_2-2.jpg"
            ],
            price: 40.0,
            brand: "ADIDAS",
            rating: 0.7,
            numReviews: 295,
            stock: 402,
            isFeatured: false,
            banner: null
        },
        {
            name: "Vn Skaterboy Ii Men'S T-Shirt - White",
            slug: "vn-skaterboy-ii-mens-t-shirt-white",
            category: "Men'S T-Shirt",
            description: "Adidas VN Skaterboy II Men's T-Shirt - White",
            images: [
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-ADIJL320100WA_M-1.jpg",
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-ADIJL320100WA_M-2.jpg"
            ],
            price: 44.0,
            brand: "ADIDAS",
            rating: 0.5,
            numReviews: 335,
            stock: 51,
            isFeatured: true,
            banner: null
        },
        
        {
            name: "Brand Jm Stack Ss Crew Men'S T-Shirts - Gym Red",
            slug: "brand-jm-stack-ss-crew-mens-t-shirts-gym-red",
            category: "Men'S T-Shirts",
            description: "Air Who? Air Jordan, that's who. Graphics on an all-cotton tee for soft coziness.",
            images: [
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-NIKFN597868700R00L-1.jpg",
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-NIKFN597868700R00L-2.jpg"
            ],
            price: 21.82,
            brand: "NIKE",
            rating: 0.7,
            numReviews: 314,
            stock: 499,
            isFeatured: false,
            banner: null
        },
        {
            name: "Sportwear Clsc Hr 8In Women'S Shorts - Black",
            slug: "sportwear-clsc-hr-8in-womens-shorts-black",
            category: "Women'S Shorts",
            description: "More durable, less sheer and designed to be twice as stretchy as our previous Essentials shorts: we've revamped a wardrobe staple. Designed to support you from one task to the next, our Classics lifestyle shorts are made from stretchy fabric that's thick but",
            images: [
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-NIKDV779801000500S-1.jpg",
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-NIKDV779801000500S-2.jpg"
            ],
            price: 21.82,
            brand: "NIKE",
            rating: 4.6,
            numReviews: 99,
            stock: 275,
            isFeatured: false,
            banner: null
        },
        {
            name: "Women'S Crop Polo Shirt - Cloud White",
            slug: "womens-crop-polo-shirt-cloud-white",
            category: "Women'S Crop Polo Shirt",
            description: "A polo shirt made in part with a blend of recycled and renewable materials.",
            images: [
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-ADIIX355500WA_1-1.jpg",
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-ADIIX355500WA_1-2.jpg"
            ],
            price: 38.4,
            brand: "ADIDAS",
            rating: 4.2,
            numReviews: 398,
            stock: 320,
            isFeatured: false,
            banner: null
        },
        {
            name: "Basketball Woven Unisex Short - Putty Beige",
            slug: "basketball-woven-unisex-short-putty-beige",
            category: "Unisex Short",
            description: "Basketball shorts made in part with recycled materials.",
            images: [
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-ADIJC784201800L-1.jpg",
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-ADIJC784201800L-2.jpg"
            ],
            price: 80.0,
            brand: "ADIDAS",
            rating: 3.8,
            numReviews: 94,
            stock: 349,
            isFeatured: true,
            banner: null
        },
        {
            name: "Smr Gfx Ss Women'S T-Shirt - Black",
            slug: "smr-gfx-ss-womens-t-shirt-black",
            category: "Women'S T-Shirt",
            description: "SMR GFX TEE SS",
            images: [
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-ADIIW6297005A_M-1.jpg",
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-ADIIW6297005A_M-2.jpg"
            ],
            price: 18.0,
            brand: "ADIDAS",
            rating: 0.4,
            numReviews: 69,
            stock: 294,
            isFeatured: true,
            banner: null
        },
        {
            name: "Bulls Oversized Tee - Ivory",
            slug: "bulls-oversized-tee-ivory",
            category: "Oversized Tee",
            description: "NBA Bulls Oversized Tee - Ivory",
            images: [
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-NBAMT241B114IVO00M-1.jpg",
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-NBAMT241B114IVO00M-2.jpg"
            ],
            price: 30.36,
            brand: "NBA",
            rating: 1.8,
            numReviews: 484,
            stock: 63,
            isFeatured: false,
            banner: null
        },
        {
            name: "Dnu Sportwear Oc 2 Bf Amd Women'S T-Shirts - Phantom",
            slug: "dnu-sportwear-oc-2-bf-amd-womens-t-shirts-phantom",
            category: "Women'S T-Shirts",
            description: "DNU AS W NSW TEE OC 2 BF AMD",
            images: [
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-NIKFQ887403001800L-1.jpg",
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-NIKFQ887403001800L-2.jpg"
            ],
            price: 24.0,
            brand: "NIKE",
            rating: 1.7,
            numReviews: 124,
            stock: 53,
            isFeatured: true,
            banner: null
        },
        {
            name: "Sportwear Classics Boxy Women'S T-Shirts - White",
            slug: "sportwear-classics-boxy-womens-t-shirts-white",
            category: "Women'S T-Shirts",
            description: "AS W NSW TEE CLASSICS BOXY",
            images: [
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-NIKFQ660110000W00L-1.jpg",
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-NIKFQ660110000W00L-2.jpg"
            ],
            price: 31.9,
            brand: "NIKE",
            rating: 0.2,
            numReviews: 75,
            stock: 84,
            isFeatured: false,
            banner: null
        },
        {
            name: "Sportwear Air Jersey Women'S Dress - White",
            slug: "sportwear-air-jersey-womens-dress-white",
            category: "Women'S Dress",
            description: "AS W NSW AIR JERSEY DRESS",
            images: [
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-NIKFN225410000W00L-1.jpg",
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-NIKFN225410000W00L-2.jpg"
            ],
            price: 50.37,
            brand: "NIKE",
            rating: 0.4,
            numReviews: 54,
            stock: 305,
            isFeatured: true,
            banner: null
        },
        {
            name: "Basketball Tee Unisex T-Shirt - Aurora Ruby",
            slug: "basketball-tee-unisex-t-shirt-aurora-ruby",
            category: "Unisex T-Shirt",
            description: "A cotton t-shirt for on and off the hardwood.",
            images: [
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-ADIJD612800500L-1.jpg",
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-ADIJD612800500L-2.jpg"
            ],
            price: 44.0,
            brand: "ADIDAS",
            rating: 3.9,
            numReviews: 291,
            stock: 168,
            isFeatured: false,
            banner: null
        },
        {
            name: "Adidas 3 S Pnst Women'S Dress - Mineral Green",
            slug: "adidas-3-s-pnst-womens-dress-mineral-green",
            category: "Women'S Dress",
            description: "A standout polo dress made with recycled materials.",
            images: [
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-ADIIX550700GA_L-1.jpg",
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-ADIIX550700GA_L-2.jpg"
            ],
            price: 28.8,
            brand: "ADIDAS",
            rating: 4.1,
            numReviews: 306,
            stock: 317,
            isFeatured: false,
            banner: null
        },
        {
            name: "Smr Gfx Ss Women'S Polo Shirt - Off White",
            slug: "smr-gfx-ss-womens-polo-shirt-off-white",
            category: "Women'S Polo Shirt",
            description: "SMR GFX POLO SS",
            images: [
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-ADIIW630100WA_L-1.jpg",
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-ADIIW630100WA_L-2.jpg"
            ],
            price: 24.0,
            brand: "ADIDAS",
            rating: 4.1,
            numReviews: 231,
            stock: 72,
            isFeatured: false,
            banner: null
        },
        {
            name: "Smr Gfx Women'S Shorts - Black",
            slug: "smr-gfx-womens-shorts-black",
            category: "Women'S Shorts",
            description: "SMR GFX SHORTS",
            images: [
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-ADIIW6302005A_M-1.jpg",
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-ADIIW6302005A_M-2.jpg"
            ],
            price: 24.0,
            brand: "ADIDAS",
            rating: 2.8,
            numReviews: 388,
            stock: 469,
            isFeatured: false,
            banner: null
        },
        {
            name: "Summer Holiday Graphic Play Women'S T-Shirt - Off White",
            slug: "summer-holiday-graphic-play-womens-t-shirt-off-white",
            category: "Women'S T-Shirt",
            description: "A soft polo shirt and your own little tropical oasis.",
            images: [
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-ADIIW629900WA_1-1.jpg",
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-ADIIW629900WA_1-2.jpg"
            ],
            price: 44.8,
            brand: "ADIDAS",
            rating: 0.3,
            numReviews: 112,
            stock: 264,
            isFeatured: true,
            banner: null
        },
        {
            name: "X Drake Cereal Clock T-Shirt",
            slug: "x-drake-cereal-clock-t-shirt",
            category: "T-Shirt",
            description: "New Balance New Balance X Drake Cereal Clock T-Shirt",
            images: [
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-NEWWT519431R0PK00L-1.jpg",
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-NEWWT519431R0PK00L-2.jpg"
            ],
            price: 39.96,
            brand: "NEW BALANCE",
            rating: 4.6,
            numReviews: 451,
            stock: 395,
            isFeatured: false,
            banner: null
        },
        {
            name: "Sportwear Oc 1 Boxy Vday Women'S T-Shirts - Dark Team Red",
            slug: "sportwear-oc-1-boxy-vday-womens-t-shirts-dark-team-red",
            category: "Women'S T-Shirts",
            description: "AS W NSW TEE OC 1 BOXY VDAY",
            images: [
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-NIKFQ887161900R00L-1.jpg",
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-NIKFQ887161900R00L-2.jpg"
            ],
            price: 32.73,
            brand: "NIKE",
            rating: 4.1,
            numReviews: 61,
            stock: 249,
            isFeatured: false,
            banner: null
        },
        {
            name: "Smr Gfx Ss Women'S T-Shirt - Off White",
            slug: "smr-gfx-ss-womens-t-shirt-off-white",
            category: "Women'S T-Shirt",
            description: "SMR GFX TEE SS",
            images: [
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-ADIIW629600WA_M-1.jpg",
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-ADIIW629600WA_M-2.jpg"
            ],
            price: 18.0,
            brand: "ADIDAS",
            rating: 3.8,
            numReviews: 464,
            stock: 388,
            isFeatured: true,
            banner: null
        },
        {
            name: "Smr Gfx Women'S Shorts - Silver Dawn",
            slug: "smr-gfx-womens-shorts-silver-dawn",
            category: "Women'S Shorts",
            description: "SMR GFX SHORTS",
            images: [
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-ADIIW63030SVA_1-1.jpg",
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-ADIIW63030SVA_1-2.jpg"
            ],
            price: 31.2,
            brand: "ADIDAS",
            rating: 2.1,
            numReviews: 435,
            stock: 234,
            isFeatured: true,
            banner: null
        },
        {
            name: "Heritage Relaxed Women'S T-Shirt - White",
            slug: "heritage-relaxed-womens-t-shirt-white",
            category: "Women'S T-Shirt",
            description: "New Balance Heritage Relaxed Womens T-Shirt - White",
            images: [
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-NEWWT51530WS00W00L-1.jpg",
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-NEWWT51530WS00W00L-2.jpg"
            ],
            price: 23.96,
            brand: "NEW BALANCE",
            rating: 1.5,
            numReviews: 205,
            stock: 235,
            isFeatured: true,
            banner: null
        },
        {
            name: "X Debut Sculpture Women'S T-Shirt - White",
            slug: "x-debut-sculpture-womens-t-shirt-white",
            category: "Women'S T-Shirt",
            description: "New Balance X Debut Sculpture Womens T-Shirt - White",
            images: [
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-NEWWT51935WT00W00L-1.jpg",
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-NEWWT51935WT00W00L-2.jpg"
            ],
            price: 35.96,
            brand: "NEW BALANCE",
            rating: 3.2,
            numReviews: 213,
            stock: 266,
            isFeatured: true,
            banner: null
        },
        {
            name: "Bulls Muscle Tee - Red",
            slug: "bulls-muscle-tee-red",
            category: "Muscle Tee",
            description: "NBA Bulls Muscle Tee - Red",
            images: [
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-NBAML241B10500R0XL-1.jpg",
                "https://www.footlocker.com.vn/media/catalog/product/0/8/0882-NBAML241B10500R0XL-2.jpg"
            ],
            price: 23.96,
            brand: "NBA",
            rating: 1.9,
            numReviews: 398,
            stock: 222,
            isFeatured: false,
            banner: null
        }
    

  ], // End of products array
}; // End of sampleData object


// const slugCounts = {};
// for (const product of sampleData.products) {
//   slugCounts[product.slug] = (slugCounts[product.slug] || 0) + 1;
// }

// console.log("Duplicate slugs found:");
// for (const slug in slugCounts) {
//   if (slugCounts[slug] > 1) {
//     console.log(`- "${slug}" appears ${slugCounts[slug]} times`);
//   }
// }

// Remember: Finding and maintaining real, stable image URLs for a large dataset
// requires significant effort and potentially an automated system or paid image service
// in a real application. The URLs provided here are illustrative examples.
// console.log(sampleData.products.length); // Verify the count
// You can now use this 'sampleData' object which includes the original 6 products
// plus 50 additional real-world product examples.
// console.log(sampleData.products.length); // Should output 56
export default sampleData;
