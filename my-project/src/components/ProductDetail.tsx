import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CircularProgress, Typography, Box } from "@mui/material";
import useProducts from "../hooks/useProducts"; // Import the custom hook

// Define Product interface
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get product ID from URL params
  const { products, loading } = useProducts(); // Use the custom hook to get products list
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    // Find the product with the matching id
    const fetchedProduct = products.find(
      (product) => product.id === Number(id)
    );

    if (fetchedProduct) {
      setProduct(fetchedProduct); // Set the fetched product data
    }
  }, [id, products]); // Re-run effect when 'id' or 'products' changes

  if (loading) {
    return <CircularProgress />;
  }

  if (!product) {
    return <Typography>No product found</Typography>;
  }

  return (
    <Box>
      <Typography variant="h4">{product.name}</Typography>
      <img src={product.image} alt={product.name} />
      <Typography variant="h6">Price: ${product.price}</Typography>
    </Box>
  );
};

export default ProductDetailPage;
