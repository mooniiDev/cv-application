// Packages Imports
import React from 'react';

// Components Imports
import InfoTitle from './InfoTitle';
import SkillsForm from './SkillsForm';

class GeneralInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <InfoTitle title="SKILLS" border="purple-border" />
        <SkillsForm />
      </div>
    );
  }
}

export default GeneralInfo;
