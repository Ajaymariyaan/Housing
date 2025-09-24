import SideBar from "./SideBar";
import { Box, Grid } from "@mui/material";

function Parent({ children }) {
  return (
    <>
      <Grid container spacing={2} sx={
        {
          display:"flex",


        }}>
        <Grid>
          <SideBar />
        </Grid>
        <Grid flex={1} sx={{height:"100%",width:"100%",flexGrow:1
       
        }}>
          <main>{children}</main>
        </Grid>
      </Grid>
    </>
  );
}
export default Parent;
