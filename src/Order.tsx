import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Quantity from "./components/Quantity";

interface IOrderProps {
  category: string;
}

const Order: React.FC<IOrderProps> = ({ category }) => {
  const [quantities, setQuantities] = useState(Array(34).fill(1));

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
    <Grid container spacing={2}>
      {Array.from({ length: 34 }, (_, index) => (
        <Grid item xs={12} sm={3} md={2} lg={2} key={index}>
          <Stack direction="row" spacing={2} justifyContent="center">
            <Card sx={{ maxWidth: 200 }}>
              <CardMedia
                sx={{ height: 100 }}
                component="img"
                image="https://embed.widencdn.net/img/beef/melpznnl7q/800x600px/Top%20Sirloin%20Steak.psd?keep=c&u=7fueml"
              />
              <CardContent sx={{ px: 1 }}>
                <Typography gutterBottom variant="h5" component="div">
                  {category}
                </Typography>
                <Quantity
                  index={index}
                  quantity={quantities[index]}
                  handleDecreaseQuantity={handleDecreaseQuantity}
                  handleIncreaseQuantity={handleIncreaseQuantity}
                  handleInputChange={handleInputChange}
                />
              </CardContent>
              <Button
                fullWidth
                variant="contained"
                size="small"
                sx={{ color: "#fff" }}
              >
                Add
              </Button>
            </Card>
          </Stack>
        </Grid>
      ))}
    </Grid>
  );
};

export default Order;
