'use client'
import Link from "next/link";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";
import { useRef } from 'react';
import about_template from "@/components/about_template";

const Editor = dynamic (() => import("@/components/about_editor.js"), {
  ssr: false,
});
export default function About() {
  const editorRef = useRef(null);

  const handleEditorLoad = (editor) => {
    // // editor.readOnly.toggle(true);
    editorRef.current = editor;

  };


  return (
    (<div className="flex flex-col h-screen">
      <header className="bg-primary text-primary-foreground py-4 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <img src="https://upload.wikimedia.org/wikipedia/en/5/50/Edwards_Lifesciences_logo.png" alt="Edwards Lifesciences" width={40} height={40} />
            <span className="text-xl font-bold">AI-powered SAP Generation</span>
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
          </div>
        </div>
      </header>
      <div className="flex-1 overflow-auto ">
        <div className="container mx-auto max-w-[8.5in] w-[8.5in] h-[11in]">
          <div
            className="bg-background text-foreground rounded-lg shadow-lg p-6 min-h-[500px] h-full overflow-auto typography" >
            <Editor ref={editorRef} onLoad={handleEditorLoad}/>
          </div>
        </div>
      </div>
    </div>)
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