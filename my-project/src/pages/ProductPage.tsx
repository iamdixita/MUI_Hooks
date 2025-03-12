// Wraps ProductList inside a full-page layout.

import React from "react";
import { Box } from "@mui/material";
import ProductList from "../components/ProductList";

const ProductPage: React.FC = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <ProductList />
    </Box>
  );
};

export default ProductPage;
