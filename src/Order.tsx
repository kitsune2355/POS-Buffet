import { AddCircle, RemoveCircle } from "@mui/icons-material";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

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
        <Grid item xs={6} sm={4} md={2} lg={2} key={index}>
          <Stack direction="row" spacing={2}>
            <Card sx={{ maxWidth: 200 }}>
              <CardMedia
                sx={{ height: 100 }}
                component="img"
                image="https://embed.widencdn.net/img/beef/melpznnl7q/800x600px/Top%20Sirloin%20Steak.psd?keep=c&u=7fueml"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {category}
                </Typography>
                <Stack direction="row">
                  <IconButton
                    size="small"
                    color="primary"
                    onClick={() => handleDecreaseQuantity(index)}
                  >
                    <RemoveCircle />
                  </IconButton>
                  <TextField
                    fullWidth
                    type="number"
                    size="small"
                    value={quantities[index]}
                    onChange={(e) =>
                      handleInputChange(index, Number(e.target.value))
                    }
                    inputProps={{ min: 1, style: { textAlign: "center" } }}
                    sx={{
                      width: "60px",
                      "& input::-webkit-inner-spin-button": { display: "none" },
                      "& input::-webkit-outer-spin-button": { display: "none" },
                    }}
                  />
                  <IconButton
                    size="small"
                    color="primary"
                    onClick={() => handleIncreaseQuantity(index)}
                  >
                    <AddCircle />
                  </IconButton>
                </Stack>
              </CardContent>
              <Button fullWidth variant="contained" size="small">
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
