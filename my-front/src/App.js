// import logo from './logo.svg';
import React, { useRef } from 'react';
import Editor from './Editor';
import './App.css';
import editor_template from './editor_template';


function App() {
  const editorRef = useRef(null);

  const handleClick = () => {
    console.log("Button clicked");
    console.log(editorRef);
    // add the template data into the loaded editor
    if(editorRef.current){
      editorRef.current.loadDataIntoEditorWindow(editor_template)
    }
  }; 
  
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://upload.wikimedia.org/wikipedia/en/5/50/Edwards_Lifesciences_logo.png" alt="Edwards Lifesciences Logo" id="edwards-logo"/> 
      </header>
      <h1>Edwards Lifesciences</h1>
      <button onClick={handleClick} id="generate-template-button">Generate Template</button>
      <main> 
        <div id="editor">
          <Editor ref={editorRef} /> 
        </div>
      </main>
    </div>
  );
}

export default App;
