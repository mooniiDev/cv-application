// Packages imports
import React from 'react';
import PropTypes from 'prop-types';

// Components imports
import PersonalInfo from './PersonalInfo';
import PracticeInfo from './PracticeInfo';
import EducationInfo from './EducationInfo';
import SkillsInfo from './SkillsInfo';

class EditCV extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {
      handleFormDisplay,
      personalDisplay,
      practiceDisplay,
      educationDisplay,
      skillsDisplay,
      handlePersonalChange,
      handlePracticalChange,
      cvInfo,
    } = this.props;

    return (
      <div>
        <PersonalInfo
          formType="personal"
          title="PERSONAL INFORMATION"
          border="red-border"
          hover="red-hover"
          formVisibility={personalDisplay}
          handleFormDisplay={handleFormDisplay}
          handlePersonalChange={handlePersonalChange}
          personalCVInfo={cvInfo.personal}
        />
        <PracticeInfo
          formType="practice"
          title="PRACTICAL EXPERIENCE"
          border="blue-border"
          hover="blue-hover"
          formVisibility={practiceDisplay}
          handleFormDisplay={handleFormDisplay}
          handlePracticalChange={handlePracticalChange}
          practiceCVInfo={cvInfo.practice}
        />
        <EducationInfo
          formType="education"
          title="EDUCATIONAL EXPERIENCE"
          border="orange-border"
          hover="orange-hover"
          formVisibility={educationDisplay}
          handleFormDisplay={handleFormDisplay}
        />
        <SkillsInfo
          formType="skills"
          title="ADDITIONAL SKILLS"
          border="purple-border"
          hover="purple-hover"
          formVisibility={skillsDisplay}
          handleFormDisplay={handleFormDisplay}
        />
      </div>
    );
  }
}

// Validating prop types
EditCV.propTypes = {
  personalDisplay: PropTypes.bool,
  practiceDisplay: PropTypes.bool,
  educationDisplay: PropTypes.bool,
  skillsDisplay: PropTypes.bool,
  handleFormDisplay: PropTypes.func,
  handlePersonalChange: PropTypes.func,
  handlePracticalChange: PropTypes.func,
  cvInfo: PropTypes.shape({
    personal: PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      phone: PropTypes.string,
      email: PropTypes.string,
      linkedin: PropTypes.string,
      github: PropTypes.string,
      about: PropTypes.string,
    }),
    practice: PropTypes.shape({
      title: PropTypes.string,
      company: PropTypes.string,
      task: PropTypes.string,
      type: PropTypes.string,
      startYear: PropTypes.string,
      startMonth: PropTypes.string,
      endYear: PropTypes.string,
      endMonth: PropTypes.string,
    }),
  }),
};

// Creating default props
EditCV.defaultProps = {
  personalDisplay: false,
  practiceDisplay: false,
  educationDisplay: false,
  skillsDisplay: false,
  handleFormDisplay: () => {},
  handlePersonalChange: () => {},
  handlePracticalChange: () => {},
  cvInfo: { personal: {}, practice: {} },
};

export default EditCV;
