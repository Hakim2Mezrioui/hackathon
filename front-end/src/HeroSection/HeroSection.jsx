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
      bg="gray.50"
    >
      <Box maxW="lg" textAlign={{ base: "center", md: "left" }}>
        <Heading as="h1" size="2xl" mb={4} color={'#4D4D4D'}>
          Lessons and insights <br />
          <Text as="span" color="green.400">
            from 8 years
          </Text>
        </Heading>
        <Text fontSize="lg" mb={6}>
          Where to grow your business as a photographer: site or social media?
        </Text>
        <Button colorScheme="green" size="lg">
          Register
        </Button>
      </Box>
      <Box mt={{ base: 8, md: 0 }} ml={{ md: 8 }}>
        <img src='/Illustration.svg' alt="Illustration" />
      </Box>
    </Flex>
  );
};

export default HeroSection;
