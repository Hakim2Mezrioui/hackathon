// components/HeroSection.jsx
import React from "react";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";

const HeroSection = () => {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      align="center"
      justify="space-between"
      p={{ base: 4, md: 8 }}
      bg="#F5F7FA"
    >
      <Box m={100} mt={130} mb={130} maxW="lg" textAlign={{ base: "center", md: "left" }} pos={'relative'} left={100} transform={"scale(1.2)"}>
        <Heading w={5000} as="h1" fontSize={50} mb={4} color={'#4D4D4D'} fontFamily={'inter'}>
          Lessons and insights <br />
          <Text as="span" color="green.400">
            from 8 years
          </Text>
        </Heading>
        <Text fontSize="lg" width={600} mb={6}>
          Where to grow your business as a photographer: site or social media?
        </Text>
        <Button colorScheme="green" size="lg">
          Register
        </Button>
      </Box>
      <Box m={10} transform={'scale(1.3)'} mt={{ base: 8, md: 0 }} ml={{ md: 8 }} pos={'relative'} right={150} top={10}>
        <img src='/Illustration.svg' alt="Illustration" />
      </Box>
    </Flex>
  );
};

export default HeroSection;
