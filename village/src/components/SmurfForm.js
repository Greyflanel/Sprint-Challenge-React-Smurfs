import React, { Component } from 'react';
import axios from 'axios';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  deleteSmurf = smurfId => {
    axios
    .delete(`http://localhost:3333/smurfs/${smurfId}`)
    .then(response => this.setState({smurfs: response.data}))
    .catch(error => console.log(error));
    
  }
  addSmurf = event => {
    // event.preventDefault();
    const newSmurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height 
    }
    axios
    .post("http://localhost:3333/smurfs", newSmurf)
    .then(response => this.setState({smurfs: response.data}))
    .catch(error => console.log(error))
    // add code to create the smurf using the api

    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }
  
  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    // console.log(this.state);
    
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit" onClick={this.addSmurf}>Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
