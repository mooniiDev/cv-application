// Packages Imports
import React from 'react';
import PropTypes from 'prop-types';

// Components Imports
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
    } = this.props;

    return (
      <div>
        <InfoTitle
          formType={formType}
          title={title}
          border={border}
          hover={hover}
          handleFormDisplay={handleFormDisplay}
        />
        <SkillsForm formVisibility={formVisibility} />
      </div>
    );
  }
}

// Validating Prop Types
SkillsInfo.propTypes = {
  formType: PropTypes.string,
  title: PropTypes.string,
  border: PropTypes.string,
  hover: PropTypes.string,
  formVisibility: PropTypes.bool,
  handleFormDisplay: PropTypes.func.isRequired,
};

// Creating Default Props
SkillsInfo.defaultProps = {
  formType: 'skills',
  title: 'SKILLS',
  border: 'purple-border',
  hover: 'purple-hover',
  formVisibility: false,
};

export default SkillsInfo;
