import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  Drawer,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import {
  AddPhotoAlternateOutlined,
  Close,
  ExpandMore,
} from "@mui/icons-material";
function AddSiteDrawer({ onAddNewSite, isOpen, onClose }) {
  const [open, setOpen] = useState(false);
  const [siteName, setSiteName] = useState("");
  const [cluster, setCluster] = useState("");
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");
  const [image, setImage] = useState(null);

  const toggleDrawer = (newOpen) => () => setOpen(newOpen);

  const handleAdd = () => {
    if (!siteName) return alert("Please enter Site Name");

    const newSite = {
      name: siteName,
      cluster: cluster || "Rainforest Habitat Enclosure",
      species: 252,
      animals: 542,
      enclosures: 113,
      sections: 273,
      inCharge: "John Mathew R",
      img: image || "/img/Lion1.png",
      avatar: "/img/avatar.png",
      longitude,
      latitude,
    };

    onAddNewSite(newSite);
    alert("Site added successfully!");
    setSiteName("");
    setCluster("");
    setLongitude("");
    setLatitude("");
    setImage(null);
    setOpen(false);
  };

  return (
    <Box>
      <Drawer
        anchor="right"
        open={isOpen}
        onClose={onClose}
        PaperProps={{
          sx: {
            // width: 562,
             width:{ xl:"562px",
              lg:"562px",
              md:"562px",
              sm:"562px",
              xs:"460px"
            } ,
            bgcolor: "#EFF5F2",
          },
        }}
      >
        <Box sx={{ padding: 3 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h5" color="#44544A" mb={2}>
              Add New Site
            </Typography>
            {/* <Close onClick={toggleDrawer(false)} /> */}
            <Close  sx={{
                    '&:hover': { cursor: 'pointer' }
                  }} onClick={onClose} />
          </Box>
          <Box
            sx={{
              bgcolor: "#fff",
              p: 2,
              borderRadius: 2,
              mb: 3,
            }}
          >
            <TextField
              fullWidth
              label="Site Name"
              value={siteName}
              onChange={(e) => setSiteName(e.target.value)}
              margin="normal"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#839D8D",
                  },

                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#839D8D",
                  },

                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#839D8D",
                  },
                },
                "& .MuiInputLabel-outlined": {
                  color: "#839D8D",
                },
                "& .MuiInputLabel-outlined.Mui-focused": {
                  color: "#839D8D",
                },
              }}
            />
            <TextField
              fullWidth
              label="Cluster"
              value={cluster}
              onChange={(e) => setCluster(e.target.value)}
              margin="normal"
              sx={{
                color: "#44544A",
                "& .MuiOutlinedInput-root": {
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#839D8D",
                  },

                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#839D8D",
                  },

                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#839D8D",
                  },
                },
                "& .MuiInputLabel-outlined": {
                  color: "#839D8D",
                },
                "& .MuiInputLabel-outlined.Mui-focused": {
                  color: "rgba(131, 157, 141, 1)",
                },
              }}
            />
          </Box>
          <Typography variant="h5" color="#44544A" mb={2}>
            Site Name And Image
          </Typography>
          <Box
            sx={{
              bgcolor: "#fff",
              p: 2,
              borderRadius: 2,
              mb: 3,
            }}
          >
            <Typography
              sx={{
                color: "#44544A",
              }}
              variant="h6"
            >
              Image
            </Typography>
            <Avatar
              src={image || "/img/frog.png"}
              sx={{ width: 100, height: 100, my: 2 }}
            />
            <Box
              onClick={() => alert("Implement image upload")}
              sx={{
                border: "1px dashed #C3CEC7",
                height: 56,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 2,
                cursor: "pointer",
                color: "#44544A",
              }}
            >
              <AddPhotoAlternateOutlined />
              <Typography>Upload image</Typography>
            </Box>
          </Box>
          <Typography variant="h5" color="#44544A" mb={2}>
            Add Location
          </Typography>
          <Box
            sx={{
              bgcolor: "#fff",
              p: 2,
              borderRadius: 2,
              mb: 13,
            }}
          >
            <TextField
              fullWidth
              label="Longitude"
              value={longitude}
              onChange={(e) => setLongitude(e.target.value)}
              margin="normal"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#839D8D",
                  },

                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#839D8D",
                  },

                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#839D8D",
                  },
                },
                "& .MuiInputLabel-outlined": {
                  color: "#839D8D",
                },
                "& .MuiInputLabel-outlined.Mui-focused": {
                  color: "#839D8D",
                },
              }}
            />
            <TextField
              fullWidth
              label="Latitude"
              value={latitude}
              onChange={(e) => setLatitude(e.target.value)}
              margin="normal"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#839D8D",
                  },

                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#839D8D",
                  },

                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#839D8D",
                  },
                },
                "& .MuiInputLabel-outlined": {
                  color: "#839D8D",
                },
                "& .MuiInputLabel-outlined.Mui-focused": {
                  color: "#839D8D",
                },
              }}
            />
          </Box>
        </Box>
        <Card
          sx={{
            position: "fixed",
            bottom: 0,
            padding: "24px",
            bgcolor: "white",
            alignContent: "center",
            zIndex:1
          }}
        >
          <Button
            onClick={handleAdd}
            variant="contained"
            sx={{
              bgcolor: "#37BD69",
              // width: 512,
               width:{ xl:"512px", 
                        lg:"512px",
                        md:"512px",
                        sm:"512px",
                        xs:"420px"
                      } ,
              height: 60,
              textAlign: "center",
              
            }}
          >
            ADD
          </Button>
        </Card>
      </Drawer>
    </Box>
  );
}

export default AddSiteDrawer;
