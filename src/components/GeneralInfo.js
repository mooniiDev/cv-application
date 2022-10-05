// Packages Imports
import React from 'react';

// Components Imports
import InfoTitle from './InfoTitle';
import GeneralForm from './GeneralForm';

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
          title="GENERAL INFORMATION"
          border="red-border"
          hover="red-hover"
          formShow={handleFormShow}
        />
        <GeneralForm formVisibility={isActive} />
      </div>
    );
  }
}

export default GeneralInfo;
