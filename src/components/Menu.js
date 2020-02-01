import React, { Component } from 'react';
import { slide as SideMenu } from 'react-burger-menu'
import { Link } from "react-router-dom";

let styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '26px',
    height: '20px',
    left: '26px',
    top: '20px'
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%'
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmItem: {
    display: 'inline-block'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

let testWrapper = {
  height: '60px',
  width: '100%',
  background: '#848383',
  position: 'fixed'
}

let testWrapperMain = {
  height: '60px'
}

class Menu extends Component {  
    state = {
        isOpenMenu: false
    }

    closeMenu = () => {
        this.setState({isOpenMenu: false})
    }

    handleStateChange = state => {
        this.setState({isOpenMenu: state.isOpen}) 
    }

    render() {
      return (
        <div style={ testWrapperMain }>
          <div style={ testWrapper }>
            <SideMenu 
              styles={ styles }
              onStateChange={ state => this.handleStateChange(state) }
              isOpen={ this.state.isOpenMenu }
              width={ '50%' }
              disableAutoFocus
            >
              <ul>
                <li onClick={() => this.closeMenu()}>
                  <Link to="/">Home</Link>
                </li>
                <li onClick={() => this.closeMenu()}>
                  <Link to="/about">About</Link>
                </li>
                <li onClick={() => this.closeMenu()}>
                  <Link to="/other">Other</Link>
                </li>
              </ul>
            </SideMenu>
          </div>
        </div>
      );
    }
}

export default Menu;