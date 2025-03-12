// A reusable MUI Card component to display product details.

import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  CardActions,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

// Define TypeScript interface for product properties.
interface ProductCardProps {
  id: number; // Unique identifier for the product
  name: string; // Product name
  price: number; // Product price
  image: string; // URL for the product image
}

// Functional component for displaying a product card.
const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  image,
}) => {
  const navigate = useNavigate(); // React Router hook for navigation

  return (
    // The Card component is a container that holds product details.
    <Card sx={{ maxWidth: 300, m: 2 }}>
      {/* CardMedia displays the product image */}
      <CardMedia component="img" height="140" image={image} alt={name} />

      {/* This wraps the text content of the card (product name & price). */}
      <CardContent>
        {/* Product name displayed in h6 typography */}
        <Typography variant="h6">{name}</Typography>

        {/* Product price with secondary text color */}
        <Typography color="text.secondary">${price}</Typography>
      </CardContent>

      {/* Holds interactive elements (buttons, links, actions). */}
      <CardActions>
        {/* Button to navigate to the product details page using the product ID */}
        <Button size="small" onClick={() => navigate(`/products/${id}`)}>
          View Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard; // Export the component for reuse
