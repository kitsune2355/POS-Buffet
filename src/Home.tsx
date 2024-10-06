import { Container } from "@mui/material";
import React from "react";
import Tabbable from "./components/Tabbable";

const Home: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ marginTop: "2rem", marginBottom: "4rem" }}>
      <Tabbable />
    </Container>
  );
};

export default Home;
