import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { useEffect, useState } from 'react';
// gets the path to the OCR pdfs' folder
//Whenever the user uploads a file and the OCR process is done, the ocr pdf is added to the sidbar
const MySidebar = ( { uploadedFile, onFileSelect, uploadedFileName } ) => {
    const [pdfFiles, setPdfFiles] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [collapsed, setCollapsed] = useState(true);

    useEffect(() => {
        const fetchPdfFiles = async () => {
            try {
                const response = await fetch("http://127.0.0.1:7000/getFiles");
                const data = await response.json();
                setPdfFiles(data);
            }
            catch (error) {
                console.error(error);
            }
        };
        fetchPdfFiles();

        if (uploadedFile ) {
            setSelectedFile(uploadedFileName);
        }

    }, [uploadedFile, uploadedFileName]);

    const handleFileClick = (file) => {
        onFileSelect(file);
    }

    const toggleSidebar = () => {
        setCollapsed(!collapsed);
    };


    return (
        <div>
      <div style={{ display: 'flex', alignItems: 'center', padding: '10px' }}>
        <FileStackIcon style={{ marginRight: 'auto'}} /> 
        <h3 style={{ marginLeft: 'auto', paddingLeft: '5px'}}>Files</h3>
        <button onClick={toggleSidebar} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
          {collapsed ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </button>
      </div>
        <Sidebar
        
        collapsed={collapsed}
        rootStyles={{
            borderRadius: '15px',
            boxSizing: 'shadow-box',
            backgroundColor: 'em',
          }}>
            <Menu 
                menuItemStyles={{
                    button: ({ active, disabled }) => {
                      // only apply styles on first level elements of the tree
                        return {
                          color: active ? "black" : "grey",
                          backgroundColor: active ? 'rgb(241, 144, 144)' : undefined,
                          borderRadius : '15px',
                          border: active ? '1px solid grey' : undefined,
                          fontSize: '10px',
                          // When I hover I want it to look as it is clicked
                            "&:hover": {
                                color: 'black',
                                backgroundColor: 'rgb(241, 144, 144)',
                            },
                            
                        };
                    },
                  }}
            
            iconShape="square">
                    {pdfFiles && pdfFiles.map((file, index) => (
                        <MenuItem key={index}
                        active={file===selectedFile}
                        onClick={() => handleFileClick(file)}>
                          <FileIcon style={{ marginRight: '10px' }} /> {file}
                        </MenuItem>
                    ))
                    }
            </Menu>
        </Sidebar>
        </div>
    );
};


function FileIcon(props) {
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
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      </svg>
    )
  }
  

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
  


  function FileStackIcon(props) {
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
        <path d="M21 7h-3a2 2 0 0 1-2-2V2" />
        <path d="M21 6v6.5c0 .8-.7 1.5-1.5 1.5h-7c-.8 0-1.5-.7-1.5-1.5v-9c0-.8.7-1.5 1.5-1.5H17Z" />
        <path d="M7 8v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H15" />
        <path d="M3 12v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H11" />
      </svg>
    )
  }
export default MySidebar;


