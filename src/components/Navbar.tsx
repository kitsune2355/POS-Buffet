import { IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import { ShoppingCart } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

interface INavbarProps {
  childrenTab?: React.ReactNode;
  childrenMenuIcon?: React.ReactNode;
  childrenDropdown?: React.ReactNode;
}

const Navbar: React.FC<INavbarProps> = ({
  childrenTab,
  childrenMenuIcon,
  childrenDropdown,
}) => {
  const navigate = useNavigate();

  const onHome = () => {
    navigate("/");
  };

  const onCart = () => {
    navigate("/cart");
  };
  return (
    <React.Fragment>
      {/* Desktop View */}
      <Stack
        sx={{
          display: { xs: "none", md: "block" },
          borderBottom: 1,
          borderColor: "divider",
          background: "#fff",
          position: "sticky",
          top: 0,
          zIndex: 1,
        }}
      >
        <Stack direction="row" justifyContent="space-between">
          <Typography
            variant="h4"
            pt={2}
            pb={2}
            onClick={onHome}
            sx={{ cursor: "pointer" }}
          >
            Moo Buffet
          </Typography>
          <IconButton size="small" onClick={onCart}>
            <ShoppingCart />
          </IconButton>
        </Stack>
        <Stack direction="row" justifyContent="flex-end">
          {childrenTab}
        </Stack>
      </Stack>

      {/* Mobile View */}
      <Stack
        sx={{
          background: "#fff",
          position: "sticky",
          top: 0,
          zIndex: 1,
        }}
      >
        <Stack sx={{ display: { xs: "block", md: "none" } }}>
          <Stack
            sx={{
              borderBottom: 1,
              borderColor: "divider",
              display: "flex",
              justifyContent: "space-between",
            }}
            direction="row"
          >
            <Typography variant="h4" pt={2} pb={2}>
              Moo Buffet
            </Typography>
            <Stack direction="row">
              <IconButton size="small" onClick={onCart}>
                <ShoppingCart />
              </IconButton>
              {childrenMenuIcon}
            </Stack>
          </Stack>
          {childrenDropdown}
        </Stack>
      </Stack>
    </React.Fragment>
  );
};

export default Navbar;
