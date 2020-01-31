import React, { Component } from 'react';

const mainStyleNotFound = {
    textAlign: 'center',
    marginTop: '20px',
    color: 'red',
    fontSize: '28px',
    border: '2px solid red',
    borderRadius: '10px'
}

class NotFound extends Component {
    render() {
        return (
            <div style={ mainStyleNotFound }>
                Page not found! 404
            </div>
        );
    }
}

export default NotFound;