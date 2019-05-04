import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
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

  // smurfId = props => {
  //   props.smurf.find(smurf => `${smurf.id}` === props.match.params.id);
  // };

  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(response => this.setState({ smurfs: response.data }))
      .catch(error => console.log(error));
  }

  render() {
    console.log(this.state);

    return (
      <Router>
      <div className="App">
      <div className="nav">
        <NavLink exact to="/">
          {" "}
          Village {" "}
        </NavLink> 
        <NavLink to={"/single-smurf/:id"}> Smurf </NavLink>
        <NavLink to="/smurf-form"> Add a Smurf </NavLink>
        <div>
          <Route path="/smurf-form" smurfs={this.props.smurfs}  component={SmurfForm} />
          <Route path="/single-smurf/:id" render={(props) => <SingleSmurf {...props} smurfs={this.state.smurfs}  />}/>
        </div>
        </div>
        <div>
          <Route exact path="/" render={() => <Smurfs smurfs={this.state.smurfs} />} />
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
