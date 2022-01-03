import React from "react";
import {
  Heading,
  Flex,
} from "@chakra-ui/react";

const Header = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={6}
      bg="teal.500"
      color="white"
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={"tighter"}>
          Cadastro Clientes
        </Heading>
      </Flex>
    </Flex>
  );
};

export default Header;