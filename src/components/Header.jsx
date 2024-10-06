import { AppBar, Box, IconButton, Toolbar, Tooltip, Typography } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import React from "react";
import { Link } from "../style/StyleComponents";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }} height={"4rem"}>
      <AppBar
        position="static"
        sx={{
          bgcolor: "#101426",
          border: "1px solid white",
          marginTop: "1px",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h5">SM</Typography>
          <Box
            sx={{
              display: { xs: "block", sm: "none" },
            }}
          >
            <IconButton color="inherit">
              <MenuIcon />
            </IconButton>
          </Box>
          <Box
          sx={{
            display: { xs: "none", sm: "block" },
          }}>
            <Link to="/about">
                About
            </Link>
            <Link to="/projects">
                Projects
            </Link>
            <Link>
                Resumes
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

const IconBtn=({title})=>{
    return (
        <Tooltip>
            <IconButton color="inherit">
                {}
            </IconButton>
        </Tooltip>
    )
}
export default Header;
