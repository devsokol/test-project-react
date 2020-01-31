import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Point from './components/Point';
import SupportPlaceholder from './components/SupportPlaceholder';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  render() {
   return (
    <div>
      <div className="mainContent">
        <Router>
          <Switch>
              <Route path="/">
                <Point />
              </Route>
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