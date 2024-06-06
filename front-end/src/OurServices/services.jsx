import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Flex } from "@chakra-ui/react";


const Services = () => {


    return(
        <>
    <Flex justify="center" mt={14}>
      <Box textAlign="center">
        <Heading
          fontFamily="inter"
          fontSize={30}
          color="#4D4D4D"
          w={490}
        >
          Manage your entire community in a single system
        </Heading>
        <Text alignSelf="center" mt={4}>
          Who is Nextcent suitable for?
        </Text>
      </Box>
    </Flex>
        
        </>
    )
}

export default Services