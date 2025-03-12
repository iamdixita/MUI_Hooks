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
  id: number;
  name: string;
  price: number;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  image,
}) => {
  const navigate = useNavigate(); // React Router hook for navigation

  return (
    <Card
      sx={{
        maxWidth: 300,
        m: 2,
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        },
        animation: "fadeIn 1s ease-out",
      }}>
      {/* CardMedia displays the product image */}
      <CardMedia component="img" height="160" image={image} alt={name} />

      {/* This wraps the text content of the card (product name & price). */}
      <CardContent sx={{ p: 0 }}>
        {/* Product name displayed in h6 typography */}
        <Typography variant="h6" sx={{ mt: 2 }}>
          {name}
        </Typography>

        {/* Product price with secondary text color */}
        <Typography color="text.secondary">${price}</Typography>
      </CardContent>

      {/* Holds interactive elements (buttons, links, actions). */}
      <CardActions sx={{ ml: 12, width: 85 }}>
        {/* Button to navigate to the product details page using the product ID */}
        <Button size="small" onClick={() => navigate(`/products/${id}`)}>
          View Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
