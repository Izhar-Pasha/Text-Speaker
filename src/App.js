import './App.css';
import React, { useRef } from 'react';

const YourComponent = () => {
  const textRef = useRef(null);

  const Speak = () => {
    if (textRef.current) {
      const Utterance = new SpeechSynthesisUtterance(textRef.current.value);
      speechSynthesis.speak(Utterance);
    } else {
      console.error('Input element not found.');
    }
  };

  return (
    <div className="App">
      <h1>TEXT SPEAKER</h1>
       <div className="container">
            <textarea className='text' type="text" ref={textRef}  />
            <button className='btn' onClick={Speak}>Speak</button>
        </div>
            <div className="copy">
                &copy; Izhar_Pasha 
            </div>
        </div>
  );
};

export default YourComponent;

