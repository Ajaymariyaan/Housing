

import {
  Close,
  Drafts,
  ExpandLess,
  ExpandMore,
  Home,
  HomeOutlined,
  InboxSharp,
  KeyboardDoubleArrowLeft,
  KeyboardDoubleArrowRight,
  LocationOn,
  Menu as MenuIcon,
  MoveToInboxOutlined,
  Search,
  TableChartOutlined,
} from "@mui/icons-material";
import {
  AppBar,
  Box,
  Card,
  Collapse,
  CssBaseline,
  Drawer,
  IconButton,
  InputAdornment,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import Profile from "../View/Profile"; 
import { useRouter } from "next/router";




function SideBar() {
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [activeItem, setActiveItem] = useState("DashBoard");
  const [open, setOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
   

  const handleNavigation = (route, itemName) => {
    setActiveItem(itemName);
     if (isMobile) {
      setMobileOpen(false); 
    }
    router.push(route);
  };

  const drawerContent = (
    <Box
      sx={{
       
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        width: "290px",
      }}
    >
      <Box>
        <Box sx={{
          display:"flex",
          justifyContent:"space-between",
          alignItems:"center"
        }}> 
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            padding: "20px 0 0 20px",
          }}
        >
          <img src="/img/antzLogo.svg" alt="antz Logo" />
          <img src="/img/Union.svg" alt="antz Logo" />
        </Box>
        {/* <IconButton onClick={handleDrawerToggle}>
          <KeyboardDoubleArrowLeft/>
        </IconButton> */}
        {isMobile && (
    <IconButton onClick={handleDrawerToggle}>
      <KeyboardDoubleArrowLeft/>
    </IconButton>
  )}


        </Box>

        <Box sx={{ marginTop: "20px", padding: "5px" }}>
          <TextField
            variant="outlined"
            placeholder="Search..."
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Toolbar />
        <List component="nav">
          <ListItemButton onClick={() => handleNavigation("/", "DashBoard")}>
            <ListItemIcon sx={{ color: activeItem === "DashBoard" ? "#1F515B" : "grey" }}>
              <HomeOutlined />
            </ListItemIcon>
            <ListItemText primary="DashBoard" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <Drafts sx={{ color: "grey" }} />
            </ListItemIcon>
            <ListItemText primary="Report" />
          </ListItemButton>
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <InboxSharp sx={{ color: "grey" }} />
            </ListItemIcon>
            <ListItemText primary="Housing" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton
                sx={{
                  pl: 4,
                  bgcolor: activeItem === "DashBoard" ? "#1F515B" : "inherit",
                  color: activeItem === "DashBoard" ? "white" : "inherit",
                  "&:hover": {
                    bgcolor: "#1F515B",
                    color: "#ffffff",
                  },
                }}
                onClick={() => handleNavigation("/", "DashBoard")}
              >
                <ListItemIcon sx={{ color: activeItem === "DashBoard" ? "white" : "grey" }}>
                  <TableChartOutlined />
                </ListItemIcon>
                <ListItemText primary="DashBoard" />
              </ListItemButton>
              <ListItemButton
                sx={{
                  pl: 4,
                  bgcolor: activeItem === "Sites" ? "#1F515B" : "inherit",
                  color: activeItem === "Sites" ? "#ffffffff" : "inherit",
                  "&:hover": {
                    bgcolor: "#1F515B",
                    color: "#ffffff",
                  },
                }}
                onClick={() => handleNavigation("/Sites", "Sites")}
              >
                <ListItemIcon sx={{ color: activeItem === "Sites" ? "white" : "grey" }}>
                  <LocationOn />
                </ListItemIcon>
                <ListItemText primary="Sites" />
              </ListItemButton>
              <ListItemButton
                sx={{
                  pl: 4,
                  bgcolor: activeItem === "Cluster" ? "#1F515B" : "inherit",
                  color: activeItem === "Cluster" ? "white" : "inherit",
                  "&:hover": {
                    bgcolor: "#1F515B",
                    color: "#ffffff",
                  },
                }}
                onClick={() => handleNavigation("/Cluster", "Cluster")}
              >
                <ListItemIcon sx={{ color: activeItem === "Cluster" ? "white" : "grey" }}>
                  <MoveToInboxOutlined />
                </ListItemIcon>
                <ListItemText primary="Cluster" />
              </ListItemButton>
              <ListItemButton
                sx={{
                  pl: 4,
                  bgcolor: activeItem === "Enclosure" ? "#1F515B" : "inherit",
                  color: activeItem === "Enclosure" ? "white" : "inherit",
                  "&:hover": {
                    bgcolor: "#1F515B",
                    color: "#ffffff",
                  },
                }}
                onClick={() => handleNavigation("/Enclosure", "Enclosure")}
              >
                <ListItemIcon sx={{ color: activeItem === "Enclosure" ? "white" : "grey" }}>
                  <Home />
                </ListItemIcon>
                <ListItemText primary="Enclosure " />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
      </Box>
      <Box sx={{ bgcolor: "#EFF5F2", p: 2 }}>
        <Profile ProfileName={"Ajai Anto"} ProfileEmail={"ajaianto@gmail.com"} />
      </Box>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

    
      {isMobile && (
        <Box
          position="Fixed"
          sx={{
            
            
            // bgcolor: "#EFF5F2",
            color: "grey",
          //   mt:0,
          //   pt:0,
          //  padding:"0px",
          //  margin:"0px"
          
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
             
              onClick={handleDrawerToggle}
              // sx={{display: { md: "none" } }}
              sx={{
                
                
                bgcolor:"transprent",
                backdropFilter:"blur(5px)"

                
                
              }}
            >
              <MenuIcon/>
            </IconButton>
          </Toolbar>
        </Box>
      )}

      
      {!isMobile && (
        <Drawer
          sx={{
            width:"278px",
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: "292px",
              
            },
          }}
          variant="permanent"
          anchor="left"
        >
          {drawerContent}
        </Drawer>
      )}

      
      {isMobile && (
        <Drawer
          variant="temporary"
          anchor="left"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          sx={{
            "& .MuiDrawer-paper": {
             
              width: "292px",
            },
          }}
        >
          {drawerContent}
        </Drawer>
      )}
    </Box>
  );
}

export default SideBar;
