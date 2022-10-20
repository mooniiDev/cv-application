// Packages imports
import React from 'react';
import PropTypes from 'prop-types';

// Components imports
import InfoTitle from './InfoTitle';
import PersonalForm from './PersonalForm';

class PersonalInfo extends React.Component {
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
          formVisibility={formVisibility}
        />
        <PersonalForm formVisibility={formVisibility} />
      </div>
    );
  }
}

// Validating prop types
PersonalInfo.propTypes = {
  formType: PropTypes.string,
  title: PropTypes.string,
  border: PropTypes.string,
  hover: PropTypes.string,
  formVisibility: PropTypes.bool,
  handleFormDisplay: PropTypes.func.isRequired,
};

// Creating default props
PersonalInfo.defaultProps = {
  formType: 'personal',
  title: 'PERSONAL INFORMATION',
  border: 'red-border',
  hover: 'red-hover',
  formVisibility: false,
};

export default PersonalInfo;
