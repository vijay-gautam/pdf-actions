import React from "react";
import {
  useColorMode,
  IconButton,
  Tooltip,
  Flex,
  Spacer,
  useColorModeValue,
} from "@chakra-ui/react";
import { MoonIcon } from "@chakra-ui/icons";
import { Heading } from "@chakra-ui/react";
import { BsSun } from "react-icons/bs";

function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const classes = {
    head: useColorModeValue("Red", "Red"),
  };

  return (
    <>
      <Flex p={10} align="center"  bg={useColorModeValue("gray.50", "gray.900")}>
        <Heading as="h1" size="4xl" fontFamily="Roboto Condensed" color={classes.head}>
          Pdf
        </Heading>
        <Heading as="h1" size="4xl" fontFamily="Roboto Condensed">
          Editor
        </Heading>
        <Spacer />
        <Tooltip
          label={colorMode === "light" ? "Night Mode" : "Day Mode"}
          aria-label="A tooltip"
        >
          {colorMode === "light" ? (
            <IconButton
              onClick={toggleColorMode}
              background="transparent"
              borderRadius="10"
              size="lg"
              icon={<MoonIcon w={6} h={6} color="black" />}
            />
          ) : (
            <IconButton
              onClick={toggleColorMode}
              background="transparent"
              borderRadius="10"
              size="lg"
              icon={<BsSun color="yellow" size="30px"/>}
            />
          )}
        </Tooltip>
      </Flex>
    </>
  );
}

export default Header;
