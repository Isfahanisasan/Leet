"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
// import Editor from "@/components/Editor.js";
import React, { useRef, useEffect, useState } from 'react';
import llamaDataURI from "@/components/llamaURI.js";
import named_entity_logo_URI from "@/assets/NERecognition.js";


import 'react-chat-widget/lib/styles.css';
// import 'noun-llama-4694765.svg' from '@/assets/noun-llama-4694765.svg';
const LLM_END_POINT = "http://localhost:7000/queryPDF";

let Widget, addResponseMessage;


if (typeof window !== "undefined") {
  import('react-chat-widget').then(module => {
    Widget = module.Widget;
    addResponseMessage = module.addResponseMessage;
  });
}
const MySidebar = dynamic(() => import("@/components/sidebar.js"), {ssr: false});
const StickyNotes = dynamic(() => import("@/components/sticky-notes.js"), {ssr: false});
const PdfViewer = dynamic(() => import("@/components/pdf_viewer.js"), {ssr: false});


// Cors policy workaround

export default function Home() {
  const [pdfFile, setPdfFile] = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [uplodedFileName, setUploadedFileName] = useState(null)
  // const [fileName, setFilename] = useState(null);
  const [ocrPdfFile, setOcrPdfFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [selectedText, setSelectedText] = useState("");

  const changePageNumber = (newPageNumber) => {
    setPageNumber(newPageNumber);
  }

  const performOCR = async (file, fileName) => {
    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("http://127.0.0.1:7000/ocr", {
        method: "POST",
        body: formData
      });

      const blob = await response.blob();
      const ocrPdfUrl = URL.createObjectURL(blob);
      return ocrPdfUrl;
    } catch (error) {
      console.error(error);
    }
  };

  const handleFileChange = async (event) => {
    setIsLoading(true);
    const file = event.target.files[0];
    if (file) {
      const fileURL = URL.createObjectURL(file);
      setPdfFile(fileURL);
      setUploadedFile(fileURL);

      try {
        // check if the file is already been uploaded and processed by checking if ocr_ + filename exists in the server by 8000 endpoint
        const response = await fetch("http://127.0.0.1:7000/getFiles");
        const data = await response.json();
        const fileName = file.name;
        const ocrFileName = "ocr_" + fileName;
        if (data.includes(ocrFileName)) {
          console.log("File already uploaded and processed");
          const fileURL = await fetch(`http://127.0.0.1:7000/getFile/${ocrFileName}`);
          const pdfData = await fileURL.blob();
          const pdfUrl = URL.createObjectURL(pdfData);
          setOcrPdfFile(pdfUrl);
          setPageNumber(1);
          setIsLoading(false);
          setUploadedFileName(ocrFileName);
          return;
        }

        const fileURL = await performOCR(file, file.name);
        setOcrPdfFile(fileURL);
        setPageNumber(1);
        setIsLoading(false);
        setUploadedFileName(ocrFileName);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleTextSelection = (selectedText, position) => {
    if (selectedText && position.withinPdfViewer) {
      setSelectedText(selectedText);
    }
  };

  const handleFileSelect = async (file) => {
    setIsLoading(true);
    try {
      const fileURL = await fetch(`http://127.0.0.1:7000/getFile/${file}`);
      const pdfData = await fileURL.blob();
      const pdfUrl = URL.createObjectURL(pdfData);
      setOcrPdfFile(pdfUrl);
      setUploadedFileName(file);
      setIsLoading(false);
    }
    catch (error) {
      console.error(error);
    }
  }

  // receives a text and sends it to the LLM endpoint


    const generateResponse = async (text) => {


      // the request should have 4 fields, query, fileName, pageNumber and priority
      const response = await fetch(LLM_END_POINT, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ query: text, fileName: uplodedFileName, pageNumber: pageNumber, highlightedText: selectedText ,priority: 1})
        
          // body: JSON.stringify({ query: text, priority: 1})
      });

      const data = await response.json();
      console.log(data);
      return data.response.content;
  }

  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // add the context of the whole page to the message later
    generateResponse(newMessage).then((response) => {
      addResponseMessage(response);
    });

  };
    
  return (
    (<div className="">
      <header className="bg-primary text-primary-foreground py-4 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <img src="https://upload.wikimedia.org/wikipedia/en/5/50/Edwards_Lifesciences_logo.png" alt="Edwards Lifesciences" width={40} height={40} />
            <span className="text-xl font-bold">thvBuddy</span>
          </Link>
          <div className="flex items-center gap-4">


          <Link href="/NErecognition">
              <Button variant="outlined">
                <img src={named_entity_logo_URI} className="w-10 h-10 border-2 font-bold" />
                <span className="sr-only">Editor</span>
              </Button>
            </Link>
            
            <Button variant="ghost">
              <LogInIcon className="w-5 h-5" />
              <span className="sr-only">Login</span>
            </Button>
            <Link href="/about">
              <Button variant="ghost">
                <InfoIcon className="w-5 h-5" />
                <span className="sr-only">About</span>
              </Button>
            </Link>
            <Link href="/editor">
              <Button variant="ghost">
                <FilePenIcon className="w-5 h-5" />
                <span className="sr-only">Editor</span>
              </Button>
            </Link>


            <input
              type="file"
              accept="application/pdf"
              onChange={handleFileChange}
              className="hidden"
              id="pdf-upload"
            />
            <label htmlFor="pdf-upload" className="flex items-center gap-2 cursor-pointer">
              <UploadIcon className="w-5 h-5" />
              Upload PDF
            </label>
          </div>
        </div>
      </header>
        <div className="flex">
          {<MySidebar uploadedFile={ocrPdfFile} onFileSelect={handleFileSelect} uploadedFileName={uplodedFileName}/>}

          <div className="container mx-auto max-w-[8.5in] w-[8.5in] h-[11in]">
            <div
              className="bg-background text-background rounded-lg shadow-lg p-6 min-h-[500px] h-full overflow-auto typography" >
              {<PdfViewer ocrFile={ocrPdfFile} onTextSelect={handleTextSelection} isLoading={isLoading} pageChange={changePageNumber}/>}
      
              <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000, opacity: 1, color: "black"}}>
              {Widget && <Widget
              handleNewUserMessage={handleNewUserMessage} title="thvBuddy" subtitle="How can I help you today?"  profileAvatar={llamaDataURI}
            />}
          </div>
        </div>

          </div>
        </div>
        <StickyNotes className="relative z-100"/>
    </div>)
  );
};

function BotIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
    </svg>)
  );
};


function ImportIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M12 3v12" />
      <path d="m8 11 4 4 4-4" />
      <path
        d="M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4" />
    </svg>)
  );
};


function InfoIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>)
  );
};


function LogInIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
      <polyline points="10 17 15 12 10 7" />
      <line x1="15" x2="3" y1="12" y2="12" />
    </svg>)
  );
};


function UploadIcon(props) {
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
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  )
}


function FilePenIcon(props) {
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
      <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
    </svg>
  )
}
