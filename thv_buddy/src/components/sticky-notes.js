import React, { useState } from 'react';
import { Button } from './ui/button';
import zIndex from '@mui/material/styles/zIndex';
import Draggable from 'react-draggable';


export default function StickyNotes() {

    const [noteWindowPosition, setNoteWindowPosition] = useState({
        width: 300, 
        height: 400,
        x: 1150,
        y: -1050, 
    });
    const [notes, setNotes] = useState('');
    const [isMinimized, setIsMinimized] = useState(true);
    const [isSmall, setIsSmall] = useState(true);
    const handleNoteWindowResize = (newPosition) => {
        setNoteWindowPosition(newPosition);
        setIsSmall(!isSmall);
    };

    const handleNoteChange = (e) => {
        setNotes(e.target.value);

    }

    const minimizeWindow = () => {
      setIsMinimized(true);
    };
  
    const restoreWindow = () => {
      setIsMinimized(false);
    };
    // build the element



    return (
      <Draggable
        handle=".cursor-move"
        defaultPosition={{ x: noteWindowPosition.x, y: noteWindowPosition.y }}
        onDrag={(e, data) => {
          setNoteWindowPosition({
           ...noteWindowPosition,
            x: data.x,
            y: data.y,
          });
        }}
      >
        {isMinimized? (
          <div
            className="bg-yellow border border-gray-300 rounded-lg p-6 cursor-move"
            style={{
              width: `${isSmall ? noteWindowPosition.width / 2 : noteWindowPosition.width / 4}px`,

              'background-color': 'rgba(254,255,156, 1)',
            }}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold">Sticky Notes</h3>
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => restoreWindow()}
                >
                  <DoorOpenIcon className="w-5 h-5" />
                  <span className="sr-only">Restore</span>
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div
            className="bg-yellow border border-gray-300 rounded-lg p-6 cursor-move"
            style={{
              width: `${noteWindowPosition.width}px`,
              height: `${noteWindowPosition.height}px`,
              'background-color': 'rgba(254,255,156, 1)',
            }}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold">Sticky Notes</h3>
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleNoteWindowResize({ width: 300, height: 400, x: 100, y: 100 })}
                >
                  <MaximizeIcon className="w-5 h-5" />
                  <span className="sr-only">Maximize</span>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleNoteWindowResize({ width: 600, height: 800, x: 50, y: 50 })}
                >
                  <MinimizeIcon className="w-5 h-5" />
                  <span className="sr-only">Minimize</span>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => minimizeWindow()}
                >
                  <DoorClosedIcon className="w-5 h-5" />
                  <span className="sr-only">Minimize</span>
                </Button>
              </div>
            </div>
            <textarea
              value={notes}
              onChange={handleNoteChange}
              className="w-full bg-background text-foreground rounded-lg shadow-xl p-3 h- resize-none"
              placeholder="Take notes here..."
              style={{ height: `${noteWindowPosition.height - 100}px` }}
            />
          </div>
        )}
      </Draggable>
    );
  }
  


function MaximizeIcon(props) {
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
        <path d="M8 3H5a2 2 0 0 0-2 2v3" />
        <path d="M21 8V5a2 2 0 0 0-2-2h-3" />
        <path d="M3 16v3a2 2 0 0 0 2 2h3" />
        <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
      </svg>
    )
  }
  
  
  function MinimizeIcon(props) {
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
        <path d="M8 3v3a2 2 0 0 1-2 2H3" />
        <path d="M21 8h-3a2 2 0 0 1-2-2V3" />
        <path d="M3 16h3a2 2 0 0 1 2 2v3" />
        <path d="M16 21v-3a2 2 0 0 1 2-2h3" />
      </svg>
    )
  }
  
  
  // function MoveIcon(props) {
  //   return (
  //     <svg
  //       {...props}
  //       xmlns="http://www.w3.org/2000/svg"
  //       width="24"
  //       height="24"
  //       viewBox="0 0 24 24"
  //       fill="none"
  //       stroke="currentColor"
  //       strokeWidth="2"
  //       strokeLinecap="round"
  //       strokeLinejoin="round"
  //     >
  //       <polyline points="5 9 2 12 5 15" />
  //       <polyline points="9 5 12 2 15 5" />
  //       <polyline points="15 19 12 22 9 19" />
  //       <polyline points="19 9 22 12 19 15" />
  //       <line x1="2" x2="22" y1="12" y2="12" />
  //       <line x1="12" x2="12" y1="2" y2="22" />
  //     </svg>
  //   )
  // }


  function DoorClosedIcon(props) {
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
        <path d="M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14" />
        <path d="M2 20h20" />
        <path d="M14 12v.01" />
      </svg>
    )
  }

  function DoorOpenIcon(props) {
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
        <path d="M13 4h3a2 2 0 0 1 2 2v14" />
        <path d="M2 20h3" />
        <path d="M13 20h9" />
        <path d="M10 12v.01" />
        <path d="M13 4.562v16.157a1 1 0 0 1-1.242.97L5 20V5.562a2 2 0 0 1 1.515-1.94l4-1A2 2 0 0 1 13 4.561Z" />
      </svg>
    )
  }