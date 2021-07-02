import React from "react";
import Typewriter from "typewriter-effect";
import "../style.css";
import { Heading, Container , Text, useColorModeValue , Stack} from "@chakra-ui/react";

function Body({h,w}) {
  return (
    <div>
      <Container
        h={h}
        w={w}
        maxW={'3xl'}
        maxH={'1xl'}
      >
          <Stack    direction={{ base: "row", md: "row" }}  justify={{ base: "flex-start", md: "space-between" }}
        align={{ base: "center", md: "center" }} >
        <Text
          as={"span"}
          fontFamily="Roboto Condensed"
          position={"relative"}
          fontWeight={600}
          fontSize={{ base: "3xl"}}
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
          fontSize={{ base: "4xl"}}
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
          fontSize={{ base: "3xl"}}
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
         . . .  YOUR CHOICE . . .
        </Text>
        </Stack>
      </Container>
    </div>
  );
}

export default Body;
