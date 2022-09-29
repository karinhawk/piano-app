import React from 'react'
import { useState } from 'react';
import "./PianoKey.scss"
import useSound from 'use-sound';

const PianoKey = (props) => {

    const {note, keycode, classnames} = props;
    const [playNote]  = useSound(note);
    const [style, setStyle] = useState("");
    

    const addStyling = () => setStyle("click");
    const removeStyling = () => setStyle("");

    const handleClick = () => {
      playNote();
    }

    const handleKeyDown = (e) => {
      if (e.keyCode === keycode) {
        playNote();
      }
    };
  
    document.addEventListener("keydown", handleKeyDown, false);

  return (
    <div className={`${classnames} ${style}`} onClick={handleClick} onMouseDown={addStyling} onMouseUp={removeStyling} onKeyDown={handleKeyDown}>
    </div>
  )
}

export default PianoKey