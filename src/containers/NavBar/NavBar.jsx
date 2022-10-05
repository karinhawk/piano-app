import React from 'react'
import ToggleButton from '../../components/ToggleButton/ToggleButton'
import "./NavBar.scss"
import  {ReactComponent as Hamburger} from "../../svgs/hamburger.svg"
import { ReactComponent as Expand } from "../../svgs/expand.svg"
import { ReactComponent as Collapse } from "../../svgs/collapse.svg"
import { ReactComponent as Ideas } from "../../svgs/ideas.svg"

const NavBar = (props) => {
    const {showIdeas} = props;
  return (
    <div className='navbar'>
        <ToggleButton toggle={showIdeas} classname={"button white svg"}><Hamburger/></ToggleButton>
        <ToggleButton toggle={showIdeas} classname={"button white svg"}><Expand/></ToggleButton>
        <ToggleButton toggle={showIdeas} classname={"button white svg"}><Ideas/></ToggleButton>
    </div>
  )
}

export default NavBar