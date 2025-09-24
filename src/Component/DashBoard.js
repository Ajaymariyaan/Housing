import React, { useState } from "react";
import { Box } from "@mui/material";
import SitesTable from "./SitesTable";
import Carder from "./Card";

function DashBoard() {
  const [sites, setSites] = useState([
    {
      id: 1,
      name: "Northern Highland Zoological Park",
      img: "/img/rabbi.png",
      species: 542,
      animals: 1234,
      enclosures: 210,
      sections: 24,
      cluster: "Rainforest Habitat Enclosure",
      inCharge: "John Mathew R",
      avatar: "/img/avatar.png",
    },
    {
      id: 2,
      name: "Hillcrest Wildlife Center",
      img: "/img/dog.png",
      species: 487,
      animals: 1189,
      enclosures: 198,
      sections: 19,
      cluster: "Northern Highland Zoological Sanctuary",
      inCharge: "Emily Carter",
      avatar: "/img/avatar.png",
    },

    {
      id: 3,
      name: "Greenwood Safari Park",
      img: "/img/elephant.png",
      species: 623,
      animals: 1420,
      enclosures: 230,
      sections: 28,
      cluster: "Savannah Herbivore Grazing Zone",
      inCharge: "Michael Thompson",
      avatar: "/img/avatar.png",
    },
    {
      id: 4,
      name: "Silverlake Animal Reserve",
      img: "/img/dyno.png",
      species: 510,
      animals: 1342,
      enclosures: 200,
      sections: 21,
      cluster: "Insect and Arthropod Study Zone",
      inCharge: "Sophia Williams",
      avatar: "/img/avatar.png",
    },
    {
      id: 5,
      name: "BlueRiver Wildlife Sanctuary",
      img: "/img/rabbi.png",
      species: 578,
      animals: 1287,
      enclosures: 215,
      sections: 23,
      cluster: "Aquatic Life Research Zone",
      inCharge: "David Johnson",
      avatar: "/img/avatar.png",
    },
    {
      id: 6,
      name: "Golden Plains Animal Park",
      img: "/img/dyno.png",
      species: 603,
      animals: 1405,
      enclosures: 240,
      sections: 27,
      cluster: "Rainforest Habitat Enclosure",
      inCharge: "Olivia Brown",
      avatar: "/img/avatar.png",
    },
    {
      id: 7,
      name: "Evergreen Zoological Center",
      img: "/img/dog.png",
      species: 495,
      animals: 1208,
      enclosures: 190,
      sections: 18,
      cluster: "Northern Highland Zoological Sanctuary",
      inCharge: "Ethan Davis",
      avatar: "/img/avatar.png",
    },
    {
      id: 8,
      name: "Maplewood Wildlife Reserve",
      img: "/img/deer.jpg",
      species: 555,
      animals: 1270,
      enclosures: 205,
      sections: 22,
      cluster: "Savannah Herbivore Grazing Zone",
      inCharge: "Charlotte Wilson",
      avatar: "/img/avatar.png",
    },
    {
      id: 9,
      name: "Redwood Safari Grounds",
      img: "/img/dyno.png",
      species: 620,
      animals: 1450,
      enclosures: 245,
      sections: 29,
      cluster: "Insect and Arthropod Study Zone",
      inCharge: "Benjamin Moore",
      avatar: "/img/avatar.png",
    },
    {
      id: 10,
      name: "Crystal Lake Wildlife Park",
      img: "/img/dog.png",
      species: 502,
      animals: 1215,
      enclosures: 195,
      sections: 20,
      cluster: "Aquatic Life Research Zone",
      inCharge: "Amelia Taylor",
      avatar: "/img/avatar.png",
    },
  ]);

  const handleAddNewSite = (newSite) => {
    const newId = sites.length ? Math.max(...sites.map((s) => s.id)) + 1 : 1;
    const siteWithId = { id: newId, ...newSite };
    setSites([...sites, siteWithId]);
  };
  const PageName = "DashBoard Page";

  return (
    <Box
      sx={{
        padding: "20px 24px 72px 24px",
        gap: "24px",
        display: "flex",
        flexDirection: "column",
        bgcolor: "#EFF5F2",

        width: {
          lg:"100%",
          xl: "100%",
          
        },
      }}
    >
      <Carder
        backgroundImage={"/img/banner.jpg"}
        PageName={PageName}
        onAddNewSite={handleAddNewSite}
      />
      <SitesTable rows={sites} DataName={"DashBoard"}/>
    </Box>
  );
}

export default DashBoard;
