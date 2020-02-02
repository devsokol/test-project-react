import React, { Component } from 'react';
import i18next from "i18next";

import '../css/menu.css';

class Main extends Component {
    state = {
        language: {
            i18next
        }
    }

    componentDidMount() {
        this.setLanguage('en')
    }
    
    setLanguage = (language) => {
        i18next.init({
            lng: language,
            resources: require(`../localize/${language}.json`)
        })

        this.setState({
            language: language
        })
    }

    render() {
        return (
            <div className="testWrapper1">
                Hello world
                <br/><br/>
                <button onClick={ () => this.setLanguage('en') }>en</button><br/>
                <button onClick={ () => this.setLanguage('ru') }>ru</button><br/>

                <div>{i18next.t('test_message')}</div>
            </div>
        );
    }
}

export default Main;