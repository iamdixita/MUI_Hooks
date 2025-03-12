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

const ProductList: React.FC = () => {
  const { products, loading } = useProducts(); // Get the list of products and loading state

  return (
    <Container>
      <Typography
        align="center"
        gutterBottom
        sx={{ mt: 3, mb: 1, fontSize: "1.1rem", color: "#990F4B" }}>
        "Your Beauty, Your Way: Explore Our Top Selections"
      </Typography>

      {/* Show loading indicator if data is still being fetched */}
      {loading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
          overflow="auto">
          <CircularProgress color="secondary" />
        </Box>
      ) : (
        <Grid container spacing={3} justifyContent="center">
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <ProductCard {...product} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default ProductList;
