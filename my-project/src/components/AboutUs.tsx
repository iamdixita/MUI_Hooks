import React from "react";
import { Box, Typography, Card, CardContent, Grow } from "@mui/material";

const About: React.FC = () => {
  return (
    <Box
      sx={{
        p: 4,
        textAlign: "center",
        minHeight: "50vh",
        bgcolor: "#f7f7f7",
        mt: 4,
      }}>
      {/* Page Title */}
      <Typography
        variant="h3"
        sx={{ fontWeight: "bold", mb: 3, color: "#990F4B" }}>
        About Us
      </Typography>

      {/* Animated Info Cards */}
      <Grow in timeout={1000}>
        <Card
          sx={{ mb: 3, boxShadow: 5, borderRadius: 3, bgcolor: "white", p: 2 }}>
          <CardContent>
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", color: "primary.main" }}>
              🌿 Natural Beauty Products
            </Typography>
            <Typography sx={{ color: "#555", mt: 1 }}>
              We believe in harnessing nature’s best ingredients to create
              beauty products that nourish your skin.
            </Typography>
          </CardContent>
        </Card>
      </Grow>

      <Grow in timeout={1500}>
        <Card
          sx={{ mb: 3, boxShadow: 5, borderRadius: 3, bgcolor: "white", p: 2 }}>
          <CardContent>
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", color: "secondary.main" }}>
              💖 Self-Care & Confidence
            </Typography>
            <Typography sx={{ color: "#555", mt: 1 }}>
              Beauty isn’t just about appearance—it's about feeling confident in
              your own skin every day!
            </Typography>
          </CardContent>
        </Card>
      </Grow>

      <Grow in timeout={2000}>
        <Card
          sx={{ mb: 3, boxShadow: 5, borderRadius: 3, bgcolor: "white", p: 2 }}>
          <CardContent>
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", color: "success.main" }}>
              🌍 Eco-Friendly Commitment
            </Typography>
            <Typography sx={{ color: "#555", mt: 1 }}>
              Our products are cruelty-free, sustainable, and made with love for
              both people and the planet.
            </Typography>
          </CardContent>
        </Card>
      </Grow>
    </Box>
  );
};

export default About;
