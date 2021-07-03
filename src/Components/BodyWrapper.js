import React , { useState, useEffect } from 'react';
import Body from './Body';
import { saveSync } from "save-file";
import PDFProvider from "../lib/pdfProvider";

function BodyWrapper({h,w}) {
    const [files, setFiles] = useState([]);
  const [hasFiles, setHasFiles] = useState(false);
  const [finalName, setFinalName] = useState("");



  const onFilesChange = (file) => {
    setFiles([...files, file]);
    setHasFiles(files.length > 0 ? true : false);
  };

  const onFilesError = (error, file) => {
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
  };



  const startMerge = (nof) => {
    let tempMsg;
    PDFProvider.mergeBetweenPDF(files)
      .then((res) => {
        // console.log(res)
        if (res && res.hasOwnProperty("pdfFile")) {
          if (res.pdfFile) {
            if (res.pdfNotMergedList.length !== files.length) {
              let fileName = nof;
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

  const handleCondMerge = () => {
      if (finalName !== "") {
        startMerge(finalName);
      } else  {
        const fileName = "output_merge_" + new Date().toISOString().replace(":","_").replace("T","_").replace("Z","") + ".pdf";
        startMerge(fileName);
      }
  }

    return (
        <>
            <Body 
            h={h}
            w={w}
            files = {files}
            mergeFunc = {handleCondMerge}
            // removeOne = {filesRemoveOne}
            removeAll = {filesRemoveAll}
            onFilesChange = {onFilesChange}
            onFilesError={onFilesError}
            />
        </>
    )
}

export default BodyWrapper

    

