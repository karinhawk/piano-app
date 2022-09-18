import React from 'react'
import { useState } from 'react';
import "./PianoKey.scss"
import useSound from 'use-sound';

const PianoKey = (props) => {

    const {note, keycode, classnames} = props;
    const [playNote]  = useSound(note);
    const [style, setStyle] = useState("")

    const addStyling = () => {
      setStyle("click");
    }
    const removeStyling = () => {
      setStyle("");
    }

  return (
    <div className={`${classnames} ${style}`} onClick={playNote} onMouseDown={addStyling} onMouseUp={removeStyling}>
    </div>
  )
}

export default PianoKey