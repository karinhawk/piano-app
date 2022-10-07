import React from 'react'
import { useState } from 'react';
import "./PianoKey.scss"
import useSound from 'use-sound';

const PianoKey = (props) => {

    const {note, keycode, classnames, isKeyboard} = props;
    const [playNote]  = useSound(note);
    const [clickStyle, setClickStyle] = useState("");
    

    const addStyling = () => setClickStyle("click");
    const removeStyling = () => setClickStyle("");

    const handleClick = () => {
      playNote();
    }

    const handleKeyDown = (e) => {
      if (e.keyCode === keycode) {
        playNote();
      }
    };
  
    document.addEventListener("keydown", handleKeyDown, false);

    const checkIsKeyboard = (currentIsKeyboard, click) => {
        if (!currentIsKeyboard) {
          click();
        }
    }
    // onMouseDown={!isKeyboard ? addStyling : undefined} onMouseUp={!isKeyboard ? removeStyling : undefined} onKeyDown={isKeyboard ? handleKeyDown : undefined}

  return (
    <div className={`${classnames} ${clickStyle}`} onClick={() => checkIsKeyboard(isKeyboard, handleClick)} >
    </div>
  )
}

export default PianoKey