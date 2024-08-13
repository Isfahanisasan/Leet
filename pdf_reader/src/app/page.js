'use client'

import Link from "next/link";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
// import Editor from "@/components/Editor.js";
import React, { useRef, useEffect, useState } from 'react';

import { Widget, addResponseMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import { useTesseract } from 'react-tesseract';

// import PdfViewer from "@/components/pdf_viewer";
// import Editor from "@/components/Editor.js";

const Editor = dynamic (() => import("@/components/Editor.js"), {ssr: false});
const StickyNotes = dynamic(() => import("@/components/sticky-notes.js"), {ssr: false});
const PdfViewer = dynamic(() => import("@/components/pdf_viewer.js"), {ssr: false});


// Cors policy workaround

export default function Home() {
  const [pdfFile, setPdfFile] = useState(null);

  const { recognize, error, result, isRecognizing } = useTesseract();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileURL = URL.createObjectURL(file);
      setPdfFile(fileURL);
    }
  };

  const handleTextSelection = (selectedText, position) => {
    if (selectedText && position.withinPdfViewer) {
      addResponseMessage("you selected: "+ selectedText);
      console.log(selectedText);
    }
  };
    
  return (
    (<div className="">
      <header className="bg-primary text-primary-foreground py-4 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <img src="https://upload.wikimedia.org/wikipedia/en/5/50/Edwards_Lifesciences_logo.png" alt="Edwards Lifesciences" width={40} height={40} />
            <span className="text-xl font-bold">THV Buddy</span>
          </Link>
          <div className="flex items-center gap-4">
            
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
        <div className="container mx-auto max-w-[8.5in] w-[8.5in] h-[11in]">
          <div
            className="bg-background text-background rounded-lg shadow-lg p-6 min-h-[500px] h-full overflow-auto typography" >
            {pdfFile && <PdfViewer pdfFile={pdfFile} onTextSelect={handleTextSelection} />}
 
            <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000, opacity: 1, color: "black"}}>
            <Widget
            handleNewUserMessage={(message) => {
              console.log(`New message: ${message}`);
            }} title="THV Buddy" subtitle="How can I help you today?"
          />
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