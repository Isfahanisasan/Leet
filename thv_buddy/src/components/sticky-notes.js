import React, { useState } from 'react';
import { Button } from './ui/button';
import zIndex from '@mui/material/styles/zIndex';
import Draggable from 'react-draggable';


export default function StickyNotes() {

    const [noteWindowPosition, setNoteWindowPosition] = useState({
        width: 300, 
        height: 400,
        x: 1200,
        y: -50, 
    });
    const [notes, setNotes] = useState('');
    const handleNoteWindowResize = (newPosition) => {
        setNoteWindowPosition(newPosition);
    };
    const handleNoteChange = (e) => {
        setNotes(e.target.value);
    }

    // build the element

    return (

        <Draggable
            handle=".cursor-move" // Specify the handle for dragging (e.g., the move button)
            defaultPosition={{ x: noteWindowPosition.x, y: noteWindowPosition.y }}
            onDrag={(e, data) => {
                setNoteWindowPosition({
                    ...noteWindowPosition,
                    x: data.x,
                    y: data.y,
                });
            }}
        >

            <div
                className="bg-red border border-gray-300 rounded-lg shadow-xl p-6  cursor-move" 
                style={{
                    width: `${noteWindowPosition.width}px`,
                    height: `${noteWindowPosition.height}px`,
                }}
            >
                <div className="flex justify-between items-center mb-4 ">
                    <h3 className="text-lg font-bold">Notes</h3>
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
                            onClick={() => handleNoteWindowResize({ width: 500, height: 600, x: 50, y: 50 })}
                        >
                            <MinimizeIcon className="w-5 h-5" />
                            <span className="sr-only">Minimize</span>
                        </Button>

                    </div>
                </div>
                <textarea
                    value={notes}
                    onChange={handleNoteChange}
                    className="w-full bg-background text-foreground rounded-lg shadow-sm p-3 resize-none h-[300px]"
                    placeholder="Take notes here..."
                />
            </div>
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
  
  
  function MoveIcon(props) {
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
        <polyline points="5 9 2 12 5 15" />
        <polyline points="9 5 12 2 15 5" />
        <polyline points="15 19 12 22 9 19" />
        <polyline points="19 9 22 12 19 15" />
        <line x1="2" x2="22" y1="12" y2="12" />
        <line x1="12" x2="12" y1="2" y2="22" />
      </svg>
    )
  }