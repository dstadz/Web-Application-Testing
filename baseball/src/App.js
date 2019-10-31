import React, { useState } from 'react';
import Display from './components/Display'
import Dashboard from './components/Dashboard'
import './App.css';




const App = () => {
  
  const [balls,setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);

  const strike = () => {
    strikes < 2 
    ? setStrikes(strikes+1) 
    : setStrikes(0)
  }
  const ball = () => {
    balls < 3 
    ? setBalls(balls+1) 
    : setBalls(0)
  }
  const foul = () => {
    if(strikes < 2 ) setStrikes(strikes+1) 
  }
  const hit = () => {
    setStrikes(0)
    setBalls(0)
  }

  return (
    <div className="App">
      <Display balls={balls} strikes= {strikes} /> 
      <Dashboard 
      strike={strike}
      ball={ball}
      foul={foul}
      hit={hit}
      />
    </div>
  );
}

export default App;
