import React from 'react';
import PersonalDetails from './PersonalDetails';
import WorkExperience from './WorkExperience';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <main id="main">
        <PersonalDetails />
        <WorkExperience />
      </main>
    );
  }
}

export default Main;
