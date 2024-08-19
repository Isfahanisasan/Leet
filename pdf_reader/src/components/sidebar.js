import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { useEffect, useState } from 'react';
import { Link } from 'next/link';
import { AllSidesIcon } from '@radix-ui/react-icons';
// gets the path to the OCR pdfs' folder
//Whenever the user uploads a file and the OCR process is done, the ocr pdf is added to the sidbar
const MySidebar = ( { uploadedFile, onFileSelect } ) => {
    const [pdfFiles, setPdfFiles] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);

    useEffect(() => {
        const fetchPdfFiles = async () => {
            try {
                const response = await fetch("http://127.0.0.1:8000/getFiles");
                const data = await response.json();
                setPdfFiles(data);
            }
            catch (error) {
                console.error(error);
            }
        };
        fetchPdfFiles();
    }, [uploadedFile]);

    const handleFileClick = (file) => {
        setSelectedFile(file);
        onFileSelect(file);
    }


    return (
        <Sidebar
        rootStyles={{

            borderRadius: '20px',
            boxSizing: 'shadow-box',
            backgroundColor: 'em',

            // pick the aside elemnet with class .ps-sidebar-root
            ["& .ps-sidebar-root"]: {
                display: 'none',
            },


          }}>
            <Menu 
                menuItemStyles={{
                    button: ({ active, disabled }) => {
                      // only apply styles on first level elements of the tree
                        return {
                          color: active ? "black" : "grey",
                          backgroundColor: active ? 'rgb(241, 144, 144)' : undefined,
                          borderRadius : '15px',
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
                            {file}
                        </MenuItem>
                    ))}
            </Menu>
        </Sidebar>
    );
};


export default MySidebar;


