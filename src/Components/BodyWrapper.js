import React, { useState } from "react";
import Body from "./Body";
import { saveSync } from "save-file";
import PDFProvider from "../lib/pdfProvider";

const path = require("path");
const fs = require("fs");

function BodyWrapper({ h, w }) {
  const [files, setFiles] = useState([]);
  const [finalName, setFinalName] = useState("");


  const handleFiles = (data) => {
    setFiles(data);
  };

  const handleFinalName = (data) => {
    setFinalName(data);
  };

  const onLoadFileChecker = (data) => {
    if (data.length > 0 ) {
      let temp = data.filter(function( element ) {
        return element !== undefined;
     });
     if (temp.length === data.length) {
        return true
     } else {
       return false
     }
    }
  }

  const onFilesChange = (file) => {
    let temp = onLoadFileChecker(file);
    if (temp) {
      if (file.length > 1) {
        let newFiles = files.concat(file);
        setFiles(newFiles);
      } else {
        let temp = file[0];
        setFiles([...files, temp]);
      }
    }
  };

  const onFilesError = (error, file) => {
    console.log("[LOG] Error code " + error.code + ": " + error.message);
  };

  const filesRemoveOne = (file) => {
    let temp = files.filter((value) => value.name !== file);
    if (temp.length === 0) {
      setFiles([]);
    } else {
      setFiles(temp);
    }
  };

  const filesRemoveAll = () => {
    setFiles([]);
  };

  const startMerge = () => {
    let tempMsg;
    PDFProvider.mergeBetweenPDF(files)
      .then((res) => {
        if (res && res.hasOwnProperty("pdfFile")) {
          if (res.pdfFile) {
            if (res.pdfNotMergedList.length !== files.length) {
              let fileName = "";
              if (finalName === "") {
                fileName =
                  "output_merge_" +
                  new Date()
                    .toISOString()
                    .replace(":", "_")
                    .replace("T", "_")
                    .replace("Z", "") +
                  ".pdf";
              } else {
                fileName = `${finalName}.pdf`;
              }

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
            } else {
              tempMsg = "Merge totally successfull and downloaded!";
              console.log("[LOG] " + tempMsg);
            }
          }
        } else {
          tempMsg =
            "Internal error at merging! Send this error to the developer in charge.";
          console.log(tempMsg);
        }
      })
      .catch((err) => {
        console.log("[LOG] " + err);
      })
      .finally(() => filesRemoveAll());
  };

  

  const handleCondMerge = () => {
    startMerge();
  };

  const handleFileName = (name) => {
    setFinalName(name);
  };

  return (
    <>
      <Body
        h={h}
        w={w}
        files={files}
        mergeFunc={handleCondMerge}
        removeOne={filesRemoveOne}
        removeAll={filesRemoveAll}
        onFilesChange={onFilesChange}
        onFilesError={onFilesError}
        handleFileName={handleFileName}
        handleFiles={handleFiles}
        finalName={finalName}
        handleFinalName={handleFinalName}
      />
    </>
  );
}

export default BodyWrapper;
