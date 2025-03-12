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
          image: "https://via.placeholder.com/150?text=Lipstick",
        },
        {
          id: 2,
          name: "Foundation",
          price: 400,
          image: "https://via.placeholder.com/150?text=Foundation",
        },
        {
          id: 3,
          name: "Mascara",
          price: 380,
          image: "https://via.placeholder.com/150?text=Mascara",
        },
        {
          id: 4,
          name: "Eyeshadow Palette",
          price: 220,
          image: "https://via.placeholder.com/150?text=Eyeshadow+Palette",
        },
        {
          id: 5,
          name: "Blush",
          price: 670,
          image: "https://via.placeholder.com/150?text=Blush",
        },
        {
          id: 6,
          name: "Nail Polish",
          price: 700,
          image: "https://via.placeholder.com/150?text=Nail+Polish",
        },
      ]);
      setLoading(false); // Set loading to false after fetching data
    }, 1000);
  }, []);

  return { products, loading }; // Return both products and loading state
};

export default useProducts;
