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
          Manage your entire community in a single system
        </Heading>
        <Text fontSize="lg" color="#4D4D4D">
          Who is Nextcent suitable for?
        </Text>
      </Flex>
      <Flex justify="center" wrap="wrap" spacing={8} fontFamily={'inter'}>
        <Card
          iconSrc = "/icons/Icon1.svg"
          title="Membership Organisations"
          description="Our membership management software provides full automation of membership renewals and payments"
        />
        <Card
          iconSrc = "/icons/Icon1.svg"
          title="National Associations"
          description="Our membership management software provides full automation of membership renewals and payments"
        />
        <Card
          iconSrc = "/icons/Icon1.svg"
          title="Clubs And Groups"
          description="Our membership management software provides full automation of membership renewals and payments"
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
