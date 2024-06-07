import {
  Box,
  Flex,
  Button,
  Container,
  Heading,
  Link,
  Text,
  IconButton,
  Tooltip,
  Stack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  const onNavigate = (path) => {
    navigate(path);
  };

  return (
    <Box bg={"white"} px={4} boxShadow="sm" p={3}>
      <Container maxW="container.xl">
        <Flex h={16} alignItems={"center"} justifyContent={"space-around"}>
          <img
            style={{ width: 75, marginRight: 10 }}
            src="/ofppt-logo.png"
            alt="Logo"
          />

          <Flex grow={1} justifyContent={"end"}>
            <Link mr={12} to="#">
              Lorem
            </Link>
            <Link to="#">Lorem</Link>
          </Flex>

          <Flex grow={1} justifyContent="end">
            <Button
              variant={"solid"}
              colorScheme={"green"}
              size={"sm"}
              mr={4}
              as="a"
              onClick={() => onNavigate("/login")}
            >
              Register
            </Button>
            <Button
              variant={"outline"}
              size={"sm"}
              as="a"
              bg={"#A7AEB3"}
              onClick={() => onNavigate("/register")}
            >
              Login
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};
