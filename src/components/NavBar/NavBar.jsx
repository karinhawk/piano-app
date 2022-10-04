import React from 'react'
import ToggleButton from '../ToggleButton/ToggleButton'
import "./NavBar.scss"

const NavBar = (props) => {
    const {showIdeas} = props;
  return (
    <div className='nav'>
        <ToggleButton toggle={showIdeas} />
    </div>
  )
}

export default NavBar