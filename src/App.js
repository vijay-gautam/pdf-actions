import React from "react";
import Header from "./Components/Header";
import BodyWrapper from "./Components/BodyWrapper";
import Footer from "./Components/Footer"
import {Flex,
  Spacer,
  useColorModeValue,
} from "@chakra-ui/react";

function App() {
 

  return (
    <>
    <Flex  direction={{base : "column" , md : "column"}} justify={{ base: "flex-start", md: "space-between" }}>
    <Header h={"20vh"} w={"100vw"}/>
    <BodyWrapper  h={"70vh"} w={"100vw"}  />
     <Footer h={"10vh"} w={"100vw"} />
     </Flex>
      </>
  );
}

export default App;
