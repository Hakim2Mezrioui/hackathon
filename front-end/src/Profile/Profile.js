import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  Stack,
  Text,
  VStack,
  Icon
} from '@chakra-ui/react';
import { FaTint, FaUser, FaPhone, FaEnvelope, FaMapMarkerAlt, FaBirthdayCake, FaVenusMars, FaIdCard } from 'react-icons/fa';
import { useState, useEffect } from 'react';
// import axios from 'axios';
import { Header } from '../Header/Header';

export default function Profile() {
  const userlocal = localStorage.getItem('user')
  const user = JSON.parse(userlocal)
  const [Image, setImage] = useState(null);

  const userData = {
  //   Cin: user.Cin,
  //   Name: user.Name,
  //   PhoneNumber: user.PhoneNumber,
  //   Email: user.Email,
  //   BirthDate: user.BirthDate,
  //   City: user.City,
  // //   Image: user.Image,
  };

  const [person, setPerson] = useState({
    fullName: "Marie Lefevre",
    dateDePerdre: "2024-06-02",
    city: "casablanca",
    dateDeNaissance: "1992-07-30",
    description: "Femme, 165 cm, cheveux blonds, portait un pantalon rouge et un sac à dos noir.",
    cin: "BX2345678",
    email:'mezrioui.hakim@gmail.com',
    phone: '+21285859'
  },);



  const handleResetPassword = () => {
    // Handle password reset logic here
    alert('Redirecting to password reset page');
  };

  return (
      <>
      <Header/>
      <Container maxW="container.md"  transform={'scale(0.85)'}>
      <Flex direction="column" alignItems="center" bg="gray.50" p={8} borderRadius="lg" boxShadow="lg">
        <Heading as="h1" size="lg" mb={6} color="green.600">
          My Profile
        </Heading>
        <VStack spacing={4} align="stretch" width="full">
          <Box>
            <Text fontWeight="bold"><Icon as={FaIdCard} /> CIN:</Text>
            <Text>{person.cin}</Text>
          </Box>
          <Divider />
          <Box>
            <Text fontWeight="bold"><Icon as={FaUser} /> Name:</Text>
            <Text>{person.fullName}</Text>
          </Box>
          <Divider />
          <Box>
            <Text fontWeight="bold"><Icon as={FaPhone} /> Phone Number:</Text>
            <Text>{person.phone}</Text>
          </Box>
          <Divider />
          <Box>
            <Text fontWeight="bold"><Icon as={FaEnvelope} /> Email:</Text>
            <Text>{person.email}</Text>
          </Box>
          <Divider />
          <Box>
            <Text fontWeight="bold"><Icon as={FaBirthdayCake} /> Birth Date:</Text>
            <Text>{person.dateDeNaissance}</Text>
          </Box>
          <Box>
            <Text fontWeight="bold"><Icon as={FaMapMarkerAlt} /> City:</Text>
            <Text>{person.city}</Text>
          </Box>
        </VStack>

        <Button colorScheme="green" mt={6} onClick={handleResetPassword}>
          <a href="/resetPassRequest">
              Reset Password
          </a>
        </Button>
      </Flex>
    </Container>
    </>
  );
}
