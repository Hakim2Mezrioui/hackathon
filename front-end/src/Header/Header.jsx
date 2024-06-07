

import { Box, Flex, Button, Container, Heading,  Link, Text,IconButton, Tooltip,Stack,Menu, MenuButton, MenuList, MenuItem, } from '@chakra-ui/react';

export const Header = () => {


  return (
    <Box bg={"white"}  px={4} boxShadow="sm" p={3}>
      <Container maxW="container.xl">
        <Flex h={16} alignItems={'center'} justifyContent={'space-around'}>
            <img style={{width:75, marginRight: 10}} src="/ofppt-logo.png" alt="Logo" />

            <Flex grow={1} justifyContent={'end'}>
                <Link mr={12} to="#">Lorem</Link>
                <Link to="#">Lorem</Link>
            </Flex>

            <Flex grow={1} justifyContent="end">
                <Button variant={'solid'} colorScheme={'green'} size={'sm'} mr={4} as="a" href="/adddonor">
                  Register
                </Button>
                <Button variant={'outline'} size={'sm'} as="a" href="/login" bg={'#A7AEB3'}>
                  Login
                </Button>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};
