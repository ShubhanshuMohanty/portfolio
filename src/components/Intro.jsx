import { Typography } from "@mui/material";
import React from "react";
import SocialList from "./SocialList";
import ShowTecno from "./ShowTecno";

const Intro = () => {
  return (
    <div>
      <Typography
        fontSize={{ xs: "40px", sm: "50px", md: "60px", lg: "70px" }}
        sx={{
          color: "white",
        }}
      >
        Hello 👋.
      </Typography>
      <Typography
        sx={{
          color: "#8D8D8D",
          fontSize: { xs: "16px", sm: "20px", md: "25px", lg: "30px" },
        }}
      >
        I am <span style={{ color: "#E3405F" }}>Shubhanshu Mohanty</span>. IT
        Student, React and .NET Developer, Always learning
      </Typography>
      <SocialList/>
      {/* <ShowTecno name="Languages"/> */}
    </div>
  );
};

export default Intro;
