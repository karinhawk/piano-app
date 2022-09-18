import React from 'react'
import "./PianoKey.scss"
import useSound from 'use-sound';

const PianoKey = (props) => {

    const {note, keycode, classnames} = props;
    const [playNote]  = useSound(note);

    console.log(classnames + " click");
    // const addStyling = () => {
    //   let newClassnames = classnames + "click";
    //   return newClassnames;
    // }
    // const removeStyling = () => {
    //   let newClassnames = classnames - "click";
    //   return newClassnames;
    // }
    // const keypress = (e) => {
    //     const keySelected = e.key;
    //     console.log("pressed" + keySelected);
    //     playNote();
    // }
    // onMouseDown={addStyling} onMouseUp={removeStyling}

  return (
    <div className={classnames} onClick={playNote}>
    </div>
  )
}

export default PianoKey