import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{
          background: "transparent",
          boxShadow: "none",
        }}
        position="static"
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ color: "black", flexGrow: 1 }}
          >
            Astro
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
