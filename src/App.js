import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import i18next from "i18next";

import Point from './components/Main';
import SupportPlaceholder from './components/SupportPlaceholder';
import About from './components/About';
import Menu from './components/Menu';
import NotFound from './components/NotFound';

import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props)
    
    this.setLanguage('ru')
  }

  state = {
    inputValue: ''
  }

  setLanguage(language) {
    i18next.init({
      lng: language,
      resources: require(`./localize/${language}.json`)
    })
  }

  handleInput = (e) => {
    this.setState({ inputValue: e.target.value })
  }

  saveTrack = () => {
    let nameCountry = this.state.inputValue

    if (nameCountry.length) {
      this.props.saveCountry(nameCountry)
    }
  }

  handleSearch = (e) => {
    let text = e.target.value

    this.props.searchCountry(text)
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

        {/* !delete for testing */}
        <div>
          <input type="text" onChange={ this.handleInput } style={{ border: '2px solid black' }} />
          <button onClick={ this.saveTrack }>save track</button><br/>
          <input type="text" placeholder="search" style={{ border: '1px solid black' }} onChange={ this.handleSearch } />
          <br/>
          <ul>
            { this.props.countries.map((item, index) => (
              <li key={ index }>{ item }</li>
            )) }
          </ul>
        </div>
        
      </div>
    );
  }
}

export default connect(
  state => ({
    countries: state.countries
  }),
  dispatch => ({
    saveCountry: (name) => {
      dispatch({ type: 'ADD_COUNTRY', payload: name })
    },
    searchCountry: (text) => {
      dispatch({ type:  'SEARCH_COUNTRY', payload: text })
    }
  })
)(App);