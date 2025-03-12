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
          name: "Laptop",
          price: 999,
          image: "https://via.placeholder.com/150",
        },
        {
          id: 2,
          name: "Phone",
          price: 499,
          image: "https://via.placeholder.com/150",
        },
        {
          id: 3,
          name: "Headphones",
          price: 199,
          image: "https://via.placeholder.com/150",
        },
      ]);
      setLoading(false); // Set loading to false after fetching data
    }, 1000);
  }, []);

  return { products, loading }; // Return both products and loading state
};

export default useProducts;
