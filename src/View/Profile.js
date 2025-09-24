import {
  Avatar,
  Box,
  ClickAwayListener,
  Icon,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
// import CallIcon from "@mui/icons-material/Call";
// import { Message } from "@mui/icons-material";

function Profile({ ProfileName, ProfileEmail }) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "12px",
          alignItems: 'center'
        }}
      >
        <Avatar src="/img/avatar.png" alt="avatar"></Avatar>
        <Box>
          <Typography variant="Primary">{ProfileName}</Typography>
          <Typography>{ProfileEmail}</Typography>
        </Box>
      </Box>
    </>
  );
}

export default Profile;
