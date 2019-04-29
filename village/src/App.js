import React, { Component } from 'react';
import { BrowserRouter as  Route, NavLink } from "react-router-dom";
import axios from 'axios';
import SmurfForm from './components/SmurfForm'
import './App.css';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  componentDidMount() {
    axios
    .get("http://localhost:3333/smurfs")
    .then(response => this.setState({smurfs: response.data}))
    .catch(error => console.log(error))
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    // console.log(this.props);
    
    return (
      <div className="App">
      <Route exact path="/" component={Smurfs} />
      <Route path="/smurf-form" component={SmurfForm} />
        <NavLink exact to="/"> Home </NavLink>
        <NavLink to="/smurf-form" >Add a Smurf </NavLink>
        
        <Smurfs smurfs={this.state.smurfs} />
      </div>
    );
  }
}

export default App;
