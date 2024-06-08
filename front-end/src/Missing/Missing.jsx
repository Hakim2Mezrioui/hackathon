import React from "react";
import { Box, Heading, Text, Button, Image, Flex, useMenuPositioner, Input } from "@chakra-ui/react";
import { missingPeople } from "../missingPeople";
import { Header } from "../Header/Header";
import { useState } from "react";

const Missing = () => {

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
      };

    const filteredMissing = missingPeople.filter(miss => {
        const MissingCin = miss?.cin ?? '';
        const MissingName = miss?.fullName?.toLowerCase() ?? '';
        const searchLower = searchTerm.toLowerCase();
        return MissingCin.includes(searchLower) || MissingName.includes(searchLower);
      });


  return (
    <>
    <Header/>
    <Input
          type="text"
          placeholder="Search by CIN or Name"
          value={searchTerm}
          onChange={handleSearch}
          className="mb-4 w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
        />
    <Flex wrap={'wrap'} p={5} justify={'center'}>
      {filteredMissing.map((person) => (
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
