import {
  Add,
  AddPhotoAlternateOutlined,
  Close,
  ExpandMore,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Card,
  Drawer,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import AddSiteDrawer from "./AddSiteDrawer";
import { useState } from "react";

function AddDrawer({ onAddNewSite, isOpen, onClose }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const toggleDrawer = (open) => () => {
    setIsDrawerOpen(open);
    setSelectedValue("");
  };

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };

  const isButtonDisabled = selectedValue === "";

  return (
    <Box>
      <Drawer
        PaperProps={{
          sx: {
            width:{ xl:"562px",
              lg:"562px",
              md:"562px",
              sm:"562px",
              xs:"460px"
            } ,
           

            bgcolor: "#EFF5F2",
            // padding:" 0 10px 0 10px ",
            pb: "0px",
          },
        }}
        anchor="right"
        open={isOpen}
        onClose={onClose}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "24px",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
            }}
          >
            <Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "4px",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                  }}
                >
                  <Box
                    sx={{
                      bgcolor: "transparent",
                      color: "#44544A",
                      alignContent: "center",
                      mr: "6px",
                      "& .MuiAvatar-img": {
                        marginLeft: "0px",
                        paddingleft: "0px",
                      },
                      "&.MuiAvatar-root": {
                        ml: "0px",
                      },
                    }}
                  >
                    <AddPhotoAlternateOutlined />
                  </Box>
                  <Typography
                    sx={{
                      fontWeight: "500",
                      fontSize: "24px",
                      color: "#44544A",
                      // paddingLeft:{
                      //   xs:"30px"
                      // }
                    }}
                  >
                    Add New
                  </Typography>
                </Box>
                <Box
                  sx={{
                    color: "#44544A",
                  }}
                >
                  <Close sx={{
                    '&:hover': { cursor: 'pointer' }
                  }} onClick={onClose} />
                </Box>
              </Box>
            </Box>

            <Box
              sx={{
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  // padding: "10px",
                  bgcolor: "white",
                  border: "1px solid #839D8D",
                  borderRadius: "4px",
                  
                }}
              >
                <FormControl fullWidth  sx={{
                  padding:"10px",
                }}

                
                >
                  <InputLabel
                    sx={{
                      color: "#839D8D",
                      marginTop:"10px",
                      marginLeft:"10px",
                     

                      "&.Mui-focused": { color: "#839D8D", },
                    }}
                    id="demo-simple-select-label"
                  >
                    Select New Entity to Add
                  </InputLabel>
                  <Select
                    value={selectedValue}
                    llabelId="demo-simple-select-label"
                    id="Select-Id "
                    label="Select New Entity to Add"
                    onChange={handleChange}
                    sx={{
                      width:{ xl:"512px", 
                        lg:"512px",
                        md:"512px",
                        sm:"512px",
                        xs:"400px"
                      } ,
                      
                      color: "#839D8D",
                      bgcolor: "white",
                      borderColor: "#839D8D",
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#839D8D",
                      },
                    }}
                  >
                    <MenuItem sx={{ color: "#839D8D" }} value="option1">
                      Site
                    </MenuItem>
                    <MenuItem sx={{ color: "#839D8D" }} value="option2">
                      Cluster
                    </MenuItem>
                    <MenuItem sx={{ color: "#839D8D" }} value="option3">
                      Enclosure
                    </MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
          </Box>
        </Box>

        <Card
          sx={{
            // height: "120px",
            borderRadius: "6px",
            position: "fixed",
            bottom: 0,
            padding: "24px",
            bgcolor: "white",
            alignContent: "center",
          }}
        >
          <Button
            onClick={toggleDrawer(true)}
            sx={{
              bgcolor: "#37BD69",
               width:{ xl:"512px", 
                        lg:"512px",
                        md:"512px",
                        sm:"512px",
                        xs:"420px"
                      } ,
              height: "60px",

              textAlign: "center",
              "&.Mui-disabled": {
                color: "White",
              },
              // zIndex:1000
            }}
            variant="contained"
            disabled={isButtonDisabled}
          >
            ADD
          </Button>
        </Card>
        <AddSiteDrawer
          onAddNewSite={onAddNewSite}
          isOpen={isDrawerOpen}
          onClose={toggleDrawer(false)}
        />
      </Drawer>
    </Box>
  );
}

export default AddDrawer;
