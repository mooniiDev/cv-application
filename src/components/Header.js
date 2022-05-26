import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <header id="header">
        <h1 className="title">CV APPLICATION</h1>
      </header>
    );
  }
}

export default Header;
