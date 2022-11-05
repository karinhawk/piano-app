import './App.scss';
import Piano from './containers/Piano/Piano';
import IdeasBar from "./components/IdeasBar/IdeasBar";
import { useState } from 'react';
import NavBar from './containers/NavBar/NavBar';

function App() {

  const [toggleIdeas, setToggleIdeas] = useState(false);
  const [isKeyboard, setIsKeyboard] = useState(true);
  

const showIdeas = () => {
  setToggleIdeas(!toggleIdeas);
}

const switchMode = (type) => {
  if (type === "mouse") {
    setIsKeyboard(false);
    console.log("mouse");
  } else if (type === "keyboard") {
    setIsKeyboard(true);
    console.log("keys");
  }
};

  return (
    <div className="app">
      <div className='app__nav' showIdeas={showIdeas}>
      <NavBar showIdeas={showIdeas} switchMode={switchMode}/>
      </div>
      <div className='app__main'>
      <Piano isKeyboard={isKeyboard} />
      </div>
      {toggleIdeas && <IdeasBar/>}
    </div>
  );
}

export default App;
