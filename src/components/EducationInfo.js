// Packages imports
import React from 'react';
import PropTypes from 'prop-types';

// Components imports
import InfoTitle from './InfoTitle';
import EducationForm from './EducationForm';

class EducationInfo extends React.Component {
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
      handleEducationalChange,
      handleEducationalDelete,
      handleEducationalAdd,
      educationInfo,
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

        <EducationForm
          formVisibility={formVisibility}
          handleEducationalChange={handleEducationalChange}
          handleEducationalDelete={handleEducationalDelete}
          handleEducationalAdd={handleEducationalAdd}
          educationInfo={educationInfo}
        />
      </div>
    );
  }
}

// Validating prop types
EducationInfo.propTypes = {
  formType: PropTypes.string,
  title: PropTypes.string,
  border: PropTypes.string,
  hover: PropTypes.string,
  formVisibility: PropTypes.bool,
  handleFormDisplay: PropTypes.func,
  handleEducationalChange: PropTypes.func,
  handleEducationalDelete: PropTypes.func,
  handleEducationalAdd: PropTypes.func,
  educationInfo: PropTypes.arrayOf(PropTypes.shape({})),
};

// Creating default props
EducationInfo.defaultProps = {
  formType: 'education',
  title: 'EDUCATIONAL EXPERIENCE',
  border: 'purple-border',
  hover: 'purple-hover',
  formVisibility: () => {},
  handleFormDisplay: () => {},
  handleEducationalChange: () => {},
  handleEducationalDelete: () => {},
  handleEducationalAdd: () => {},
  educationInfo: [],
};

export default EducationInfo;
