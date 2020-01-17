import React, {useState, useEffect} from "react";

const Drum = ({soundDescription, innerText, soundSrc}) => {
    function useKey(key) {
        const [pressed, setPressed] = useState(false);
        const match = event => key.toUpperCase() == event.key.toUpperCase();
        const onDown = event => {
            if (match(event)) {
                setPressed(true);
                document.getElementById(key).play();
                document.getElementById("display").innerText = soundDescription;
            } 
        }
        const onUp = event => {
            if (match(event)) setPressed(false);
        }
        useEffect(() => {
            window.addEventListener("keydown", onDown);
            window.addEventListener("keyup", onUp);
            return () => {
                window.removedEventListener("keydown", onDown);
                window.removeEventListener("keyup", onUp);
            }
        }, [key])
    
        return pressed;
    }
    const keyPressed = useKey(innerText);
    
    const playAudio = (e) => {
        let clickedElement = e.target.innerText;
        let idElement = document.getElementById(clickedElement);
        idElement.play();
        document.getElementById("display").innerText = soundDescription;
    }

    return (
     <div className="drum-pad" id={soundDescription} onClick={playAudio}>
        {innerText}
        <audio className="clip" id={innerText} >
        <source src={soundSrc} type="audio/wav" />
        </audio>
        {keyPressed}
    </div>
    )
}

export default Drum;