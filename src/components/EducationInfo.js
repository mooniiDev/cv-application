// Packages Imports
import React from 'react';

// Components Imports
import InfoTitle from './InfoTitle';
import EducationForm from './EducationForm';

class GeneralInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
    };
  }

  render() {
    const { isActive } = this.state;

    return (
      <div>
        <InfoTitle
          title="EDUCATIONAL EXPERIENCE"
          border="orange-border"
          hover="orange-hover"
        />
        <EducationForm formVisibility={isActive} />
      </div>
    );
  }
}

export default GeneralInfo;
