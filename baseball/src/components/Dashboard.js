import React, { useState } from 'react';


const Dashboard = (props) => {
  return(
    <div>
      <h3>Dashboard</h3>
      <div className='buttons'>
      <button onClick={ props.strike }>strike</button>
      <button onClick={ props.ball }>ball</button>
      <button name=''>foul</button>
      <button name=''>hit</button>
      </div>
    </div>

  )
};

export default Dashboard;