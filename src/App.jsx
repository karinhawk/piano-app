import './App.scss';
import Piano from './containers/Piano/Piano';
import IdeasBar from "./components/IdeasBar/IdeasBar";
import { useState } from 'react';
import NavBar from './containers/NavBar/NavBar';

function App() {

  const [toggleIdeas, setToggleIdeas] = useState(false);
  const [playingMode, setPlayingMode] = useState("keyboard");

const showIdeas = () => {
  setToggleIdeas(!toggleIdeas);
}

const switchMode = (e) => {
  if (e.target.value === "mouse"){
    setPlayingMode("mouse")
  } else if (e.target.value === "keyboard"){
    setPlayingMode("keyboard")
  }
}

const handleChosenMode = () => {

}

  return (
    <div className="app">
      <div className='app__nav' showIdeas={showIdeas} switchMode={switchMode}>
      <NavBar showIdeas={showIdeas}/>
      </div>
      <div className='app__main'>
      <Piano handleChosenMode={handleChosenMode} />
      </div>
      {toggleIdeas && <IdeasBar/>}
    </div>
  );
}

//pass toggleIdeas as props to Nav then to NavBar then to ToggleButton

export default App;
