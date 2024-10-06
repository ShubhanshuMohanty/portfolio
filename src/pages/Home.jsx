import { Container, Grid2 } from "@mui/material";
import React from "react";
import Intro from "../components/Intro";
import FeelingProud from "../components/FeelingProud";
import Tecno from "../components/Tecno";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center ">
        <div className="">
          <Intro />
        </div>
        <div className="">
          <img src="pic1.png" alt="Image 2" className="w-[300px] h-[400px] mx-auto md:w-full md:h-auto object-cover"/>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center ">
        <div>
          <img src="pic2.png" alt="" className="w-[300px] h-[400px] mx-auto md:w-full md:h-auto object-cover" />
        </div>
        <div>
          <Tecno/>
        </div>
      </div>
      <Footer/>
    </Container>
  );
};

export default Home;
