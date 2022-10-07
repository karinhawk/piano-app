import React from "react";
import ToggleButton from "../../components/ToggleButton/ToggleButton";
import { ReactComponent as Hamburger } from "../../svgs/hamburger.svg";
import { ReactComponent as Expand } from "../../svgs/expand.svg";
import { ReactComponent as Ideas } from "../../svgs/ideas.svg";
import { ReactComponent as Mouse } from "../../svgs/mouse.svg";
import { ReactComponent as Keyboard } from "../../svgs/keyboard.svg";
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./NavBar.scss";
import "../../components/ToggleButton/ToggleButton.scss";

const NavBar = (props) => {
  const { showIdeas, switchMode } = props;
  

  return (

    <div className="navbar">
      <ToggleButton toggle={showIdeas} className={"button white svg"}>
        <Hamburger />
      </ToggleButton>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic" className="button svg caret-off">
          <Expand />
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <div className="dropdown__menu">
            <Dropdown.Item href="#/mouse-mode" value="mouse" onClick={switchMode}><Mouse /></Dropdown.Item>
            <Dropdown.Item href="#/keyboard-mode" value="keyboard" onClick={switchMode}><Keyboard /></Dropdown.Item>
          </div>
        </Dropdown.Menu>
      </Dropdown>
      <ToggleButton toggle={showIdeas} className={"button white svg"}>
        <Ideas />
      </ToggleButton>
    </div>
  );
};

export default NavBar;
