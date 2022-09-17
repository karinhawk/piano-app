import React from 'react'
import { useState } from 'react';
import "./PianoKey.scss"
import useSound from 'use-sound';

const PianoKey = (props) => {

    const {note} = props;
    const [playNote]  = useSound(note);

  return (
    <div className='key-div' onClick={playNote}>
    </div>
  )
}

export default PianoKey