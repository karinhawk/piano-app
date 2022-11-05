import React from 'react'
import { useState } from 'react';
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
      <button onClick={toggleShuffle} className={"button shuffle"}>{shuffle ? "SHOW LIST" : "SHUFFLE"}</button>
      {shuffle && <div className='ideas__list'>
        <p className='ideas__list__item'>{shuffledMelodies[0].name}</p>
        <p className='ideas__list__item'>{shuffledMelodies[0].notes}</p>
      </div>}
      <div className='ideas__list ideas__list--whole' >
        {!shuffle && MELODIES.map((melody, index) => (
          <div key={index} >
            <p className='ideas__list__item'>{melody.name}</p>
            <p className='ideas__list__item'>{melody.notes}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default IdeasBar