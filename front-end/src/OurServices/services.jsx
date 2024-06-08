// components/CommunitySection.jsx
import React from 'react';
import { Box, Flex, Heading, Text, VStack } from '@chakra-ui/react';

const Services = () => {
  return (
    <Box bg="white" py={10}>
      <Flex direction="column" align="center" mb={10}>
        <Heading
          fontFamily="Inter"
          fontSize={{ base: 24, md: 30 }}
          color="#4D4D4D"
          textAlign="center"
          mb={2}
        >
      Manage the Search for Missing People in One Place    
    </Heading>
        <Text fontSize="lg" color="#4D4D4D">
        Who can benefit from our platform?
        </Text>
      </Flex>
      <Flex justify="center" wrap="wrap" spacing={8} fontFamily={'inter'}>
        <Card
          iconSrc = "/icons/Icon1.svg"
          title="Families"
          description="Our platform helps families connect and find their missing loved ones efficiently."
        />
        <Card
          iconSrc = "/icons/Icon1.svg"
          title="Law Enforcement"
          description="A comprehensive tool for law enforcement agencies to manage and coordinate search efforts."
        />
        <Card
          iconSrc = "/icons/Icon1.svg"
          title="Community Groups
"
          description="Engage and mobilize community groups to aid in the search and rescue operations.
"
        />
      </Flex>
    </Box>
  );
};

const Card = ({ icon, title, description }) => (
  <Box
    bg="white"
    borderRadius="md"
    boxShadow="md"
    p={6}
    m={4}
    textAlign="center"
    maxW="sm"
    flex="1"
  >
    <VStack spacing={4}>
      <Box boxSize="50px">{icon}</Box>
      <Heading size="md" color="#4D4D4D">
        {title}
      </Heading>
      <Text color="gray.600">{description}</Text>
    </VStack>
  </Box>
);

export default Services;
