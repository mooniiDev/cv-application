// Packages imports
import React from 'react';
import PropTypes from 'prop-types';

// Components imports
import InfoTitle from './InfoTitle';
import SkillsForm from './SkillsForm';

class SkillsInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {
      formType,
      title,
      border,
      hover,
      formVisibility,
      handleFormDisplay,
      handleSkillsChange,
      skillsInfo,
    } = this.props;

    return (
      <div>
        <InfoTitle
          formType={formType}
          title={title}
          border={border}
          hover={hover}
          formVisibility={formVisibility}
          handleFormDisplay={handleFormDisplay}
        />

        <SkillsForm
          formVisibility={formVisibility}
          handleSkillsChange={handleSkillsChange}
          skillsInfo={skillsInfo}
        />
      </div>
    );
  }
}

// Validating prop types
SkillsInfo.propTypes = {
  formType: PropTypes.string,
  title: PropTypes.string,
  border: PropTypes.string,
  hover: PropTypes.string,
  formVisibility: PropTypes.bool,
  handleFormDisplay: PropTypes.func,
  handleSkillsChange: PropTypes.func,
  skillsInfo: PropTypes.arrayOf(PropTypes.string),
};

// Creating default props
SkillsInfo.defaultProps = {
  formType: 'skills',
  title: 'SKILLS',
  border: 'purple-border',
  hover: 'purple-hover',
  formVisibility: false,
  handleFormDisplay: () => {},
  handleSkillsChange: () => {},
  skillsInfo: [],
};

export default SkillsInfo;
