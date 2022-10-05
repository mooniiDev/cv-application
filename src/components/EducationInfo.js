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
          title="EDUCATIONAL EXPERIENCE"
          border="orange-border"
          hover="orange-hover"
          formShow={handleFormShow}
        />
        <EducationForm formVisibility={isActive} />
      </div>
    );
  }
}

export default GeneralInfo;
