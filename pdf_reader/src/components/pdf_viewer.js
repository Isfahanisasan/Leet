"use client";
import React, { use, useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { Button } from "@/components/ui/button";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";


pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.mjs`;


const MyPdfViewer = ({ ocrFile, onTextSelect,  isLoading}) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [ocrPdfFile, setOcrPdfFile] = useState(null);
  // const [isLoading, setIsLoading] = useState(true);


  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setOcrPdfFile(ocrFile);
  };


  const goToPrevPage = () => setPageNumber(pageNumber - 1);
  const goToNextPage = () => setPageNumber(pageNumber + 1);


  useEffect(() => {
    const handleMouseUp = (event) => {
      const selectedText = window.getSelection().toString();
      if (selectedText && !isLoading) {
        const { clientX: left, clientY: top } = event;
        const pdfViewerReact = document.querySelector('.react-pdf__Document').getBoundingClientRect();
        const withinPdfViewer = top >= pdfViewerReact.top && top <= pdfViewerReact.bottom && left >= pdfViewerReact.left && left <= pdfViewerReact.right;
        onTextSelect(selectedText, { top, left, withinPdfViewer });
      } else {
        onTextSelect(null, null);
      }
    };
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [onTextSelect, isLoading]);


  return (
    <div>
      {isLoading ? (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100px' }}>
          <div className="spinner" style={{ marginBottom: '10px' }}></div>
          Processing OCR, please wait...
        </div>
      ) : (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
            <Button variant="outline" onClick={goToPrevPage} disabled={pageNumber === 1}>
              <ChevronLeftIcon className="w-5 h-5 mr-2" />
              Previous
            </Button>
            <Button variant disabled={true}>
              Page {pageNumber} of {numPages}
            </Button>
            <Button variant="outline" onClick={goToNextPage} disabled={pageNumber === numPages}>
              Next
              <ChevronRightIcon className="w-5 h-5 ml-2" />
            </Button>
          </div>
          <Document
            file={ocrFile}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} />
          </Document>
        </div>
      )}
    </div>
  );
};


function ChevronLeftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}


function ChevronRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}



export default MyPdfViewer;





