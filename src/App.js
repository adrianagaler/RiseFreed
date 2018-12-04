import React, { Component } from 'react';
import './App.css';
import LandingPage from "./components/LandingPage";
import FormsList from "./components/FormsList";
import ProtectiveOrder from "./components/ProtectiveOrder";
import DefendantForm from "./components/DefendantForm";
import PlaintiffForm from "./components/PlaintiffForm";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/list" component={FormsList} />
          <Route exact path="/protective" component={ProtectiveOrder} />
          <Route exact path="/defendant" component={DefendantForm} /> 
          <Route exact path="/plaintiff" component={PlaintiffForm} /> 
        </Switch>
      </Router>
    );
  }
}

export default App;
