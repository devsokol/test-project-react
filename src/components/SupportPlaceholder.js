import React, { Component } from 'react';

const placeholderMobileVersion = {
    textAlign: 'center',
    fontSize: '40px',
    color: 'red',
    fontWeight: 'bold',
    border: '2px solid red'
}

class SupportPlaceholder extends Component {
    render() {
        return (
            <div style={ placeholderMobileVersion }>
                <span>Only mobile version...</span>
            </div>
        );
    }
}

export default SupportPlaceholder;