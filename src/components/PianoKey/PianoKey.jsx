import React from 'react'
import { useState } from 'react';
import "./PianoKey.scss"
import useSound from 'use-sound';
import useKeypress from 'react-use-keypress';

const PianoKey = (props) => {

    const {note, keycode, classnames} = props;
    const [playNote]  = useSound(note);
    const [style, setStyle] = useState("")

    const addStyling = () => setStyle("click");
    const removeStyling = () => setStyle("");

      useKeypress([keycode], (event) => {
        console.log("hello");
        if (event.key == keycode) {
          console.log("got here");
          playNote();
        }
    })

  return (
    <div className={`${classnames} ${style}`} onClick={playNote} onMouseDown={addStyling} onMouseUp={removeStyling} onKeyDown={useKeypress}>
    </div>
  )
}

export default PianoKey