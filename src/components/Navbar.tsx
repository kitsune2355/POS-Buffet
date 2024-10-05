import { AppBar, IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <AppBar position="sticky" color="transparent" sx={{ boxShadow: "none" }}>
      <Toolbar>
        <IconButton>
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
