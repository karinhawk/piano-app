import React from 'react'
import PianoKey from '../../components/PianoKey/PianoKey'
import C3 from "../../audio/C3.mp3";
import Db3 from "../../audio/Db3.mp3";
import D3 from "../../audio/D3.mp3";
import Eb3 from "../../audio/Eb3.mp3";
import E3 from "../../audio/E3.mp3";
import F3 from "../../audio/F3.mp3";
import Gb3 from "../../audio/Gb3.mp3";
import G3 from "../../audio/G3.mp3";
import Ab3 from "../../audio/Ab3.mp3";
import A3 from "../../audio/A3.mp3";
import Bb3 from "../../audio/Bb3.mp3";
import B3 from "../../audio/B3.mp3";
import C4 from "../../audio/C4.mp3";


import "./Piano.scss"
import KEYBOARD from '../../Keyboard';

const Piano = ({ handleChosenMode }) => {


  return (
    <div className='piano'>
    <PianoKey classnames={`piano__key c3 white`} note={C3} keycode={KEYBOARD.KEY_Z} handleChosenMode={handleChosenMode}/>
    <PianoKey classnames={`piano__key db3 black`} note={Db3} keycode={KEYBOARD.KEY_S} handleChosenMode={handleChosenMode}/>
    <PianoKey classnames={`piano__key d3 white`} note={D3} keycode={KEYBOARD.KEY_X} handleChosenMode={handleChosenMode}/>
    <PianoKey classnames={`piano__key eb3 black`} note={Eb3} keycode={KEYBOARD.KEY_D} handleChosenMode={handleChosenMode}/>
    <PianoKey classnames={'piano__key e3 white'} note={E3} keycode={KEYBOARD.KEY_C} handleChosenMode={handleChosenMode}/>
    <PianoKey classnames={'piano__key f3 white'} note={F3} keycode={KEYBOARD.KEY_V} handleChosenMode={handleChosenMode}/>
    <PianoKey classnames={'piano__key gb3 black'}note={Gb3} keycode={KEYBOARD.KEY_G} handleChosenMode={handleChosenMode}/>
    <PianoKey classnames={'piano__key g3 white'} note={G3} keycode={KEYBOARD.KEY_B} handleChosenMode={handleChosenMode}/>
    <PianoKey classnames={'piano__key ab3 black'} note={Ab3} keycode={KEYBOARD.KEY_H} handleChosenMode={handleChosenMode}/>
    <PianoKey classnames={'piano__key a3 white'} note={A3} keycode={KEYBOARD.KEY_N} handleChosenMode={handleChosenMode}/>
    <PianoKey classnames={'piano__key bb3 black'} note={Bb3} keycode={KEYBOARD.KEY_J} handleChosenMode={handleChosenMode}/>
    <PianoKey classnames={'piano__key b3 white'} note={B3} keycode={KEYBOARD.KEY_M} handleChosenMode={handleChosenMode}/>
    <PianoKey classnames={'piano__key c4 white'} note={C4} keycode={KEYBOARD.COMMA} handleChosenMode={handleChosenMode}/>
    </div>
  )
}

export default Piano