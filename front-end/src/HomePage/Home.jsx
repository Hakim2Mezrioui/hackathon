import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { Header } from "../Header/Header";
import HeroSection from "../HeroSection/HeroSection";
import Services from "../OurServices/services";

function Home() {
  return (
    <>
        <Header />
        <Box>
            <HeroSection/>
            <Services/>
        </Box>
    </>

  );
}

export default Home;
