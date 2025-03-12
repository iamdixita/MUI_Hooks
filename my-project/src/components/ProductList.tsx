// This component fetches products using useProducts and displays them using ProductCard.

import React from "react";
import {
  Grid,
  Container,
  Typography,
  CircularProgress,
  Box,
} from "@mui/material"; // MUI components
import ProductCard from "../components/ProductCard"; // Import the reusable ProductCard component
import useProducts from "../hooks/useProducts"; // Import custom hook to fetch products

// Define ProductList component
const ProductList: React.FC = () => {
  // Call the custom hook to get the list of products and loading state
  const { products, loading } = useProducts(); // Assume useProducts returns { products, loading }

  return (
    <Container>
      {/* Typography for the title, styled as an h4 header and centered */}
      <Typography variant="h4" align="center" gutterBottom>
        Products
      </Typography>

      {/* Show loading indicator if data is still being fetched */}
      {loading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="50vh">
          <CircularProgress color="secondary" />
        </Box>
      ) : (
        <Grid container spacing={3} justifyContent="center">
          {products.map((product) => (
            <Grid item key={product.id}>
              <ProductCard {...product} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

// Export ProductList component for use in other parts of the app
export default ProductList;
