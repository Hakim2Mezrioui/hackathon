import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { Header } from "../Header/Header";
import HeroSection from "../HeroSection/HeroSection";
import Services from "../OurServices/services";

function Home() {
  return (
    <>
        <Header />
        <HeroSection/>
        <Services/>
    </>

  );
}

export default Home;
