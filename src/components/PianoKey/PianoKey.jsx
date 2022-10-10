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

  const checkIsKeyboard = (currentIsKeyboard, click) => {
    if (!currentIsKeyboard) {
      click();
    }
  }

    // document.addEventListener("keydown", handleKeyDown, false);

    // const handleEventListener = (e) => {
    // document.addEventListener("keydown", (e) => {
    //   checkIsKeyboard(isKeyboard, handleKeyDown(e));
    // })}


  


  // onMouseDown={!isKeyboard ? addStyling : undefined} onMouseUp={!isKeyboard ? removeStyling : undefined} onKeyDown={() => checkIsKeyboard(isKeyboard, handleKeyDown)}

  return (
    <div className={`${classnames} ${clickStyle}`} onClick={() => checkIsKeyboard(isKeyboard, handleClick)} onKeyDown={() => checkIsKeyboard(isKeyboard, () => document.addEventListener("keydown", handleKeyDown, false))} >
    </div>
  )
}

export default PianoKey