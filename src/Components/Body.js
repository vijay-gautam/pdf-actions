import React from "react";
import Typewriter from "typewriter-effect";
import "../style.css";
import {
  Heading,
  Container,
  Text,
  useColorModeValue,
  Stack,
  Flex,
  Box,
  Input,
  Button,
} from "@chakra-ui/react";
import FileDragDrop from "./FileDragDrop";

function Body({
    h,
    w ,
    files,
    mergeFunc ,
    removeOne ,
    removeAll,
    onFilesChange ,
    onFilesError
}) {
  return (
    <>
      <Stack
        h={h}
        w={w}
        direction={"column"}
        align={{ base: "center", md: "center" }}
      >
        <Stack
          direction={{ base: "row", md: "row" }}
          justify={{ base: "flex-start", md: "space-between" }}
          align={{ base: "flex-start", md: "center" }}
          w={"60vw"}
          h={"20%"}
        >
          <Text
            as={"span"}
            fontFamily="Roboto Condensed"
            position={"relative"}
            fontWeight={600}
            fontSize={{ base: "3xl", md: "4xl" }}
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
          w={"80vw"}
          h={"80%"}
        >
          <FileDragDrop 
          onFilesChange={onFilesChange} 
          onFilesError={onFilesError} />
          <Box
            w={"50vw"}
            h={"50vh"}
            //   borderWidth="5px"
            borderColor={useColorModeValue("black", "grey")}
            direction={{ base: "column", md: "column" }}
          >
            <Stack
              direction={{ base: "row", md: "row" }}
              justify={{ base: "flex-end", md: "flex-end" }}
              align={{ base: "flex-start", md: "center" }}
            >
              <Input isInvalid={false}  boxShadow="xl" 
              focusBorderColor={useColorModeValue('blue.500', 'blue.500')}
              _placeholder={{ color: useColorModeValue('grey', 'white') }}
              borderColor = {useColorModeValue("red.400","red.400")}
              _hover={{ borderColor : useColorModeValue("red.400","red.400")}}
              placeholder="Merged File Name" size="md" w={"30%"} 
              borderWidth={"2px"}
              rounded={"full"} 
              fontFamily="Roboto Condensed"
              />
              
              <Button
                rounded={"full"}
                size={"lg"}
                fontWeight={"normal"}
                px={6}
                colorScheme={"red"}
                bg={"red.400"}
                _hover={{ bg: "red.500" }}
                fontFamily="Roboto Condensed"
              >
                MERGE
              </Button>
            </Stack>
            <Stack
              direction={{ base: "row", md: "row" }}
              justify={{ base: "flex-end", md: "flex-end" }}
              align={{ base: "flex-start", md: "center" }}
            >
              <Box
                w={"40vw"}
                h={"40vh"}
                mt={"2vh"}
                rounded={"xl"}
                boxShadow="2xl"
                bg={useColorModeValue("gray.50", "gray.900")}
                borderWidth="3px"
                borderColor={useColorModeValue("", "grey")}
              >{

              }
                  
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Stack>
    </>
  );
}

export default Body;
