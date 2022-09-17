import React from 'react'
import { useState } from 'react';
import "./PianoKey.scss"

const PianoKey = (props) => {

    const [isPlaying, setIsPlaying] = useState(false);

    const {note} = props;

    const playNote = () => {
        setIsPlaying(true);
    }


  return (
    <div className='key' onClick={playNote}>
    </div>
  )
}

export default PianoKey