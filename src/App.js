import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Point from './components/Main';
import SupportPlaceholder from './components/SupportPlaceholder';
import About from './components/About';
import Header from './components/Header';
import NotFound from './components/NotFound';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  render() {
   return (
    <div>
      <div className="mainContent">
        <Router>
          <Switch>
            <Route exact path="/">
              <Header />
              <Point />
            </Route>
            <Route path="/about">
              <Header />
              <About />
            </Route>
            <Route path="*"><NotFound /></Route>
          </Switch>
        </Router>
      </div>
      <div className="notSupport">
        <SupportPlaceholder></SupportPlaceholder>
      </div>
    </div>
   );
  }
}

export default App;