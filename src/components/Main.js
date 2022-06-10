// Packages Imports
import React from 'react';

// Components Imports
import Button from './Button';
import GeneralInfo from './GeneralInfo';
import PracticeInfo from './PracticeInfo';
import EducationInfo from './EducationInfo';
import SkillsInfo from './SkillsInfo';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <main id="Main">
        <Button text="PREVIEW" />
        <GeneralInfo />
        <PracticeInfo />
        <EducationInfo />
        <SkillsInfo />
      </main>
    );
  }
}

export default Main;
