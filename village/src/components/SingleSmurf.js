import React from 'react';

const smurfData = []; // get the data from the same source above

function SingleSmurf(props) {
  const smurf = smurfData.find(smurf => props.match.params.id === `${this.smurf.id}`);
  console.log(props);
  
  return (
    
    <h1>{props.name}</h1>
    
  );
}

export default SingleSmurf;