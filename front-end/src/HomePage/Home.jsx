import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { Header } from "../Header/Header";

function Home() {
  return (
    <>
    <Header />
    <Box color='red'>
        <Heading>Welcome to my website!</Heading>
    </Box>
    </>

  );
}

export default Home;
