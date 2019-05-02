import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import axios from "axios";
import SmurfForm from "./components/SmurfForm";
import "./App.css";
import Smurfs from "./components/Smurfs";
import SingleSmurf from './components/SingleSmurf';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }

  smurfId = props => {
    props.smurf.find(smurf => `${smurf.id}` === props.match.params.id);
  };

  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(response => this.setState({ smurfs: response.data }))
      .catch(error => console.log(error));
  }

  render() {
    console.log(this.state);

    return (
      <div className="App">
      <div className="nav">
        <NavLink exact to="/">
          {" "}
          Village {" "}
        </NavLink> 
        <NavLink to={`single-smurf/${this.props.id}`}> Smurf </NavLink>
        <NavLink to="/smurf-form"> Add a Smurf </NavLink>
        <div>
          <Route path="/smurf-form" smurfs={this.props.smurfs}  component={SmurfForm} />
          <Route exact to="/single-smurf/:id" smurfs={this.state.smurfs} smurfId={this.smurfId} component={SingleSmurf}/>
        </div>
        </div>
        <div>
          <Route exact path="/" render={() => <Smurfs smurfs={this.state.smurfs} />} />
        </div>
      </div>
    );
  }
}

export default App;
