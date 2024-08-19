import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { useEffect, useState } from 'react';
import { Link } from 'next/link';
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
        <Sidebar>
            <Menu iconShape="square">
                    {pdfFiles && pdfFiles.map((file, index) => (
                        <MenuItem key={index}
                        active={file===selectedFile}
                        onClick={() => handleFileClick(file)}>
                            {file}
                            {file===selectedFile}
]                        </MenuItem>
                    ))}
            </Menu>
        </Sidebar>
    );
};


export default MySidebar;


