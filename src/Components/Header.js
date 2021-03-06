import React from "react";
import {
  useColorMode,
  IconButton,
  Tooltip,
  Flex,
  Spacer,
  useColorModeValue,
} from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { BsSun , BsMoon } from "react-icons/bs";

function Header({h , w}) {
  const { colorMode, toggleColorMode } = useColorMode();
  const classes = {
    head: useColorModeValue("Red", "Red"),
  };

  return (
    <>
      <Flex pl ={10} pr={10} h={h} w={w} align="center"  bg={useColorModeValue("gray.50", "gray.900")}>
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
              icon={<BsMoon size="30px" color="black" />}
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
