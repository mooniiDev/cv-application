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

  handleFormShow = () => {
    this.setState({
      isActive: true,
    });
  };

  render() {
    const { isActive } = this.state;
    const { handleFormShow } = this;

    return (
      <div>
        <InfoTitle
          title="PRACTICAL EXPERIENCE"
          border="blue-border"
          hover="blue-hover"
          formShow={handleFormShow}
        />
        <PracticeForm formVisibility={isActive} />
      </div>
    );
  }
}

export default GeneralInfo;
