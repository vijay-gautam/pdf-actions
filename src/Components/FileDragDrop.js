import React from "react";

import Files from "react-files";
import { Box,  IconButton , Text , useColorModeValue, Flex } from "@chakra-ui/react";
import { FcUpload } from "react-icons/fc";
function FileDragDrop({ onFilesChange, onFilesError }) {
  return (
    <>
      <Files
        className="files-dropzone"
        onChange={onFilesChange}
        onError={onFilesError}
        accepts={[".pdf"]}
        multiple
        maxFiles={1000}
        maxFileSize={10000000}
        minFileSize={0}
        clickable
      >
        <Box
          w={"25vw"}
          h={"40vh"}
          mt="10"
          borderWidth="5px"
          borderStyle="dashed"
          borderColor={useColorModeValue("black", "grey")}
        >
            <Flex 
            direction="column"
            align="center"
            justifyContent="center"
            >
            <IconButton
              background="transparent"
              _hover={{bg : "transparent"}}
              borderRadius="10"   
              mt={100}
              h={50}
              w={50}
              icon={<FcUpload size={50}/>}
            />
            <Text
            as={"span"}
            fontWeight={600}
            fontSize={ [ 10 , 20 ]}
            fontFamily="Roboto Condensed"
          > drop files here or click to upload</Text>
         </Flex>
        </Box>
      </Files>
    </>
  );
}

export default FileDragDrop;
