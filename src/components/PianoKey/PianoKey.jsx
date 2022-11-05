import React from 'react'
import { useState } from 'react';
import "./PianoKey.scss"
import useSound from 'use-sound';

const PianoKey = (props) => {

  const { note, keycode, classnames, isKeyboard } = props;
  const [playNote] = useSound(note);
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

  if (isKeyboard) {
    document.addEventListener("keydown", handleKeyDown, false);
    return <div className={`${classnames} ${clickStyle}`}></div>;
  } else {
    document.removeEventListener("keydown", handleKeyDown);
    return (
      <div className={`${classnames} ${clickStyle}`} onClick={playNote}></div>
    );
  }

}

export default PianoKey