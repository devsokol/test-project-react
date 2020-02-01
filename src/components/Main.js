import React, { Component } from 'react';

import '../css/menu.css';

class Main extends Component {
    setLocalize = (lan) => {
        console.log(lan)
    }

    getJsonFile() {
        console.log('get json file')
    }

    render() {
        return (
            <div className="testWrapper1">
                Hello world
                <br/><br/>
                <button onClick={ () => this.setLocalize('en') }>en</button><br/>
                <button onClick={ () => this.setLocalize('ru') }>ru</button><br/>
                <button onClick={ this.getJsonFile }>get json file</button>
            </div>
        );
    }
}

export default Main;