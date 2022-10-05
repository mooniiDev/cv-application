// Packages Imports
import React from 'react';

// Components Imports
import InfoTitle from './InfoTitle';
import PracticeForm from './PracticeForm';

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
          title="PRACTICAL EXPERIENCE"
          border="blue-border"
          hover="blue-hover"
        />
        <PracticeForm formVisibility={isActive} />
      </div>
    );
  }
}

export default GeneralInfo;
