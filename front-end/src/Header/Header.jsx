

import { Box, Flex, Button, Container, Heading, useColorModeValue, Link, Text,IconButton, Tooltip,Stack,Menu, MenuButton, MenuList, MenuItem, } from '@chakra-ui/react';

export const Header = () => {


  return (
    <Box bg={"#2d2d2d"}  px={4} boxShadow="sm">
      <Container maxW="container.xl">
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <img style={{width:45, marginRight: 10}} src="/lgo.png" alt="Logo" />
            <Text color='white' fontWeight={500} fontSize={25} >LOGO</Text>
          <Flex grow={1} justifyContent="center">
                <Button variant={'solid'} colorScheme={'#D2122E'} size={'sm'} mr={4} as="a" href="/adddonor">
                  Register
                </Button>
                <Button variant={'outline'} size={'sm'} as="a" href="/login" bg={'white'}>
                  Login
                </Button>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};
