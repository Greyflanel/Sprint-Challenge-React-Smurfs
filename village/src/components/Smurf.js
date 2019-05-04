import React from 'react';


const Smurf = props => {
  // console.log(props);
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} cm tall</strong>
      <p>{props.age} smurf years old</p>
      
      <img src="https://vignette.wikia.nocookie.net/smurfs/images/9/95/Clumsy_1.png/revision/latest?cb=20141120070054" alt=""/>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

