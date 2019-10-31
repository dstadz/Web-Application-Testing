import React, { useState } from 'react';


const Dashboard = (props) => {
  return(
    <div>
      <h3>Dashboard</h3>
      <div className='buttons'>
      <button onClick={ props.strike }>strike</button>
      <button onClick={ props.ball }>ball</button>
      <button onClick={ props.foul }>foul</button>
      <button onClick={ props.hit }>hit</button>
      </div>
    </div>

  )
};

export default Dashboard;