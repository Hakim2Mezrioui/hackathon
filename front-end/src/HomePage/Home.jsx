import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { Header } from "../Header/Header";
import HeroSection from "../HeroSection/HeroSection";

function Home() {
  return (
    <>
    <Header />
        <Box>
            <HeroSection/>
        </Box>
    </>

  );
}

export default Home;
