import React, { Component } from 'react';
import './App.css';
import LandingPage from "./pages/LandingPage";
import FormsList from "./pages/FormsList";
import Eligibility from "./pages/Eligibility";
import DefendantForm from "./pages/DefendantForm";
import PlaintiffForm from "./pages/PlaintiffForm";
import protectiveorder from './pages/protectiveorder';
import affadavit from './containers/affadavit';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQs';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/list" component={FormsList} />
          <Route exact path="/eligibility" component={Eligibility} />
          <Route exact path="/defendant" component={DefendantForm} />
          <Route exact path="/plaintiff" component={PlaintiffForm} />
          <Route exact path="/protectiveorder" component={protectiveorder} />
          <Route exact path="/affadavit" component={affadavit} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/faq" component={FAQ} />
        </Switch>
      </Router>
    );
  }
}
export default App;
