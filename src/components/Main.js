// Packages Imports
import React from 'react';

// Components Imports
import GeneralInfo from './GeneralInfo';
import PracticeForm from './PracticeForm';
import EducationForm from './EducationForm';
import SkillsForm from './SkillsForm';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <main id="Main">
        <input type="button" className="preview-button" value="PREVIEW" />
        <GeneralInfo />
        <PracticeForm />
        <EducationForm />
        <SkillsForm />
      </main>
    );
  }
}

export default Main;
