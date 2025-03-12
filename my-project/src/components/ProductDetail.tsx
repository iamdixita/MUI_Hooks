import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CircularProgress, Typography, Box } from "@mui/material";

// Define Product interface
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get product ID from URL params
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching product by id (replace with API call)
    setTimeout(() => {
      const fetchedProduct = {
        id: Number(id),
        name: "Laptop",
        price: 999,
        image: "https://via.placeholder.com/150",
        description: "A high-quality laptop for all your needs.",
      };
      setProduct(fetchedProduct);
      setLoading(false);
    }, 1000);
  }, [id]);

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
      <Typography>{product.description}</Typography>
    </Box>
  );
};

export default ProductDetailPage;
