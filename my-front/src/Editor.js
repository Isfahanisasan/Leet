import React, { useEffect, useRef } from 'react';
import EditorJs from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';

const Editor = () => {
    const editorRef = useRef(null);
    useEffect( () => {
        const editor = new EditorJs({
            holder: 'editorjs',
            tools: {
                header:{
                    class: Header,
                    inlineToolbar: ['link']
                } ,
                list: {
                    class: List,
                    inlineToolbar: true
                } 
            }, 
            autofocus: true,
            onReady: () => {
                console.log('Editor.js is ready to use');
                editorRef.current = editor; 
            },
            placeholder: 'Let`s write an AI-Generated SAP!'
        });
        return () => {
            if (editorRef.current){
                editorRef.current.destroy();
            }
        }
    }, []);


    return <div style={{padding: '20px', border: '1px solid #ddd'}}id="editorjs"></div>;
};

export default Editor;