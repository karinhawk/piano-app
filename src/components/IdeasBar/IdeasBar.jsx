import { getSpaceUntilMaxLength } from '@testing-library/user-event/dist/utils';
import React from 'react'
import { useState } from 'react';
import ToggleButton from '../ToggleButton/ToggleButton';
import CHORDS from "../../Chords";
import MELODIES from "../../Melodies";
import "./IdeasBar.scss";

const IdeasBar = () => {

  let shuffledMelodies = "";

  const [shuffle, setShuffle] = useState(false);

  const toggleShuffle = () => {
    setShuffle(!shuffle);
  }

  shuffledMelodies = MELODIES
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
  shuffledMelodies = shuffledMelodies.slice(0, 1);
  console.log(shuffledMelodies);


  return (
    <div className='ideas'>
      <ToggleButton onClick={toggleShuffle} className={"button shuffle"} />
      {shuffle && <div className='ideas__list'>
        <p className='ideas__list__item'>{shuffledMelodies[0].name}</p>
        <p className='ideas__list__item'>{shuffledMelodies[0].notes}</p>
      </div>}
      <ul className='ideas__list' >
        {!shuffle && MELODIES.map((melody, index) => (
          <div key={index} className="ideas__list__div">
            <p className='ideas__list__item'>{melody.name}</p>
            <p className='ideas__list__item'>{melody.notes}</p>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default IdeasBar