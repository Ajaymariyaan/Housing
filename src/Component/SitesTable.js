import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  IconButton,
  InputAdornment,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import * as XLSX from "xlsx";
import { Download, Search as SearchIcon, Tune } from "@mui/icons-material";
import { DataGrid } from "@mui/x-data-grid";
import FilterComp from "./Filter";


function SitesTable({ rows,DataName }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({});

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const columns = [
    { field: "id", headerName: "NO", width: 80 },
    {
      field: "name",
      headerName: "Site Name",
      flex: 1,
      minWidth: 150,
      renderCell: (params) => (
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <img
            src={params.row.img}
            alt="img"
            style={{ width: 40, height: 40, borderRadius: 4 }}
          />
          <Box
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              maxWidth: "250px",
            }}
          >
            <Tooltip>{params.row.name}</Tooltip>
          </Box>
        </Box>
      ),
    },
    { field: "species", headerName: "Species" },
    { field: "animals", headerName: "Animals" },
    { field: "enclosures", headerName: "Enclosures" },
    { field: "sections", headerName: "Sections" },
    { field: "cluster", headerName: "Cluster", flex: 1, minWidth: 100 },
    {
      field: "inCharge",
      headerName: "In-Charge",
      flex: 1,
      minWidth: 100,
      renderCell: (params) => (
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <img
            src={params.row.avatar}
            alt="avatar"
            style={{ width: 40, height: 40, borderRadius: "50%" }}
          />
          <span>{params.row.inCharge}</span>
        </Box>
      ),
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: () => (
        <Box
          sx={{
            display: "flex",
            gap: 2.5,
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "15px",
          }}
        >
          <img
            src="/img/call.svg"
            alt="call"
            style={{ width: 24, height: 24, cursor: "pointer" }}
          />
          <img
            src="/img/mess.svg"
            alt="message"
            style={{ width: 24, height: 24, cursor: "pointer" }}
          />
        </Box>
      ),
    },
  ];

  const filteredData = rows.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    let matchesFilters = true;

    for (const category in filters) {
      const selectedSubItems = Object.entries(filters[category])
        .filter(([_, checked]) => checked)
        .map(([subItem]) => subItem);

      if (selectedSubItems.length === 0) continue;

      if (category === "Cluster" && !selectedSubItems.includes(item.cluster)) {
        matchesFilters = false;
        break;
      }

      if (category === "Sites" && !selectedSubItems.includes(item.name)) {
        matchesFilters = false;
        break;
      }

      if (
        category === "Species" &&
        !selectedSubItems.includes(item.species.toString())
      ) {
        matchesFilters = false;
        break;
      }
    }

    return matchesSearch && matchesFilters;
  });
  const handleDownload = () => {
    if (filteredData.length === 0) {
      alert("No data to download.");
      return;
    }

    const worksheet = XLSX.utils.json_to_sheet(filteredData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet2");
    XLSX.writeFile(workbook, "Site-records-by-ajai.xlsx");
  };
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const toggleDrawer = (open) => () => {
      setIsDrawerOpen(open);
    };
  

  return (
    <Card
      sx={{
        borderRadius: "16px",
        p: "24px ",
        bgcolor: "#fff",
        width: "100%",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              color: "#44544A",
              fontWeight: "700",
            }}
          > 
         {/* {filteredData.map((item, index) => (
        <p key={index}>All Sites ({index}) - {item.name}</p>
      ))} */}
            {DataName} ({filteredData.length}) 
          </Typography>

          <IconButton
            sx={{
              display: "flex",
              gap: "6px",
              color: "#006D35",
              '&:hover': { cursor: 'pointer' }
            }}
            onClick={handleDownload}
          >
            <Typography
              sx={{
                color: "#006D35",
                fontWeight: "700",
              }}
            >
              Download
            </Typography>

            <Download
              sx={{
                color: "#006D35",
              }}
            />
          </IconButton>
        </Box>
        <Box
         sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" ,md:'row'},
        justifyContent: { xl: "space-between", lg: "space-between", md: "space-between", sm: "space-between", xs: "" },
        alignItems:{xs:"end",sm:"center",md:"center",lg:"center",xl:"center"},
        gap:"10px"
       
    }}
        >
          <TextField 
          
          sx={{
            width:{xs:"100%", sm:"300px"},
           '& .MuiInputBase-input': {
          // padding: '0', 
          padding:"8px 12px 8px 12px",
          
        },
           
            
            // padding:"0px"
          
          }}
            variant="outlined"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
           <Button
        // onClick={toggleDrawer(true)}
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
      </Button>
          {/* <FilterComp onFilterChange={handleFilterChange} open={open} onClose={toggleDrawer(false)}/> */}
          </Box>

        <Box>
          <DataGrid
            rows={filteredData}
            columns={columns}
            autoHeight
            pageSizeOptions={[10]}
            disableColumnFilter
            disableColumnMenu
            disableColumnSorting
            disableColumnResize
            initialState={{
              pagination: {
                paginationModel: { pageSize: 10 },
              },
            }}
          />
          <FilterComp onFilterChange={handleFilterChange} 
        isOpen={isDrawerOpen}
        onClose={toggleDrawer(false)} />
        </Box>
        
      </Box>
    </Card>
  );
}

export default SitesTable;
