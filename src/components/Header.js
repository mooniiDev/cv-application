// Packages Imports
import React from 'react';

// Styling Imports
import '../styles/Header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <header id="Header">
        <h1 className="cv-title">CV APPLICATION</h1>
      </header>
    );
  }
}

export default Header;
