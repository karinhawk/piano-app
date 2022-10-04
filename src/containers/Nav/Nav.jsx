import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import "./Nav.scss";

const Nav = (props) => {
    const {showIdeas} = props;
  return (
    <div className='nav'>
        <NavBar showIdeas={showIdeas} />
    </div>
  )
}

export default Nav