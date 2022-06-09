// Packages Imports
import React from 'react';

// Components Imports
import InfoTitle from './InfoTitle';
import EducationForm from './EducationForm';

class GeneralInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <InfoTitle title="EDUCATIONAL EXPERIENCE" />
        <EducationForm />
      </div>
    );
  }
}

export default GeneralInfo;
