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
  getToken,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { Fragment, useEffect } from "react";

export const Header = () => {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);

  useEffect(() => {
    const token = cookies.token;
  }, []);

  const onNavigate = (path) => {
    navigate(path);
  };

  return (
    <Box bg={"white"} px={4} boxShadow="sm" p={2}>
      <Container maxW="container.xl">
        <Flex h={16} alignItems={"center"} justifyContent={"space-around"}>
          <img
            style={{ width: 55, marginRight: 10 }}
            src="/logo-maroc.png"
            alt="Logo"
          />

          <Flex grow={1} justifyContent={"end"}>
            <a  href="/addMissing" style={{ marginRight:20, color:'green' }}>
              Add Missing
            </a>
            <a  href="/Missing" style={{ marginLeft:20, color:'green' }}>
               Missing
            </a>          </Flex>
          <Flex grow={1} justifyContent="end">
            {cookies.token && cookies.token.length > 0 ? (
              <Button>Profile</Button>
            ) : (
              <Fragment>
                <Button
                  variant={"solid"}
                  colorScheme={"green"}
                  size={"sm"}
                  mr={4}
                  as="a"
                  onClick={() => onNavigate("/register")}
                >
                  Register
                </Button>
                <Button
                  variant={"outline"}
                  size={"sm"}
                  as="a"
                  bg={"#A7AEB3"}
                  onClick={() => onNavigate("/login")}
                >
                  Login
                </Button>
              </Fragment>
            )}
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};
