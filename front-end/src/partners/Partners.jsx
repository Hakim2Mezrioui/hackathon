import React from 'react';
import { Box, Flex, Heading, Text, Image } from '@chakra-ui/react';

const Partners = () => {
  const clients = [
    '/partners/careerCenter.png',
    '/partners/Dalil.png',
    '/partners/edvant.png',
    '/partners/ofppt-logo.png',
    '/partners/cad_ista_hayhassani1_logo.jpeg',

  ];

  return (

    <Box textAlign="center" py={10} px={5}>
      <Heading as="h2" size="xl" mb={4}>
        Our Partners
      </Heading>
      <Text fontSize="lg" mb={8}>
        We have been working with some Fortune 500+ clients
      </Text>
      <Flex mt={100} justify="space-around" wrap="wrap">
          <Box transform={'scale(2.2)'} p={4}>
            <Image src='/partners/careerCenter.png' alt={`partner logo`} maxH="50px" />
          </Box>
          <Box transform={'scale(1.2)'} p={4}>
            <Image src='/partners/ofppt-logo.png' alt={`partner logo`} maxH="50px" />
          </Box>
          <Box p={4} transform={'scale(2.5)'}>
            <Image src='/partners/cad_ista_hayhassani1_logo.jpeg' alt={`partner logo`} maxH="50px" />
          </Box>
          <Box p={4} transform={'scale(2.5)'} >
            <Image src='/partners/Dalil.png' alt={`partner logo`} maxH="50px" />
          </Box>
          <Box transform={'scale(1.3)'} p={4}>
            <Image src='/partners/edvant.png' alt={`partner logo`} maxH="50px" />
          </Box>
      </Flex>
    </Box>
  );
};

export default Partners;
