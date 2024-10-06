import { CardMedia, Container, Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import Quantity from "./components/Quantity";
import Navbar from "./components/Navbar";

const Cart: React.FC = () => {
  const [quantities, setQuantities] = useState(Array(11).fill(1));

  const handleIncreaseQuantity = (index: number) => {
    setQuantities((prev) => {
      const newQuantities = [...prev];
      newQuantities[index] += 1;
      return newQuantities;
    });
  };

  const handleDecreaseQuantity = (index: number) => {
    setQuantities((prev) => {
      const newQuantities = [...prev];
      if (newQuantities[index] > 1) {
        newQuantities[index] -= 1;
      }
      return newQuantities;
    });
  };

  const handleInputChange = (index: number, value: number) => {
    setQuantities((prev) => {
      const newQuantities = [...prev];
      newQuantities[index] = Math.max(1, value);
      return newQuantities;
    });
  };
  return (
    <Container maxWidth="lg" sx={{ marginTop: "2rem" }}>
      <Navbar />
      <Grid container spacing={2} pt={4}>
        {Array.from({ length: 11 }, (_, index) => (
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              spacing={2}
              p={4}
              sx={{ border: 1, borderColor: "primary.main", borderRadius: 5 }}
            >
              <Stack>
                <CardMedia
                  sx={{ height: 100 }}
                  component="img"
                  image="https://embed.widencdn.net/img/beef/melpznnl7q/800x600px/Top%20Sirloin%20Steak.psd?keep=c&u=7fueml"
                />
              </Stack>
              <Stack>
                <Typography variant="h5" textAlign="center">
                  Beef
                </Typography>
                <Quantity
                  index={index}
                  quantity={quantities[index]}
                  handleDecreaseQuantity={handleDecreaseQuantity}
                  handleIncreaseQuantity={handleIncreaseQuantity}
                  handleInputChange={handleInputChange}
                />
              </Stack>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Cart;
