import React from 'react'
import CHORDS from "../../Chords";
import MELODIES from "../../Melodies";
import "./IdeasBar.scss";

const IdeasBar = () => {

  

    // toggle chords


    // toggle melody


  return (
    <div className='ideas-container'>
      <ul className='ideas-list'>
      <li className='ideas-list__item'>{MELODIES.somewhere}</li>
      <li className='ideas-list__item'></li>
      <li className='ideas-list__item'></li>
      <li className='ideas-list__item'></li>
      <li className='ideas-list__item'></li>
      <li className='ideas-list__item'></li>
      <li className='ideas-list__item'></li>
      <li className='ideas-list__item'></li>
      </ul>

    </div>
  )
}

export default IdeasBar