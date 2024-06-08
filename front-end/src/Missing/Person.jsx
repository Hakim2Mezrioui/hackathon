import React, { useEffect, useState } from "react";
import { Box, Heading, Text, Button, Image, VStack, Flex } from "@chakra-ui/react";
import { Header } from "../Header/Header";


const DetailedPerson = ({ personId }) => {

  const [person, setPerson] = useState({
    fullName: "Marie Lefevre",
    dateDePerdre: "2024-06-02",
    ville: "casablanca",
    dateDeNaissance: "1992-07-30",
    description: "Femme, 165 cm, cheveux blonds, portait un pantalon rouge et un sac à dos noir.",
    image: "/oldman.jpg",
    cin: "BX2345678",
    email:'mezrioui.hakim@gmail.com'
  },);

//   useEffect(() => {
//     // Fetch the person's details using the personId
//     const fetchPersonDetails = async () => {
//       // Replace with your actual data fetching logic
//       const response = await fetch(`/api/missingPeople/${personId}`);
//       const data = await response.json();
//       setPerson(data);
//     };

//     fetchPersonDetails();
//   }, [personId]);

        // useEffect(() => {
        //     // Fetch the person's details using the personId
        //     const fetchPersonDetails = () => {
        //         // Replace with your actual data fetching logic
        //         const personData = missingPeople.find(person => person.cin === personId);
        //         setPerson(personData);
        //         };
                
        //         fetchPersonDetails();
        //         }, [personId]);

        if (!person) {
          return <Text>Loading...</Text>;
        }
        return (
            <>
            <Header/>
                <Box p={10} bg="gray.100" textAlign="center">
                <Flex wrap="wrap" justify="center" align="center" mb={10}>
                    <Image
                    src={`/missing/${person.image}`}
                    alt={person.fullName}
                    boxSize="300px"
                    objectFit="cover"
                    borderRadius="lg"
                    mb={5}
                    />
                    <VStack align="start" spacing={4} ml={5}>
                    <Heading as="h1" size="xl" fontWeight="bold">
                        {person.fullName}
                    </Heading>
                    <Text fontSize="lg" color="gray.700">
                        Disappeared: {new Date(person.dateDePerdre).toLocaleDateString()}
                    </Text>
                    <Text fontSize="lg" color="gray.700">
                        City: {person.ville}
                    </Text>
                    <Text fontSize="lg" color="gray.700">
                        Description: {person.description}
                    </Text>
                    <Text fontSize="lg" color="gray.700">
                        Date of Birth: {new Date(person.dateDeNaissance).toLocaleDateString()}
                    </Text>
                    </VStack>
                </Flex>
                <Box bg="white" p={5} borderRadius="lg" boxShadow="md" maxW="lg" mx="auto">
                    <Heading as="h2" size="lg" fontWeight="bold" mb={4}>
                    Contact Information
                    </Heading>
                    <Text fontSize="lg" mb={2}>
                    If you have any information about {person.fullName}, please contact their family or the authorities using the information below:
                    </Text>
                    <Text fontSize="md" color="gray.700" mb={2}>
                    Family Contact: +me
                    </Text>
                    <Text fontSize="md" color="gray.700" mb={4}>
                    Authorities Contact: +212610355438
                    </Text>
                    <Button colorScheme="blue" size="lg" onClick={() => window.location.href = `mailto:${person.email}`}>
                    Email Family
                    </Button>
                    <Button colorScheme="red" size="lg" ml={4} onClick={() => window.location.href = `tel:${+212610355438}`}>
                    Call Authorities
                    </Button>
                </Box>
                </Box>

    </>
  );
};

export default DetailedPerson;
