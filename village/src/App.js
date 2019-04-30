import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import axios from "axios";
import SmurfForm from "./components/SmurfForm";
import "./App.css";
import Smurfs from "./components/Smurfs";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }

  smurfId = (props) => {
     props.smurf.find(
      smurf => `${smurf.id}` === props.match.params.id
    )}

  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(response => this.setState({ smurfs: response.data }))
      .catch(error => console.log(error));
  }

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    // console.log(this.state);

    return (
      <div className="App">
        <NavLink exact to="/"> Home </NavLink>
        <NavLink  to="/smurf-form"> Add a Smurf </NavLink>
        <Route exact path="/" render={() => <Smurfs smurfs={this.state.smurfs} />} />
        <Route path="/:id" smurfs={this.props.smurfs} smurfId={this.state.id} component={SmurfForm} />
      </div>
    );
  }
};

export default App;
