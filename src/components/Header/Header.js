import React, { Component } from 'react';
import './Header.css';
import Logo from './components/Logo/Logo';

class Header extends Component {
  render() {
    return (
      <header className="Header-header">
        <Logo />
        <h1 className="Header-title">Welcome to React</h1>
      </header>
    );
  }
}

export default Header;
