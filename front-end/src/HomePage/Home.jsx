import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { Header } from "../Header/Header";
import HeroSection from "../HeroSection/HeroSection";
import Services from "../OurServices/services";
import Partners from "../partners/Partners";

function Home() {
  return (
    <>
        <Header />
        <HeroSection/>
        <Partners/>
        <Services/>
        
    </>

  );
}

export default Home;
