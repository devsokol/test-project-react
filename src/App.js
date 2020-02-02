import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import i18next from "i18next";

import Point from './components/Main';
import SupportPlaceholder from './components/SupportPlaceholder';
import About from './components/About';
import Menu from './components/Menu';
import NotFound from './components/NotFound';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props)
    
    this.setLanguage('ru')
  }

  setLanguage(language) {
    i18next.init({
      lng: language,
      resources: require(`./localize/${language}.json`)
    })
  }

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