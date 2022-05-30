import React from 'react';
import GeneralInformation from './GeneralInformation';
import PracticalExperience from './PracticalExperience';
import EducationalExperience from './EducationalExperience';
import Skills from './Skills';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <main id="main">
        <input type="button" value="PREVIEW" />
        <GeneralInformation />
        <PracticalExperience />
        <EducationalExperience />
        <Skills />
      </main>
    );
  }
}

export default Main;
