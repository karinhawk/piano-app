import './App.scss';
import Piano from './containers/Piano/Piano';
import IdeasBar from "./components/IdeasBar/IdeasBar";
import { useState } from 'react';
import NavBar from './containers/NavBar/NavBar';

function App() {

  const [toggleIdeas, setToggleIdeas] = useState(false);
//toggle showing ideas bar, have a toggle at the bottom, set state as false and when click on toggle do the opposite 
// showIdeas && {<IdeasBar />}
const showIdeas = () => {
  setToggleIdeas(!toggleIdeas);
}

  return (
    <div className="app">
      <div className='app__nav' showIdeas={showIdeas}>
      <NavBar />
      </div>
      <div className='app__main'>
      <Piano />
      </div>
      {toggleIdeas && <IdeasBar/>}
    </div>
  );
}

//pass toggleIdeas as props to Nav then to NavBar then to ToggleButton

export default App;
