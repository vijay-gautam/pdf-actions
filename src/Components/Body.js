import React from "react";
import Typewriter from "typewriter-effect";
import "../style.css";
import {
  Heading,
  Container,
  Text,
  useColorModeValue,
  Stack,
  Flex
} from "@chakra-ui/react";
import FileDragDrop from "./FileDragDrop";

function Body({ h, w }) {
  return (
    <>
      <Stack h={h} w={w} direction={"column"}   align={{ base: "center", md: "center" }}>
        <Stack
          direction={{ base: "row", md: "row" }}
          justify={{ base: "flex-start", md: "space-between" }}
          align={{ base: "flex-start", md: "center" }}
          w= {"60vw"}
          h={"20%"}
        >
          <Text
            as={"span"}
            fontFamily="Roboto Condensed"
            position={"relative"}
            fontWeight={600}
            fontSize={{ base: "3xl" , md : "4xl"}}
            _after={{
              content: "''",
              width: "full",
              height: "30%",
              position: "absolute",
              bottom: 1,
              left: 0,
              bg: "red.400",
              zIndex: -1,
            }}
          >
            YOUR PDF . YOU CAN :
          </Text>
          <Text
            as={"span"}
            fontWeight={600}
            fontSize={{ base: "5xl" }}
            fontFamily="Roboto Condensed"
          >
            <Typewriter
              options={{
                strings: ["Merge It !", "Sort It !", "Rename It !"],
                autoStart: true,
                loop: true,
                delay: 30,
                wrapperClassName: "textwrapper",
                cursorClassName: "textwrapper",
              }}
            />
          </Text>
          <Text
            as={"span"}
            fontWeight={600}
            fontSize={{ base: "4xl" }}
            fontFamily="Roboto Condensed"
            position={"relative"}
            _after={{
              content: "''",
              width: "full",
              height: "30%",
              position: "absolute",
              bottom: 1,
              left: 0,
              bg: "red.400",
              zIndex: -1,
            }}
          >
            . . . YOUR CHOICE . . .
          </Text>
        </Stack>
        <Stack
          direction={{ base: "row", md: "row" }}
          justify={{ base: "flex-start", md: "space-between" }}
          align={{ base: "flex-start", md: "center" }}
          w= {"80vw"}
          h={"80%"}
        >
            <FileDragDrop>
            </FileDragDrop>
        </Stack>
      </Stack>
    </>
  );
}

export default Body;
