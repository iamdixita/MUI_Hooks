import { useState, useEffect } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    // Simulated API fetch (Replace with real API call)
    setTimeout(() => {
      setProducts([
        {
          id: 1,
          name: "Lipstick",
          price: 1250,
          image: "/src/assets/p1.jpg",
        },
        {
          id: 2,
          name: "Foundation",
          price: 400,
          image: "/src/assets/p2.jpg",
        },
        {
          id: 3,
          name: "Mascara",
          price: 380,
          image: "/src/assets/p3.jpg",
        },
        {
          id: 4,
          name: "Eyeshadow Palette",
          price: 220,
          image: "/src/assets/p4.jpg",
        },
        {
          id: 5,
          name: "Blush",
          price: 670,
          image: "/src/assets/p5.jpg",
        },
        {
          id: 6,
          name: "Nail Polish",
          price: 700,
          image: "/src/assets/p6.jpg",
        },
      ]);
      setLoading(false); // Set loading to false after fetching data
    }, 1000);
  }, []);

  return { products, loading }; // Return both products and loading state
};

export default useProducts;
