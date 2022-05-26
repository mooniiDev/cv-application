import React from 'react';
import PersonalDetails from './PersonalDetails';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <main id="main">
        <PersonalDetails />
      </main>
    );
  }
}

export default Main;
