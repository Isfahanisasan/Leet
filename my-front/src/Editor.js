import React, { useEffect, useRef, useImperativeHandle, forwardRef } from 'react';
import EditorJs from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';

const Editor = forwardRef((props, ref) => {
    const editorRef = useRef(null);

    useEffect(() => {
        const editor = new EditorJs({
            holder: 'editorjs',
            tools: {
                header: {
                    class: Header,
                    inlineToolbar: ['link']
                },
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
            placeholder: 'Let`s write an AI-Gesnerated SAP!'
        });

        return () => {
            if (editorRef.current) {
                editorRef.current.destroy();
                editorRef.current = null;
            }
        };
    }, []);

    useImperativeHandle(ref, () => ({
        loadDataIntoEditorWindow: (data) => {
            if (editorRef.current && editorRef.current.isReady) {
                editorRef.current.isReady.then(() => {
                    editorRef.current.render(data);
                });
            }
        }
    }));

    return <div id="editorjs"></div>;
});

export default Editor;