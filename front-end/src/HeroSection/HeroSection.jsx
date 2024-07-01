// components/HeroSection.jsx
import React from "react";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import Footer from "../Footer/Footer";

const HeroSection = () => {
  return (
    <>
    <Flex
      direction={{ base: "column", md: "row" }}
      align="center"
      justify="space-between"
      bg="#F5F7FA"
    >
      <Box m={50} maxW="lg" textAlign={{ base: "center", md: "left" }} pos={'relative'} left={100} transform={"scale(1.2)"}>
        <Heading w={600} as="h1" fontSize={50} mb={4} color={'#4D4D4D'} fontFamily={'inter'}>
        Find Missing 
        <br />
          <Text as="span" color="green.400">
          Loved Ones
          </Text>
        </Heading>
        <Text fontSize="lg" width={600} mb={6}>
        Use our platform to locate missing family members and friends.
        </Text>
        <Button as={"a"} href="/register" colorScheme="green" size="lg">
          Register
        </Button>
      </Box>
      <Box transform={'scale(0.8)'}  pos={'relative'} left={50} bottom={10}>
        <img src='/illi.png' alt="Illustration" />
      </Box>
    </Flex>
    </>

  );
};

export default HeroSection;
