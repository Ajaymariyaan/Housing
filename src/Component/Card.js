import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Profile from "../View/Profile";
import AddDrawer from "./Drawer";
import { Add, AddBoxOutlined } from "@mui/icons-material";
import { blue } from "@mui/material/colors";
function Carder({ backgroundImage, onAddNewSite, PageName }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = (open) => () => {
    setIsDrawerOpen(open);
  };

  const stats = [
    {
      img: "/img/siteRabbi.svg",
      title: "Site",
      value: "24",
    },
    {
      img: "/img/foot.svg",
      title: "Animal",
      value: "234.9k",
    },
    {
      img: "/img/Location.svg",
      title: "Cluster",
      value: "44",
    },
    {
      img: "/img/Enclosure.svg",
      title: "Enclosure",
      value: "359",
    },
  ];

  return (
    <Card
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "12px",
        paddingRight: "8px",
        width: "100%",
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: {xs: 'column', sm: 'row'},
            justifyContent: "space-between",
            alignItems: 'flex-start',
            gap: {xs: '10px', sm: '10px'}
          }}
        >
          <Box>
            <Typography
              sx={{
                color: "#FFFFFF",
                fontWeight: 500,

                fontSize: {
                  xl: "24px",
                  lg: "24px",
                  md: "24px",
                  sm: "24px",
                  xs: "18px",
                },
                // here i need to work on it for the Small screen ... the width shgould be reduce
                // then only the   + Add New Button should properly visibl in the smaller Screen .
              }}
            >
              {PageName}
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "start",
                alignItems: "center",
                gap: {
                  xl: "20px",
                  lg: "20px",
                  md: "20px",
                  sm: "20px",
                  xs: "6px",
                },
                marginTop: "20px",
              }}
            >
              <Box
                sx={{
                  color: "white",
                }}
              >
                <Profile
                  ProfileEmail={"ajai@gmail"}
                  ProfileName={" Ajay Anto"}
                />
              </Box>
              <Box
                sx={{
                  gap: "10px",
                  display: "flex",
                }}
              >
                <Avatar
                  sx={{
                    // backgroundColor: "#5d5c5cff",
                    bgcolor: "transparent",
                    backdropFilter: "blur(1000px)",
                    width: "40px",
                    height: "40px",
                  }}
                >
                  <img src="/img/phone.svg" alt="call Icon svg"></img>
                </Avatar>

                <Avatar
                  sx={{
                    // backgroundColor: "#6e6e6eff",
                    bgcolor: "transparent",
                    backdropFilter: "blur(100px)",
                    width: "40px",
                    height: "40px",
                  }}
                >
                  <img src="/img/chat.svg" alt="call Icon svg"></img>
                </Avatar>
              </Box>
            </Box>
          </Box>
          <Box>
            <Button
              sx={{
                color: "#31eb56ff", gap:"10px"
              }}
              onClick={toggleDrawer(true)}
            >
             
              Add New 
              <AddBoxOutlined/>
            </Button>
            <AddDrawer
              onAddNewSite={onAddNewSite}
              isOpen={isDrawerOpen}
              onClose={toggleDrawer(false)}
            />
          </Box>
        </Box>
        <Grid
          container
          spacing={2}
          sx={{
            backgroundColor: "#06000068",
            borderRadius: "4px",
            backdropFilter: "blur(5px)",
            color: "#52F990",
            width: "100%",
            marginTop: "20px",
            padding: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {stats?.map((item, index) => (
            <Grid key={index} size={{ md: 3, sm: 6, xs: 12 }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "15px",
                }}
              >
                <Avatar
                  sx={{
                    padding: 1,
                    bgcolor: "#2d2d2dff",
                    backdropFilter: "blur(15px)",
                    width: "60px",
                    height: "60px",
                  }}
                  src={item?.img}
                  variant="rounded"
                />
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography>{item?.value}</Typography>
                  <Typography sx={{ color: "#DAE7DF" }}>
                    {item?.title}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
        {/* </Box> */}
      </CardContent>
    </Card>
  );
}

export default Carder;
