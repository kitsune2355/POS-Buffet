import { AddCircle, RemoveCircle } from "@mui/icons-material";
import { IconButton, Stack, TextField } from "@mui/material";
import React from "react";

interface IQuantityProps {
  index: number;
  quantity: number;
  handleDecreaseQuantity: (index: number) => void;
  handleIncreaseQuantity: (index: number) => void;
  handleInputChange: (index: number, value: number) => void;
}

const Quantity: React.FC<IQuantityProps> = ({
  index,
  quantity,
  handleDecreaseQuantity,
  handleIncreaseQuantity,
  handleInputChange,
}) => {
  return (
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
        value={quantity}
        onChange={(e) => handleInputChange(index, Number(e.target.value))}
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
  );
};

export default Quantity;
