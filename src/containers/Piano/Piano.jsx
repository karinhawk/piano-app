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

const Piano = () => {


  return (
    <div className='piano'>
    <PianoKey classnames={`piano__key c3 white`} note={C3} keycode={"122"}/>
    <PianoKey classnames={`piano__key db3 black`} note={Db3} keycode={"115"}/>
    <PianoKey classnames={`piano__key d3 white`} note={D3} keycode={"120"}/>
    <PianoKey classnames={`piano__key eb3 black`} note={Eb3} keycode={"100"} />
    <PianoKey classnames={'piano__key e3 white'} note={E3} keycode={"99"}/>
    <PianoKey classnames={'piano__key f3 white'} note={F3} keycode={"118"}/>
    <PianoKey classnames={'piano__key gb3 black'}note={Gb3} keycode={"103"}/>
    <PianoKey classnames={'piano__key g3 white'} note={G3} keycode={"98"} />
    <PianoKey classnames={'piano__key ab3 black'} note={Ab3} keycode={"104"} />
    <PianoKey classnames={'piano__key a3 white'} note={A3} keycode={"110"} />
    <PianoKey classnames={'piano__key bb3 black'} note={Bb3} keycode={"106"}/>
    <PianoKey classnames={'piano__key b3 white'} note={B3} keycode={"109"}/>
    <PianoKey classnames={'piano__key c4 white'} note={C4} keycode={"44"}/>
    </div>
  )
}

export default Piano