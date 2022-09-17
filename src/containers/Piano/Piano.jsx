import React from 'react'
import PianoKey from '../../components/PianoKey/PianoKey'
import C3 from "../../audio/C3.aiff";
import Db3 from "../../audio/Db3.aiff";
import D3 from "../../audio/D3.aiff";
import Eb3 from "../../audio/Eb3.aiff";
import E3 from "../../audio/E3.aiff";
import F3 from "../../audio/F3.aiff";
import Gb3 from "../../audio/Gb3.aiff";
import G3 from "../../audio/G3.aiff";
import Ab3 from "../../audio/Ab3.aiff";
import A3 from "../../audio/A3.aiff";
import Bb3 from "../../audio/Bb3.aiff";
import B3 from "../../audio/B3.aiff";
import C4 from "../../audio/C4.aiff";


import "./Piano.scss"

const Piano = () => {
  return (
    <div className='piano'>
    <PianoKey className='piano__key c3' note={C3}/>
    <PianoKey className='piano__key db3' note={Db3}/>
    <PianoKey className='piano__key d3' note={D3}/>
    <PianoKey className='piano__key eb3' note={Eb3}/>
    <PianoKey className='piano__key e3' note={E3}/>
    <PianoKey className='piano__key f3' note={F3}/>
    <PianoKey className='piano__key gb3'note={Gb3}/>
    <PianoKey className='piano__key g3' note={G3}/>
    <PianoKey className='piano__key ab3' note={Ab3}/>
    <PianoKey className='piano__key a3' note={A3}/>
    <PianoKey className='piano__key bb3' note={Bb3}/>
    <PianoKey className='piano__key b3' note={B3}/>
    <PianoKey className='piano__key c4' note={C4}/>
    </div>
  )
}

export default Piano