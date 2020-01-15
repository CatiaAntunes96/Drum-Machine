import React from 'react';
import './App.css';

function App() {



  return (
    <div id="drum-machine">
      <section id="display">
        <div className="first-row">
          <div className="drum-pad">
            <p>Q</p> 
            <audio className="clip" id="Q">
              <source></source>
            </audio>
          </div>
        <div className="drum-pad">
          <p>W</p>
          <audio className="clip" id="W">
              <source></source>
            </audio>
        </div>
        <div className="drum-pad">
          <p>E</p>
          <audio className="clip" id="E">
              <source></source>
            </audio>
        </div>
        <div className="drum-pad">
          <p>A</p>
          <audio className="clip" id="A">
              <source></source>
            </audio>
        </div>
        </div>
        <div className="second-row">
        <div className="drum-pad">
          <p>S</p>
          <audio className="clip" id="S">
              <source></source>
            </audio>
        </div>
        <div className="drum-pad">
          <p>D</p>
          <audio className="clip" id="D">
              <source></source>
            </audio>
        </div>
        <div className="drum-pad">
          <p>Z</p>
          <audio className="clip" id="Z">
              <source></source>
            </audio>
        </div>
        <div className="drum-pad">
          <p>X</p> 
            <audio className="clip" id="X">
              <source></source>
            </audio>
        </div>
        <div className="drum-pad">
          <p>C</p>
          <audio className="clip" id="C">
              <source></source>
            </audio>
        </div>
        </div>
        
      </section>
    </div>
  );
}

export default App;
