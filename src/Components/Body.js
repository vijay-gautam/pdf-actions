import React from "react";
import Typewriter from "typewriter-effect";
import "../style.css";
import { Heading, Text, useColorModeValue , Stack} from "@chakra-ui/react";

function Body() {
  return (
    <div>
      <Heading
        lineHeight={1.1}
        fontWeight={600}
        fontSize={{ base: "2xl", sm: "3xl", lg: "4xl" }}
      >
    <Stack direction={"row"} spacing={5} pl={10} >
        <Text
          as={"span"}
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
          YOUR PDF . YOU CAN
        </Text>
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
        </Stack>
        <Stack direction={"row"} pl={10} pt={5}>
        <Text
          as={"span"}
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
          YOUR CHOICE . . .
        </Text>
        </Stack>
      </Heading>
    </div>
  );
}

export default Body;
