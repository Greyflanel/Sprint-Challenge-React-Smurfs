import React from 'react';



class SingleSmurf extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {const id = this.props.match.params.id}
    smurfData = this.props.smurfs;
    smurf = this.smurfData.find(smurf => this.id === `${smurf.id}`);
  render() {
  return (
    <h1>{this.props.name}</h1> 
  );
}
}

export default SingleSmurf;