import React from "react";
import { Box, Heading, Text, Button, Image, Flex } from "@chakra-ui/react";
import { missingPeople } from "../missingPeople";
import { Header } from "../Header/Header";

const Missing = () => {
  return (
    <>
    <Header/>
    <Flex wrap={'wrap'} p={5} justify={'center'}>
      {missingPeople.map((person) => (
        <Box
          transform={'scale(0.8)'}
        //   m={}
          key={person.cin}
          maxW="sm"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
    
        >
          <Image
            src={person.image}
            alt={person.fullName}
            objectFit="cover"
            width="100%"
            height="200px"
          />
          <Box p={5}>
            <Heading as="h3" size="lg" mb={2}>
              {person.fullName}
            </Heading>
            <Text fontSize="sm" color="gray.500" mb={2}>
              Disappeared: {new Date(person.dateDePerdre).toLocaleDateString()}
            </Text>
            <Text fontSize="sm" color="gray.500" mb={2}>
              City: {person.ville}
            </Text>
            <Text mb={4}>{person.description}</Text>
            <Button
              colorScheme="blue"
              as="a"
              href={`/person/${person.cin}`}
              size="md"
              width="100%"
            >
              Learn More
            </Button>
          </Box>
        </Box>
      ))}
    </Flex>
    </>

  );
};

export default Missing;
