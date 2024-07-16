'use client'
import React, { useEffect, useRef, useImperativeHandle, forwardRef } from 'react';
import EditorJs, { ToolConstructable } from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Table from '@editorjs/table';
import Paragraph from '@editorjs/paragraph';
import Marker from '@editorjs/marker';
import editor_template from '@/components/editor_template.js';
import AIText from '@alkhipce/editorjs-aitext';
import Delimiter from '@editorjs/delimiter';
import ChangeCase from 'editorjs-change-case';
import Warning from '@editorjs/warning';
import Alert from 'editorjs-alert';
import TemplateInlineTool from 'editorjs-inline-template';
import inlineAI from '../components/inlineAI';

// import NoticeTune from 'editorjs-notice';


const TOC = require('@phigoro/editorjs-toc');
const EJLaTex = require('editorjs-latex');
// const FontFamily = require('editorjs-inline-font-family-tool');
const LLM_END_POINT = "http://localhost:8000/query"
const Editor = forwardRef((props, ref) => {
    const editorRef = useRef(null);

    useEffect(() => {

        const editor = new EditorJs({
            // data: editor_template,
            holder: 'editorjs',
            tools: {
                paragraph: {
                    class: Paragraph,
                    inlineToolbar: true
                }, 
                header: {
                    class: Header,
                    inlineToolbar: true
                },
                list: {
                    class: List,
                    inlineToolbar: true
                }, 
                table: {
                    class: Table,
                    inlineToolbar: true
                },
                aiText: {
                    // if you do not use TypeScript you need to remove "as unknown as ToolConstructable" construction
                    // type ToolConstructable imported from @editorjs/editorjs package
                    class: AIText, 
                    config: {
                      callback: (text) => {
                        const myResponse = generateResponse(text); 
                        return Promise.resolve(myResponse);
                      },
                    }
                  },
                Marker: {
                    class: Marker
                    // Shortcut 
                }, 
                toc: {
                    class: TOC
                },
                delimiter: {
                    class: Delimiter
                }, 
                // noticeTune: NoticeTune,
                ChangeCase: {
                    class: ChangeCase,
                    config: {
                        showLocaleOption: false
                    }
                },
                inlineAI: {
                    class: inlineAI,

                    config: {
                        buttonHTML: `<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 4V20M17 12V20M6 20H10M15 20H19M13 7V4H3V7M21 14V12H13V14" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`
                    }
                },

    //             template: {
    //                 class: TemplateInlineTool,
    // //                 config: {
    // //                     buttonHTML: `<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    // //   <path d="M8 4V20M17 12V20M6 20H10M15 20H19M13 7V4H3V7M21 14V12H13V14" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    // //   </svg>`
    // //                 }
    //             },
                // fontFamily: FontFamily,
                // inlineCode: InlineCode,
                // code: Code,
                // image: Image,
                // link: Link,
                // raw: Raw,
                // quote: Quote,
                // warning: Warning,
                // checklist: CheckList,
                // embed: Embed,
                // interactive: Interactive,
                // history: History
                // warning: {
                //     class: Warning,
                //     inlineToolbar: true,
                //     config: {
                //         titlePlaceHolder: '⭐'


                //     }
                // }
                alert: {
                    class: Alert, 
                    inlineToolbar: true,
                    config: {
                        alertTypes: ['primary', 'secondary', 'info', 'success', 'warning', 'danger', 'light', 'dark'],
                        defaultType: 'primary',
                        messagePlaceHolder: 'Enter a message'

                    }
                }


            },
            // tunes: ['noticeTune'],
            autofocus: true,
            onReady: () => {
                console.log('Editor.js is ready to use');
                editorRef.current = editor;
                if(props.onLoad){
                    props.onLoad(editor);
                }
            },
            placeholder: 'Let`s write an AI-Generated SAP!'
        });

        return () => {
            if (editorRef.current) {
                editorRef.current.destroy();
                editorRef.current = null;
            }
            
        };
    }, [props.initialData]);

    const generateResponse = async (text) => {
        const response = await fetch(LLM_END_POINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ query: text, priority: 1})
        });

        const data = await response.json();
        console.log(data);
        return data.response.content;
    }

    return <div id="editorjs" ref={editorRef}></div>;
});

export default Editor;