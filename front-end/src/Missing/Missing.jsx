import React, { useEffect } from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  Image,
  Flex,
  Input,
  Select,
} from "@chakra-ui/react";
// import { missingPeople } from "../missingPeople";
import { Header } from "../Header/Header";
import { useState } from "react";
import cities from "../MoroccanCities/MoroccanCities";
import { useHttp } from "../useHttp/useHttp";
import { useDispatch } from "react-redux";

const Missing = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchCity, setSearchCity] = useState("");
  const [citiesJs, setCitiesJs] = useState([]);
  const [missingPeople, setMissingPeople] = useState([]);

  const { sendRequest, loading } = useHttp();
  const dispatch = useDispatch();

  useEffect(() => {
    const request = {
      url: "http://127.0.0.1:8000/api/perdus",
      headers: {
        "Content-Type": "application/json",
      },
    };
    sendRequest(request, applayData);
  }, []);

  const applayData = (perdus) => {
    setMissingPeople(perdus.data);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleSelect = (event) => {
    setSearchCity(event.target.value);
    console.log("toto");
  };

  const filteredMissing = missingPeople.filter((miss) => {
    const MissingCin = miss?.cin ?? "";
    const MissingName = miss?.fullName?.toLowerCase() ?? "";
    const MissingCity = miss?.ville?.toLowerCase() ?? "";
    const searchLower = searchTerm.toLowerCase();
    const cityLower = searchCity.toLocaleLowerCase();
    console.log(MissingCity);

    return (
      (MissingCin.includes(searchLower) || MissingName.includes(searchLower)) &&
      (cityLower === "" || MissingCity.includes(cityLower))
    );
  });

  // const citiesJs = JSON.parse(cities);
  useEffect(() => {
    setCitiesJs(cities);
  }, []);

  return (
    <>
      <Header />
      <Flex justify={"center"}>
        <Flex justify="space-around" align="center" mb={4} p={5} w={1000}>
          <Heading flexShrink={0} mr={41} fontFamily={"inter"}>
            Missing People
          </Heading>
          <br />
          <Input
            type="text"
            placeholder="Search by CIN or Name"
            value={searchTerm}
            onChange={handleSearch}
            className="mb-4 w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            flexGrow={1}
            mx={2}
          />
          <Select
            onChange={handleSelect}
            value={searchCity}
            className="mb-4 w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            flexGrow={1}
            mx={2}
          >
            <option value="">Select City</option>
            {citiesJs.map((city, index) => (
              <option key={index} value={city.ville}>
                {city.ville}
              </option>
            ))}
          </Select>
        </Flex>
      </Flex>

      <Flex wrap={"wrap"} p={5} justify={"center"}>
        {filteredMissing.map((person) => (
          <Box
            transform={"scale(0.8)"}
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
                Disappeared:{" "}
                {new Date(person.dateDePerdre).toLocaleDateString()}
              </Text>
              <Text fontSize="sm" color="gray.500" mb={2}>
                City: {person.ville}
              </Text>
              <Text mb={4}>{person.description}</Text>
              <Button
                colorScheme="blue"
                as="a"
                href={`/detailPerson/${person.cin}`}
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
