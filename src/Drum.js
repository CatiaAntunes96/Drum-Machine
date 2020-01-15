import React from "react";

const Drum = ({soundDescription, innerText, soundSrc}) =>
     <div className="drum-pad" id={soundDescription}>
        <p>{innerText}</p> 
        <audio className="clip" id={innerText} >
        <source src={soundSrc} type="audio/wav" />
        </audio>
    </div>



export default Drum;