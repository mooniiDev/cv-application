// Packages Imports
import React from 'react';

// Components Imports
import InfoTitle from './InfoTitle';
import PracticeForm from './PracticeForm';

class GeneralInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <InfoTitle />
        <PracticeForm />
      </div>
    );
  }
}

export default GeneralInfo;
