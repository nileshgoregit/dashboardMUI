import React from "react";
import Box from "@mui/material/Box";
import Sidenav from "../components/Sidenav";
import Navbarj from "../components/Navbarj";
import List from "../settings/List";

function Settings() {
  return (
    <>
      <div className="bgcolor">
        <Navbarj />
        <Box height={70} />
        <Box sx={{ display: "flex" }}>
          <Sidenav />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <List />
          </Box>
        </Box>
      </div>
    </>
  );
}

export default Settings;
