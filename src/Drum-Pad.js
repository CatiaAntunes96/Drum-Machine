import React from "react";
import Drum from "./Drum";

function DrumPad() {

 const drumsArray = [{soundDescription:"Heavy Kick", innerText:"Q", soundSrc:"heavy_kick.wav"},
 {soundDescription:"Tom", innerText:"W", soundSrc:"tom.wav"},
 {soundDescription:"Piano Key", innerText:"E", soundSrc:"piano_key.wav"},
 {soundDescription:"Hat", innerText:"A", soundSrc:"hat.wav"},
 {soundDescription:"Snr One", innerText:"S", soundSrc:"snr_one.wav"},
 {soundDescription:"Clap One", innerText:"D", soundSrc:"clap_one.wav"},
 {soundDescription:"Clap Two", innerText:"Z", soundSrc:"clap_two.wav"},
 {soundDescription:"Cymbal", innerText:"X", soundSrc:"cymbal.wav"},
 {soundDescription:"Snr two", innerText:"C", soundSrc:"snr_two.wav"}
]

    return (
        <div className="parent_container">
        <div className="box">
            <p style={{fontWeight: "bold"}}>Sound Playing:</p>
            <p id="display">{drumsArray.soundDescription}</p>
        </div>
        
        <div className="container">
            {
                drumsArray.map(d => (<Drum key = {d.soundDescription}  {...d} />) )
            }

        </div>
        </div>
        );
    }

export default DrumPad;