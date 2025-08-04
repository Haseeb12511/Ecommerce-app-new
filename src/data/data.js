export const Products = [
  {
    id: 1,
    title: "Shoes",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D",
    ],
    price: 100.0,
    stock: 20,
    categories: ["Footwear", "Fashion"],
    description: "Comfortable and stylish shoes for everyday wear.",
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
    price: 40.0,
    stock: 20,
    categories: ["Electronics", "Audio"],
    description: "High-quality earphones with noise cancellation.",
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
    price: 70.84,
    stock: 20,
    categories: ["Accessories", "Fashion"],
    description: "Elegant watch with a classic design.",
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
    price: 1000.84,
    stock: 20,
    categories: ["Electronics", "Mobile"],
    description: "Latest smartphone with advanced features.",
    reviews: [
      { user: "Ethan", comment: "Best smartphone I've ever used!", rating: 5 },
      {
        user: "Ava",
        comment: "Amazing camera quality and fast performance.",
        rating: 5,
      },
      {
        user: "Liam",
        comment: "Great battery life and user-friendly interface.",
        rating: 4,
      },
      {
        user: "Emma",
        comment: "Sleek design and powerful features.",
        rating: 5,
      },
      {
        user: "Olivia",
        comment: "Highly recommend! Worth every penny.",
        rating: 5,
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
