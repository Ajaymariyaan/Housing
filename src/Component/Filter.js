
import React, { useState } from "react";
import {
  Tune,
  Search as SearchIcon,
  Close,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Checkbox,
  Drawer,
  FormControlLabel,
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography,
  InputAdornment,
  Icon,
  IconButton,
} from "@mui/material";

function FilterComp({ onFilterChange,isOpen, onClose}) {
  // const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const data = [
    {
      id: 1,
      name: "Cluster",
      subItems: [
        "Rainforest Habitat Enclosure",
        "Northern Highland Zoological Sanctuary",
        "Savannah Herbivore Grazing Zone",
        "Insect and Arthropod Study Zone",
        "Aquatic Life Research Zone",
      ],
    },
    {
      id: 2,
      name: "Sites",
      subItems: [
        
        "Hillcrest Wildlife Center", "Greenwood Safari Park", "Silverlake Animal Reserve","BlueRiver Wildlife Sanctuary","Golden Plains Animal Park","Evergreen Zoological Center","Maplewood Wildlife Reserve","Redwood Safari Grounds","Crystal Lake Wildlife Park", ],
    },
    {
      id: 3,
      name: "Species",
      subItems: ["542", "487", "623", "510", "578", ],
    },
  ];

  const [activeItem, setActiveItem] = useState(data[0]);
  const [checkedItems, setCheckedItems] = useState({});

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  const handleCheckboxChange = (parentName, subItem) => {
    setCheckedItems((prev) => ({
      ...prev,
      [parentName]: {
        ...(prev[parentName] || {}),
        [subItem]: !prev[parentName]?.[subItem],
      },
    }));
  };

  const handleClearAll = () => {
    setCheckedItems({});
    if (onFilterChange) {
      onFilterChange({}); 
    }
  };

  const getFilterCount = (parentName) => {
    if (!checkedItems[parentName]) return 0;
    return Object.values(checkedItems[parentName]).filter(Boolean).length;
  };

  const getTotalFilterCount = () => {
    let count = 0;
    for (const key in checkedItems) {
      if (getFilterCount(key) > 0) count++;
    }
    return count;
  };

  const totalCount = getTotalFilterCount();

  const handleApply = () => {
    if (onFilterChange) {
      onFilterChange(checkedItems);
      
      
    }
    // setOpen(false);
    onClose();
    
  };

  return (
    <Box>
      {/* <Button
        onClick={toggleDrawer(true)}
        variant="outlined"
        sx={{ color: "#037830ff", fontWeight: 500, borderColor: "#037830ff", 
          width:{xl:"100px",
            lg:"100px",md:"100px",sm:"100px",xs:"100%",
          },
        
          // width:"100px"
        }}
      >
        <Tune /> 
       <Typography >Filter</Typography> 
      </Button> */}

      <Drawer
        anchor="right"
         open={isOpen}
        onClose={onClose}
        PaperProps={{
          sx: {
            //  width: "562px",
             width:{ xl:"562px",
              lg:"562px",
              md:"562px",
              sm:"562px",
              xs:"360px"
            } ,
            
             height: "100%" },
        }}
      >
        <Box  sx={{
          display:"flex", justifyContent:"space-between",   bgcolor: "#EFF5F2",
          alignItems:"center"
        }}>
        <Typography
          sx={{
            pt: "20px",
            pb: "10px",
            pl: "30px",
            bgcolor: "#EFF5F2",
            display: "flex",
            alignItems: "center",
            gap: "12px",
            fontWeight: "500",
            color: "#44544A",
          }}
        >
          <Tune />
          <h2>Filter ({totalCount})</h2>
        </Typography>
        <IconButton onClick={toggleDrawer(false)} sx={{ color: "#44544A" ,m:1}}>
    <Close />
  </IconButton>
  </Box>
       

        <Box sx={{ display: "flex", flexDirection: "row", gap: "20px", height: "550px" }}>
          <Box sx={{ bgcolor: "#EFF5F2", width: "260px", color: "#006D35" }}>
            <List>
              {data.map((item) => (
                <ListItem
                  button
                  key={item.id}
                  onClick={() => handleItemClick(item)}
                  sx={{
                    backgroundColor: activeItem?.id === item.id ? "#b3cdb1ff" : "#EFF5F2",
                  }}
                >
                  <ListItemText
                    primary={
                      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <Box component="span" sx={{ fontWeight: activeItem?.id === item.id ? 600 : "normal" }}>
                          {item.name}
                        </Box>
                        {getFilterCount(item.name) > 0 && (
                          <Box
                            sx={{
                              color: "#037830ff",
                              borderRadius: "50%",
                              width: "24px",
                              height: "24px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontSize: "18px",
                              fontWeight: 700,
                            }}
                          >
                            {getFilterCount(item.name)}
                          </Box>
                        )}
                      </Box>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Box>

    
          <Box sx={{ flexGrow: 1, px: 2 }}>
            <TextField
              sx={{ mt: "10px", mb: "10px" }}
              variant="outlined"
              placeholder={`Search ${activeItem.name}...`}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              size="small"
              onChange={(e) => {}}
            />

            <Box sx={{ maxHeight: "450px", overflowY: "auto" }}>
              <List>
                {activeItem.subItems.map((subItem, index) => (
                  <ListItem key={index}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={checkedItems[activeItem.name]?.[subItem] || false}
                          onChange={() => handleCheckboxChange(activeItem.name, subItem)}
                        />
                      }
                      label={subItem}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            pt: "30px",
            height: "100px",
          }}
        >
          <Button
            onClick={handleClearAll}
            variant="outlined"
            sx={{ width: "200px", height: "46px", color: "#37BD69", borderColor: "#37BD69" }}
          >
            Clear All
          </Button>
          <Button
            onClick={handleApply}
            variant="contained"
            sx={{ width: "200px", height: "46px", bgcolor: "#37BD69", color: "white" }}
          >
            Apply
          </Button>
        </Box>
      </Drawer>
    </Box>
  );
}

export default FilterComp;
