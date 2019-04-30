import React, { Component } from 'react';
import axios from 'axios';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: '',
      id: ''
    };
    
  }

  deleteSmurf = () => {
    axios
    .delete(`http://localhost:3333/smurfs/${this.state.id}`)
    .then(response => this.setState({smurfs: response.data}))
    .catch(error => console.log(error));
    
  }
  addSmurf = () => {
    const newSmurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height, 
      id: this.state.id 
    }
    axios
    .post("http://localhost:3333/smurfs", newSmurf)
    .then(response => this.setState({smurfs: response.data}))
    .catch(error => console.log(error))
    

    this.setState({
      name: '',
      age: '',
      height: '',
      id: ''
    });
  }
  
  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    console.log(this.props)
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
          <button type="submit" onClick={this.addSmurf}>Add to the Village</button>
        </form>
        <form onSubmit={this.deleteSmurf}>
        <input onChange={this.handleInputChange} placeholder="Smurf Id number" value={this.state.id} name="id"/>
        <button type="submit" onClick={this.deleteSmurf}>Delete from Village</button>
        </form>
      </div>
    );
  }
  
}

export default SmurfForm;
