
/** Add fonts into your Next.js project:

import { IBM_Plex_Sans } from 'next/font/google'
import { Libre_Franklin } from 'next/font/google'

ibm_plex_sans({
  subsets: ['latin'],
  display: 'swap',
})

libre_franklin({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
'use client'
import Link from "next/link";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
// import Editor from "@/components/Editor.js";
import React, { useRef, useState } from 'react';
import editor_template from "@/components/editor_template";

const Editor = dynamic (() => import("@/components/Editor.js"), {ssr: false});

export function Component() {
  const editorRef = useRef(null);
  // const [eitorKey, setEditorKey] = useState(0);

  const handleClick = () => {
    if (editorRef.current) {
      editorRef.current.loadDataIntoEditorWindow(editor_template);
    }
    console.log(editorRef);
    // setEditorKey(prevKey => prevKey + 1);
  };




  return (
    (<div className="flex flex-col h-screen">
      <header className="bg-primary text-primary-foreground py-4 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <img src="https://upload.wikimedia.org/wikipedia/en/5/50/Edwards_Lifesciences_logo.png" alt="Edwards Lifesciences" width={40} height={40} />
            <span className="text-xl font-bold">AI-powered Statistical Analysis Plan Genration</span>
          </Link>
          <div className="flex items-center gap-4">
            <Button variant="ghost">
              <ImportIcon className="w-5 h-5" />
              <span className="sr-only">Export</span>
            </Button>
            <Button variant="ghost">
              <LogInIcon className="w-5 h-5" />
              <span className="sr-only">Login</span>
            </Button>
            <Button variant="ghost">
              <InfoIcon className="w-5 h-5" />
              <span className="sr-only">About</span>
            </Button>
            <Button className="flex items-center gap-2" onClick={handleClick}>
              <BotIcon className="w-5 h-5" />
              Generate SAP
            </Button>
          </div>
        </div>
      </header>
      <div className="flex-1 overflow-auto p-6">
        <div className="container mx-auto max-w-[8.5in] w-[8.5in] h-[11in]">
          <div
            className="bg-background text-foreground rounded-lg shadow-lg p-6 min-h-[500px] h-full" >
            <Editor ref={editorRef}/>
          </div>
        </div>
      </div>
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


export default Component;