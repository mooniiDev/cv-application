// Packages Imports
import React from 'react';

// Components Imports
import InfoTitle from './InfoTitle';
import SkillsForm from './SkillsForm';

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
          title="SKILLS"
          border="purple-border"
          hover="purple-hover"
          formShow={handleFormShow}
        />
        <SkillsForm formVisibility={isActive} />
      </div>
    );
  }
}

export default GeneralInfo;
