import React from "react";

import Files from "react-files";
import { Box, useColorModeValue } from "@chakra-ui/react";
function FileDragDrop({onFilesChange,onFilesError}) {
  

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
          h={"30vh"}
          borderWidth="5px"
          borderStyle="dashed"
          borderColor={useColorModeValue("black", "grey")}
        >
          Drop files here or click to upload
        </Box> 
      </Files>
    </>
  );
}

export default FileDragDrop;
