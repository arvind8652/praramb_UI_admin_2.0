"use client";
import React, { useState, useEffect } from "react";
import {
  ThemeProvider,
  CssBaseline,
  Box,
  AppBar,
  Drawer,
  Toolbar,
  Typography,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { lightTheme, darkTheme } from "./theme";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Link from "next/link";
import "./globals.css";
import { RecoilRoot } from "recoil";
import Login from "./login/page"; // Your login component
import { Password } from "@mui/icons-material";
import { postRequest } from "./_lib/apiService";
import { useSetRecoilData } from "./_lib/stateManagement/recoilManager";
import { brandDetail } from "./_lib/stateManagement/atoms";
import { AtomsName } from "./_lib/constant";

const drawerWidth = 240;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    // Check if the user is authenticated on component mount
    const authStatus = localStorage.getItem("isAuthenticated");
    if (authStatus === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const menuItems = [
    { text: "Dashboard", href: "/" },
    { text: "Customers", href: "/customers" },
    { text: "Staffs", href: "/staffs" },
    { text: "Settings", href: "/settings" },
  ];

  const drawer = (
    <div>
      <Toolbar />
      <List>
        {menuItems.map((item) => (
          <ListItem
            key={item.text}
            component={Link}
            href={item.href}
            onClick={() => {
              if (mobileOpen) {
                handleDrawerToggle();
              }
            }}
          >
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const handleLogin = () => {
    localStorage.setItem("isAuthenticated", "true");
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    // Clear login state from localStorage
    localStorage.setItem("isAuthenticated", "false");
    localStorage.setItem("myAppStorage", "");
    setIsAuthenticated(false);
  };

  return (
    <html lang="en">
      <body>
        <RecoilRoot>
          <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <CssBaseline />
            {!isAuthenticated ? (
              <Login onLogin={handleLogin} /> // Pass login function to Login component
            ) : (
              <Box sx={{ display: "flex" }}>
                <AppBar
                  position="fixed"
                  sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
                >
                  <Toolbar>
                    <IconButton
                      color="inherit"
                      aria-label="open drawer"
                      edge="start"
                      onClick={handleDrawerToggle}
                      sx={{ mr: 2, display: { sm: "none" } }}
                    >
                      <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                      Admin Panel
                    </Typography>
                    <IconButton
                      color="inherit"
                      aria-label="toggle theme"
                      edge="end"
                      onClick={toggleTheme}
                      sx={{ ml: "auto" }}
                    >
                      {isDarkMode ? "🌙" : "☀️"}
                    </IconButton>
                    <IconButton
                      color="inherit"
                      aria-label="logout"
                      onClick={handleLogout}
                      sx={{ ml: 2 }}
                    >
                      Logout
                    </IconButton>
                  </Toolbar>
                </AppBar>
                <Box
                  component="nav"
                  sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                >
                  <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                      keepMounted: true,
                    }}
                    sx={{
                      display: { xs: "block", sm: "none" },
                      "& .MuiDrawer-paper": {
                        boxSizing: "border-box",
                        width: drawerWidth,
                      },
                    }}
                  >
                    {drawer}
                  </Drawer>
                  <Drawer
                    variant="permanent"
                    sx={{
                      display: { xs: "none", sm: "block" },
                      "& .MuiDrawer-paper": {
                        boxSizing: "border-box",
                        width: drawerWidth,
                      },
                    }}
                    open
                  >
                    {drawer}
                  </Drawer>
                </Box>
                <Box
                  component="main"
                  sx={{
                    flexGrow: 1,
                    p: 3,
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    mt: 8,
                  }}
                >
                  {children}
                </Box>
              </Box>
            )}
          </ThemeProvider>
        </RecoilRoot>
      </body>
    </html>
  );
}
