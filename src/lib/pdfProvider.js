import { PDFDocumentFactory, PDFDocumentWriter } from 'pdf-lib';

async function mergeBetweenPDF(pdfFileList) {
let returnObj = { pdfFile: null, pdfNotMergedList: [] }

    if (pdfFileList.length > 0) {
		const reader = new FileReader();
		reader.onload = function(evt) { console.log(evt.target.result); };
		console.log("--HERE--");
		console.log(typeof PDFDocumentFactory);
		const pdfDoc = PDFDocumentFactory.create();
		let iterPdfDoc = PDFDocumentFactory.create();
		// let iterPdfDocBytes;
		let pdfFilePromiseArrayBufferList = [];
		let pdfNotMergedList = [];
		let iterPdfDocPages = [];

		// Get all file URLs into a list using Promises and fetch API
		pdfFileList.forEach((pdfFile) => {
			// console.log(pdfFile)
			pdfFilePromiseArrayBufferList.push(
				fetch(URL.createObjectURL(pdfFile))
					.then(res => res.arrayBuffer())
			)
		})

		try {
			const pdfArrayBufferFileList = await Promise
				.all(pdfFilePromiseArrayBufferList);
			for (let i = 0; i < pdfArrayBufferFileList.length; i++) {
				// console.log(pdfArrayBufferFileList[i])
				// iterPdfDocBytes = reader.readAsArrayBuffer(pdfBlob)
				try {
					iterPdfDoc = PDFDocumentFactory.load(new Uint8Array(pdfArrayBufferFileList[i]));
					iterPdfDocPages = iterPdfDoc.getPages();
					iterPdfDoc = PDFDocumentFactory.create();
					// Add each page in a temp file to check if all pages from this PDF can be added in the final one
					// eslint-disable-next-line
					iterPdfDocPages.forEach((pdfPage) => {
						iterPdfDoc.addPage(pdfPage);
					});
					// No errors? Then add all pages to the final PDF
					iterPdfDocPages.forEach((pdfPage_1) => {
						pdfDoc.addPage(pdfPage_1);
					});
				} catch (err) {
					console.log(err);
					// console.log("File " + pdfFileList[i].name + " not merged due to the following error: " + err.message)
					pdfNotMergedList.push(pdfFileList[i].name);
				}
			}

			returnObj.pdfFile = PDFDocumentWriter.saveToBytes(pdfDoc);
			returnObj.pdfNotMergedList = pdfNotMergedList;
			return returnObj;
		} catch (err_1) {
			console.log(err_1);
			returnObj.pdfFile = null;
			returnObj.pdfNotMergedList = pdfNotMergedList;
			return returnObj;
		}
    }
}

	// eslint-disable-next-line
export default {
	mergeBetweenPDF
}
