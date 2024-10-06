import { IconButton, MenuItem, Stack, Tab, Tabs } from "@mui/material";
import { TabPanel, TabContext } from "@mui/lab";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import theme from "../theme/Theme";
import Order from "../Order";
import Navbar from "./Navbar";

const category = [
  { label: "Meat", value: "meat" },
  { label: "Beef", value: "beef" },
  { label: "Vegetable", value: "vegetable" },
  { label: "Snack", value: "snack" },
  { label: "Dessert", value: "dessert" },
];

const Tabbable: React.FC = () => {
  const [tab, setTab] = useState("meat");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: string) => {
    setTab(newValue);
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handleMenuItemClick = (value: string) => {
    setTab(value);
    setDropdownOpen(false);
  };

  return (
    <Stack>
      <TabContext value={tab}>
        <Stack>
          <Navbar
            childrenTab={
              <Tabs value={tab} onChange={handleTabChange}>
                {category.map((cate) => (
                  <Tab label={cate.label} value={cate.value} />
                ))}
              </Tabs>
            }
            childrenMenuIcon={
              <IconButton size="small" onClick={toggleDropdown}>
                <MenuIcon />
              </IconButton>
            }
            childrenDropdown={
              dropdownOpen && (
                <Stack
                  sx={{
                    width: "100%",
                    position: "absolute",
                    right: 0,
                    background: theme.palette.primary.light,
                    color: theme.palette.primary.main,
                    opacity: 0.9,
                  }}
                >
                  {category.map((cate) => (
                    <MenuItem onClick={() => handleMenuItemClick(cate.value)}>
                      {cate.label}
                    </MenuItem>
                  ))}
                </Stack>
              )
            }
          />

          {/* Tab Panels */}
          <Stack>
            {category.map((cate) => (
              <TabPanel value={cate.value}>
                <Order category={cate.label} />
              </TabPanel>
            ))}
          </Stack>
        </Stack>
      </TabContext>
    </Stack>
  );
};

export default Tabbable;
