import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import React, { useState } from "react";
import { Link } from "../style/StyleComponents";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const handleMenu=()=>{
    setIsMobile(prev=>!prev);
  }

  const NavMenu = () => {
    return (
      <Drawer open={isMobile} onClose={()=>setIsMobile(prev=>!prev)} sx={{
        color:"#101426",
        width:"80%"
      }}>
        <Stack width={"60vw"} height={"100vh"}>
        <ul className="flex flex-col space-y-4 bg-[#101426] h-full">
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link>Resumes</Link>
        </ul>
        </Stack>
      </Drawer>
    );
  };
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
            <IconButton color="inherit" onClick={handleMenu} >
              <MenuIcon />
            </IconButton>
          </Box>
          <Box
            sx={{
              display: { xs: "none", sm: "block" },
            }}
          >
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link>Resumes</Link>
          </Box>
          <NavMenu/>
        </Toolbar>
      </AppBar>
    </Box>
  );
};


const IconBtn = ({ title }) => {
  return (
    <Tooltip>
      <IconButton color="inherit">{}</IconButton>
    </Tooltip>
  );
};
export default Header;
