import React, { useState } from 'react';


const Display = (props) => {
  console.log(props)
  const [balls,setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);


  return(
    <div>
      <h3>Balls: {props.balls}</h3>
      <h3>Strikes: {props.strikes}</h3>
    </div>

  )
};

export default Display;