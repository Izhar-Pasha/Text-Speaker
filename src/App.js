import './App.css';
// import React from 'react';

// function App() {
//       let text = document.querySelector(".text");
//         // function Speak(){
//         //             let Utterance = new
//         //           SpeechSynthesisUtterance(text.value);
//         //           speechSynthesis.speak(Utterance);
          
//         // };


        
//         return (
//           <div className="App">
//             <div className="container">
//             <textarea className='text'/>
//             <button onClick={()=>{Speak()}} className='btn'>SPEAK</button>
//             </div>
//           </div>
//         )

//         function Speak() {
//           let Utterance = new SpeechSynthesisUtterance(text.value);
//           speechSynthesis.speak(Utterance);
//         };
// }

// export default App;
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
            <input className='text' type="text" ref={textRef}  />
            <button className='btn' onClick={Speak}>Speak</button>
        </div>
            <div className="copy">
                &copy; Izhar Pasha
            </div>
        </div>
  );
};

export default YourComponent;

