export const Products = [
  {
    id: 1,
    title: "Shoes",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D",
    ],
    regularPrice: 90,
    price: 100.0,
    stock: 20,
    categorys: ["Footwear", "Fashion"],
    description:
      "Step into comfort and style with our premium shoes, designed for everyday wear and versatility. Crafted from high-quality materials, these shoes offer exceptional durability and breathability, ensuring your feet stay cool and comfortable throughout the day. The cushioned insoles provide excellent support, making them ideal for long walks, work, or casual outings. Their sleek design and modern color options make them a perfect match for any outfit, whether you're dressing up or keeping it casual. The sturdy outsoles offer reliable traction on various surfaces, reducing the risk of slips and falls. With a focus on both fashion and function, these shoes are suitable for all ages and occasions. Easy to clean and maintain, they are built to last and retain their shape even after extended use. Experience the perfect blend of comfort, durability, and style with our shoes, and make every step a confident one.",
    reviews: [
      {
        user: "Alice",
        comment: "Great quality and very comfortable!",
        rating: 5,
      },
      {
        user: "Bob",
        comment: "Stylish and affordable. Highly recommend!",
        rating: 4,
      },
      {
        user: "Charlie",
        comment: "Perfect fit and excellent support.",
        rating: 5,
      },
      {
        user: "Diana",
        comment: "Love the design and color options!",
        rating: 4,
      },
      {
        user: "Ethan",
        comment: "Best shoes I've ever owned. Worth every penny!",
        rating: 5,
      },
    ],
  },
  {
    id: 2,
    title: "Earphone",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RWFycGhvbmV8ZW58MHx8MHx8fDA%3D",
    ],
    regularPrice: 30,
    price: 40.0,
    stock: 20,
    categorys: ["Electronics", "Audio"],
    description:
      "Immerse yourself in crystal-clear sound with our high-quality earphones, engineered for music lovers and audiophiles alike. Featuring advanced noise cancellation technology, these earphones block out unwanted background noise, allowing you to enjoy your favorite tracks with exceptional clarity. The ergonomic design ensures a comfortable fit, even during extended listening sessions, while the lightweight build makes them easy to carry wherever you go. With a robust battery life, you can enjoy hours of uninterrupted music, podcasts, or calls. The earphones deliver deep bass, crisp highs, and balanced mids, providing a rich and dynamic audio experience. Compatible with a wide range of devices, they are perfect for commuting, workouts, or relaxing at home. The tangle-free cable and durable construction guarantee longevity and hassle-free use. Elevate your listening experience with earphones that combine superior sound quality, comfort, and reliability.",
    reviews: [
      {
        user: "Frank",
        comment: "Amazing sound quality for the price!",
        rating: 5,
      },
      {
        user: "Grace",
        comment: "Comfortable fit and great battery life.",
        rating: 4,
      },
      {
        user: "Hannah",
        comment: "Decent sound but could use better bass.",
        rating: 3,
      },
      {
        user: "Ian",
        comment: "Good value for money. Satisfied with the purchase.",
        rating: 4,
      },
      {
        user: "Jack",
        comment: "Not the best, but works fine for casual listening.",
        rating: 3,
      },
    ],
  },
  {
    id: 3,
    title: "Watch",
    images: [
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8V2F0Y2h8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8V2F0Y2h8ZW58MHx8MHx8fDA%3D",
    ],
    regularPrice: 60,
    price: 70.84,
    stock: 20,
    categorys: ["Accessories", "Fashion"],
    description:
      "Discover timeless elegance with our classic watch, designed to complement any style and occasion. Featuring a sleek stainless steel case and a comfortable strap, this watch combines durability with sophistication. The precise quartz movement ensures accurate timekeeping, while the easy-to-read dial adds a touch of simplicity and grace. Water-resistant and scratch-resistant, it is built to withstand daily wear and tear, making it a reliable accessory for both work and leisure. The minimalist design pairs effortlessly with formal attire or casual outfits, making it a versatile addition to your wardrobe. Whether you're attending a business meeting or a social event, this watch adds a refined touch to your look. Its lightweight construction ensures all-day comfort, and the adjustable strap provides a perfect fit for any wrist size. Make a statement of style and reliability with a watch that embodies craftsmanship and elegance.",
    reviews: [
      {
        user: "Liam",
        comment: "Stylish and elegant. Perfect for formal occasions.",
        rating: 5,
      },
      {
        user: "Mia",
        comment: "Love the design and the quality is top-notch.",
        rating: 5,
      },
      { user: "Noah", comment: "Great watch, but a bit pricey.", rating: 4 },
      {
        user: "Olivia",
        comment: "Very comfortable to wear and looks great!",
        rating: 5,
      },
      {
        user: "Sophia",
        comment: "Highly recommend! Excellent craftsmanship.",
        rating: 5,
      },
    ],
  },
  {
    id: 4,
    title: "Mobile",
    images: [
      "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=200",
    ],
    regularPrice: 890,
    price: 1000.84,
    stock: 20,
    categorys: ["Electronics", "Mobile"],
    description:
      "Experience cutting-edge technology with our latest smartphone, designed to meet all your communication and entertainment needs. Equipped with a powerful processor and ample RAM, this mobile delivers lightning-fast performance for multitasking, gaming, and streaming. The vibrant display offers stunning visuals with true-to-life colors, making every photo and video come alive. Capture memories in high definition with the advanced camera system, featuring multiple lenses for wide-angle, portrait, and night mode photography. The long-lasting battery ensures you stay connected throughout the day, while fast charging capabilities minimize downtime. With enhanced security features like facial recognition and fingerprint scanning, your data remains safe and accessible only to you. The sleek, ergonomic design fits comfortably in your hand and pocket, and the intuitive user interface makes navigation effortless. Stay ahead of the curve with a smartphone that combines innovation, style, and reliability.",
    reviews: [
      { user: "Ethan", comment: "Best smartphone I've ever used!", rating: 3 },
      {
        user: "Ava",
        comment: "Amazing camera quality and fast performance.",
        rating: 3,
      },
      {
        user: "Liam",
        comment: "Great battery life and user-friendly interface.",
        rating: 4,
      },
      {
        user: "Emma",
        comment: "Sleek design and powerful features.",
        rating: 3,
      },
      {
        user: "Olivia",
        comment: "Highly recommend! Worth every penny.",
        rating: 3,
      },
    ],
  },
  {
    id: 5,
    title: "Earphone",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RWFycGhvbmV8ZW58MHx8MHx8fDA%3D",
    ],
    regularPrice: 30,
    price: 40.0,
    stock: 20,
    categorys: ["Electronics", "Audio"],
    description:
      "Immerse yourself in crystal-clear sound with our high-quality earphones, engineered for music lovers and audiophiles alike. Featuring advanced noise cancellation technology, these earphones block out unwanted background noise, allowing you to enjoy your favorite tracks with exceptional clarity. The ergonomic design ensures a comfortable fit, even during extended listening sessions, while the lightweight build makes them easy to carry wherever you go. With a robust battery life, you can enjoy hours of uninterrupted music, podcasts, or calls. The earphones deliver deep bass, crisp highs, and balanced mids, providing a rich and dynamic audio experience. Compatible with a wide range of devices, they are perfect for commuting, workouts, or relaxing at home. The tangle-free cable and durable construction guarantee longevity and hassle-free use. Elevate your listening experience with earphones that combine superior sound quality, comfort, and reliability.",
    reviews: [
      {
        user: "Frank",
        comment: "Amazing sound quality for the price!",
        rating: 5,
      },
      {
        user: "Grace",
        comment: "Comfortable fit and great battery life.",
        rating: 4,
      },
      {
        user: "Hannah",
        comment: "Decent sound but could use better bass.",
        rating: 3,
      },
      {
        user: "Ian",
        comment: "Good value for money. Satisfied with the purchase.",
        rating: 4,
      },
      {
        user: "Jack",
        comment: "Not the best, but works fine for casual listening.",
        rating: 3,
      },
    ],
  },
];

export const Users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    password: "password123",
    role: "admin",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    password: "password456",
    role: "user",
  },
  {
    id: 3,
    name: "Alice Johnson",
    email: "alice@example.com",
    password: "password789",
    role: "user",
  },
  {
    id: 4,
    name: "Bob Brown",
    email: "bob@example.com",
    password: "password101",
    role: "user",
  },
  {
    id: 5,
    name: "Syed Haseeb",
    email: "haseeb@gmail.com",
    password: "haseeb123",
    role: "user",
  },
];
