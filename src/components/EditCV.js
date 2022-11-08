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
      handlePracticalDelete,
      handlePracticalAdd,
      handleEducationalChange,
      handleEducationalDelete,
      handleEducationalAdd,
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
          personalInfo={cvInfo.personal}
        />
        <PracticeInfo
          formType="practice"
          title="PRACTICAL EXPERIENCE"
          border="blue-border"
          hover="blue-hover"
          formVisibility={practiceDisplay}
          handleFormDisplay={handleFormDisplay}
          handlePracticalChange={handlePracticalChange}
          handlePracticalDelete={handlePracticalDelete}
          handlePracticalAdd={handlePracticalAdd}
          practiceInfo={cvInfo.practice}
        />
        <EducationInfo
          formType="education"
          title="EDUCATIONAL EXPERIENCE"
          border="orange-border"
          hover="orange-hover"
          formVisibility={educationDisplay}
          handleFormDisplay={handleFormDisplay}
          handleEducationalChange={handleEducationalChange}
          handleEducationalDelete={handleEducationalDelete}
          handleEducationalAdd={handleEducationalAdd}
          educationInfo={cvInfo.education}
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
  handlePracticalDelete: PropTypes.func,
  handlePracticalAdd: PropTypes.func,
  handleEducationalChange: PropTypes.func,
  handleEducationalDelete: PropTypes.func,
  handleEducationalAdd: PropTypes.func,
  cvInfo: PropTypes.shape({
    personal: PropTypes.shape({}),
    practice: PropTypes.arrayOf(PropTypes.shape({})),
    education: PropTypes.arrayOf(PropTypes.shape({})),
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
  handlePracticalDelete: () => {},
  handlePracticalAdd: () => {},
  handleEducationalChange: () => {},
  handleEducationalDelete: () => {},
  handleEducationalAdd: () => {},
  cvInfo: { personal: {}, practice: [], education: [] },
};

export default EditCV;
