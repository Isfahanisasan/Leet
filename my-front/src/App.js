// import logo from './logo.svg';
import React from 'react';
import Editor from './Editor';
import './App.css';


function App() {

  const handleClick = () => {
    console.log("Button clicked");
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://upload.wikimedia.org/wikipedia/en/5/50/Edwards_Lifesciences_logo.png" alt="Edwards Lifesciences Logo" id="edwards-logo"/> 
        <button onClick={handleClick} id="generate-template-button">Generate Template</button>
      </header>

      <h1>Edwards Lifesciences</h1>
      <h2>React.js Test</h2>
      <main> <Editor /> </main>




    </div>
  );
}

export default App;
