import React from 'react';

import DrumPad from "./Drum-Pad";
import './App.css';


 
function App() {
  const playSound = () => {
    const audioElement = document.getElementsByClassName("clip")[5];
    audioElement.play();
  } 


  return (
    <div id="drum-machine">
      <section id="display">
      <DrumPad /> 
      </section>
    </div>
  );
}

export default App;