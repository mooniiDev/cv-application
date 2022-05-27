import React from 'react';
import GeneralInformation from './GeneralInformation';
import WorkExperience from './PracticalExperience';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <main id="main">
        <GeneralInformation />
        <WorkExperience />
      </main>
    );
  }
}

export default Main;
