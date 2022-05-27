import React from 'react';
import GeneralInformation from './GeneralInformation';
import PracticalExperience from './PracticalExperience';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <main id="main">
        <GeneralInformation />
        <PracticalExperience />
      </main>
    );
  }
}

export default Main;
