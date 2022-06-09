// Packages Imports
import React from 'react';

// Components Imports
import InfoTitle from './InfoTitle';
import GeneralForm from './GeneralForm';

class GeneralInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <InfoTitle
          title="GENERAL INFORMATION"
          border="red-border"
          hover="red-hover"
        />
        <GeneralForm />
      </div>
    );
  }
}

export default GeneralInfo;
