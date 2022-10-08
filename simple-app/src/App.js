import React, { useState } from 'react';
import Button from './components/UI/Button/Button'
import DemoOutput from './components/UI/Button/Demo/DemoOutput';
import './App.css';

function App() {
  const [showParagraph, setShowParagraph] = useState(false) 

  console.log('App Runnig')

  const toggleParagraphHandler = ()  => {
    setShowParagraph((prevShowParagrapgh) => !prevShowParagrapgh);
  }

  return (
    <div className="app" >
      <h1>Hi there!</h1>
      <DemoOutput show={false}/>
      {showParagraph && <p>This is new!</p>}
      <Button onClick={toggleParagraphHandler}>Show Paragrapgh</Button>
    </div>
  );
}

export default App;
