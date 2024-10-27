import { IconButton, MenuItem, Stack, Tab, Tabs } from "@mui/material";
import { TabPanel, TabContext } from "@mui/lab";
import React, { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import theme from "../theme/Theme";
import Order from "../Order";
import Navbar from "./Navbar";
import { useCategory } from "../hook";

const Tabbable: React.FC = () => {
  const { categoryList, onFetchCategoryList } = useCategory();
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

  console.log("categoryList", categoryList);

  useEffect(() => {
    onFetchCategoryList();
  }, [onFetchCategoryList]);

  return (
    <Stack>
      <TabContext value={tab}>
        <Stack>
          <Navbar
            childrenTab={
              <Tabs value={tab} onChange={handleTabChange}>
                {categoryList.map((cate, key) => (
                  <Tab key={key} label={cate.category_Name} value={cate.id} />
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
                  {categoryList.map((cate, key) => (
                    <MenuItem
                      key={key}
                      onClick={() => handleMenuItemClick(cate.id)}
                    >
                      {cate.category_Name}
                    </MenuItem>
                  ))}
                </Stack>
              )
            }
          />

          {/* Tab Panels */}
          <Stack>
            {categoryList.map((cate) => (
              <TabPanel key={cate.id} value={cate.id}>
                <Order category={cate.category_Name} />
              </TabPanel>
            ))}
          </Stack>
        </Stack>
      </TabContext>
    </Stack>
  );
};

export default Tabbable;
