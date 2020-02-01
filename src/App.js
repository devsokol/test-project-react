import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Point from './components/Main';
import SupportPlaceholder from './components/SupportPlaceholder';
import About from './components/About';
import Menu from './components/Menu';
import NotFound from './components/NotFound';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
   return (
    <div>
      <div className="mainContent">
        <Router>
          <Switch>
            <Route exact path="/"><Menu/><Point/></Route>
            <Route path="/about"><Menu/><About/></Route>
            <Route path="*"><NotFound/></Route>
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