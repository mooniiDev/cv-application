// Packages Imports
import React from 'react';
import PropTypes from 'prop-types';

// Components Imports
import InfoTitle from './InfoTitle';
import EducationForm from './EducationForm';

class EducationlInfo extends React.Component {
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
          formVisibility={formVisibility}
          handleFormDisplay={handleFormDisplay}
        />
        <EducationForm formVisibility={formVisibility} />
      </div>
    );
  }
}

// Validating Prop Types
EducationlInfo.propTypes = {
  formType: PropTypes.string,
  title: PropTypes.string,
  border: PropTypes.string,
  hover: PropTypes.string,
  formVisibility: PropTypes.bool,
  handleFormDisplay: PropTypes.func.isRequired,
};

// Creating Default Props
EducationlInfo.defaultProps = {
  formType: 'education',
  title: 'EDUCATIONAL EXPERIENCE',
  border: 'orange-border',
  hover: 'orange-hover',
  formVisibility: false,
};

export default EducationlInfo;
