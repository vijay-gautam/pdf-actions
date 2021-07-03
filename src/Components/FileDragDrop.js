import React , { useState , useEffect} from 'react'

import Files from "react-files";
import { saveSync } from "save-file";
import PDFProvider from "../lib/pdfProvider";
import {Box , useColorModeValue}from "@chakra-ui/react";
function FileDragDrop() {

    const [files,setFiles] = useState([]);
    const [hasFiles,setHasFiles] = useState(false);
    const [finalName  , setFinalName] = useState("");

    const onFilesChange = (file) => {
        setFiles([ ...files , file]);
        setHasFiles(files.length > 0 ? true : false);
    }

    const onFilesError = (error  , file) => {
        console.log("[LOG] Error code " + error.code + ": " + error.message);
    };

    // const filesRemoveOne = (file) => {
    //     setFiles(files.filter((value) => {
    //         value !== file
    //     }))
    // }

    const filesRemoveAll = () => {
        setFiles([]);
        setHasFiles(false);
    }

    const startMerge = () => {
        let tempMsg;
        PDFProvider.mergeBetweenPDF(this.state.files)
        .then((res) => {
          // console.log(res)
          if (res && res.hasOwnProperty("pdfFile")) {
            if (res.pdfFile) {
              if (res.pdfNotMergedList.length !== files.length) {
                let fileName = finalName ; 
                saveSync(res.pdfFile, fileName);
              }
  
              if (res.pdfNotMergedList.length > 0) {
                if (
                  res.pdfNotMergedList.length > 0 &&
                  res.pdfNotMergedList.length === files.length
                ) {
                  tempMsg =
                    "No merge PDF output could be done. Following files have problem and need to be merged manually: " +
                    res.pdfNotMergedList.join(", ");
                } else {
                  tempMsg =
                    "Following files have problem and need to be merged manually: " +
                    res.pdfNotMergedList.join(", ");
                }
  
                console.log("[LOG] " + tempMsg);
                // this.setState(
                //   {
                //     modalOpen: true,
                //     modalLoading: false,
                //     modalMsg: {
                //       err: tempMsg,
                //       success: null,
                //     },
                //   },
                //   () => {
                //     console.log("[LOG] Modal closed.");
                //   }
                // );
              } else {
                tempMsg = "Merge totally successfull and downloaded!";
                console.log("[LOG] " + tempMsg);
                // this.setState(
                //   {
                //     modalOpen: true,
                //     modalLoading: false,
                //     modalMsg: {
                //       err: null,
                //       success: tempMsg,
                //     },
                //   },
                //   () => {
                //     console.log("[LOG] Closed modal");
                //   }
                // );
              }
            }
          } else {
            tempMsg =
              "Internal error at merging! Send this error to the developer in charge.";
            console.log(tempMsg);
            // this.setState(
            //   {
            //     modalOpen: true,
            //     modalLoading: false,
            //     modalMsg: {
            //       err: tempMsg,
            //       success: null,
            //     },
            //   },
            //   () => {
            //     console.log("[LOG] Closed modal");
            //   }
            // );
          }
        })
        .catch((err) => {
          console.log("[LOG] " + err);
        })
        .finally(() => filesRemoveAll());
    };


    return (
       <>
       <Files
              className='files-dropzone'
              onChange={onFilesChange}
              onError={onFilesError}
              accepts={[".pdf"]}
              multiple
              maxFiles={1000}
              maxFileSize={10000000}
              minFileSize={0}
              clickable>
             <Box w ={"35vw"} h={"35vh"} borderWidth="5px" borderStyle="dashed" borderColor={useColorModeValue("black","grey")}>
             Drop files here or click to upload
             </Box>
            </Files>
       </>
    )
}

export default FileDragDrop
