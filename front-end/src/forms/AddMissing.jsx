import React, { useState } from "react";
import {
  Box,
  useToast,
  Button,
  Text,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { Header } from "../Header/Header";
import axios from "axios";

const AddMissingPerson = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    dateDePerdre: "",
    ville: "",
    dateDeNaissance: "",
    description: "",
    image1: "",
    cin: "",
    phone: "",
  });

  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/addPerdu",
        formData
      );
      toast({
        title: "Success",
        description: "Missing person added successfully!",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error submitting the form!",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <Header />
      <Text mt={10} fontSize="xl" mb={2} textAlign="center" color="gray.700">
        Use this form to report a missing person. Provide all the necessary
        details to help with the search.
      </Text>
      <Flex justify={"center"}>
        <Box
          bg="gray.50"
          p={10}
          borderRadius="lg"
          boxShadow="md"
          w={500}
          transform={"scale(0.9)"}
        >
          <Heading mb={7} textAlign={"center"}>
            Add Missing Person
          </Heading>
          <form onSubmit={handleSubmit}>
            <VStack spacing={4}>
              <FormControl id="fullName" isRequired>
                <FormLabel>Full Name</FormLabel>
                <Input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl id="dateDePerdre" isRequired>
                <FormLabel>Date of Disappearance</FormLabel>
                <Input
                  type="date"
                  name="dateDePerdre"
                  value={formData.dateDePerdre}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl id="ville" isRequired>
                <FormLabel>City</FormLabel>
                <Input
                  type="text"
                  name="ville"
                  value={formData.ville}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl id="dateDeNaissance" isRequired>
                <FormLabel>Date of Birth</FormLabel>
                <Input
                  type="date"
                  name="dateDeNaissance"
                  value={formData.dateDeNaissance}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl id="description" isRequired>
                <FormLabel>Description</FormLabel>
                <Textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl id="image" isRequired>
                <FormLabel>Image URL</FormLabel>
                <Input
                  type="file"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl id="cin" isRequired>
                <FormLabel>CIN</FormLabel>
                <Input
                  type="text"
                  name="cin"
                  value={formData.cin}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl id="phone" isRequired>
                <FormLabel>Phone</FormLabel>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </FormControl>
              <Button
                type="submit"
                color={"white"}
                colorScheme="blue"
                bg="#4288BA"
                size="lg"
              >
                Add Missing Person
              </Button>
            </VStack>
          </form>
        </Box>
      </Flex>
    </>
  );
};

export default AddMissingPerson;
