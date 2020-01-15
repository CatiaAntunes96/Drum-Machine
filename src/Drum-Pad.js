import React from "react";
import Drum from "./Drum";

function DrumPads() {

 const drumsArray = [{soundDescription:"heavy_kick", innerText:"Q", soundSrc:"heavy-kick.wav"},
 {soundDescription:"tom", innerText:"W", soundSrc:"tom.wav"},
 {soundDescription:"piano_key", innerText:"E", soundSrc:"piano_key.wav"},
//  {soundDescription:"", innerText:"", soundSrc:""},
//  {soundDescription:"", innerText:"", soundSrc:""},
//  {soundDescription:"", innerText:"", soundSrc:""},
//  {soundDescription:"", innerText:"", soundSrc:""},
//  {soundDescription:"", innerText:"", soundSrc:""},
//  {soundDescription:"", innerText:"", soundSrc:""}
]


    return (
        <div>
            {
                drumsArray.map(d => (<Drum key = {d.soundDescription}  {...d}/>) )
            }
{/* 
<div className="drum-pad" id="heavy_kick" onClick={playSound}>
                <p>Q</p> 
                <audio className="clip" id="Q" >
                <source src="heavy-kick.wav" type="audio/wav" />
                </audio>
            </div>
            <div className="drum-pad" id="tom">
                <p>W</p>
                <audio className="clip" id="W">
                <source src="tom.wav" type="audio/wav" />
                </audio>
            </div>
            <div className="drum-pad" id="piano_key">
                <p>E</p>
                <audio className="clip" id="E">
                <source src="piano_key.wav" type="audio/wav" />
                </audio>
            </div>
            <div className="drum-pad" id="hat">
                <p>A</p>
                <audio className="clip" id="A">
                <source src="hat.wav" type="audio/wav" />
                </audio>
            </div>
        </div>
        <div className="second-row">
            <div className="drum-pad" id="snr_one">
                <p>S</p>
                <audio className="clip" id="S">
                <source src="snr_one.wav" type="audio/wav" />
                </audio>
            </div>
            <div className="drum-pad" id="clap_one" onClick={playSound}>
                <p>D</p>
                <audio className="clip" id="D">
                <source src="clap_one.wav" type="audio/wav" />
                </audio>
            </div>
            <div className="drum-pad" id="clap_two">
                <p>Z</p>
                <audio className="clip" id="Z">
                <source src="clap_two.wav" type="audio/wav" />
                </audio>
            </div>
            <div className="drum-pad" id="cymbal">
                <p>X</p> 
                <audio className="clip" id="X">
                <source src="cymbal.wav" type="audio/wav" />
                </audio>
            </div>
            <div className="drum-pad" id="snr_two">
                <p>C</p>
                <audio className="clip" id="C">
                <source src="snr_two" type="audio/wav" />
                </audio>
            </div> */}

        </div>
        );
    }

export default DrumPads;