import { Container, Typography } from "@mui/material";
import React from "react";
import Tabbable from "./components/Tabbable";

const Home: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4">Moo Buffet</Typography>
      <Tabbable />
    </Container>
  );
};

export default Home;
