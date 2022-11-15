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
      skillsDisplay,
      practiceDisplay,
      educationDisplay,
      cvInfo,
      handlePersonalChange,
      handleSkillsChange,
      handleSkillAdd,
      handleSkillDelete,
      skill,
      error,
      handlePracticalChange,
      handlePracticalDelete,
      handlePracticalAdd,
      handleEducationalChange,
      handleEducationalDelete,
      handleEducationalAdd,
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

        <SkillsInfo
          formType="skills"
          title="ADDITIONAL SKILLS"
          border="blue-border"
          hover="blue-hover"
          formVisibility={skillsDisplay}
          handleFormDisplay={handleFormDisplay}
          handleSkillsChange={handleSkillsChange}
          handleSkillAdd={handleSkillAdd}
          handleSkillDelete={handleSkillDelete}
          skill={skill}
          error={error}
          skillsInfo={cvInfo.skills}
        />

        <PracticeInfo
          formType="practice"
          title="PRACTICAL EXPERIENCE"
          border="orange-border"
          hover="orange-hover"
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
          border="purple-border"
          hover="purple-hover"
          formVisibility={educationDisplay}
          handleFormDisplay={handleFormDisplay}
          handleEducationalChange={handleEducationalChange}
          handleEducationalDelete={handleEducationalDelete}
          handleEducationalAdd={handleEducationalAdd}
          educationInfo={cvInfo.education}
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

  handleSkillsChange: PropTypes.func,
  handleSkillAdd: PropTypes.func,
  handleSkillDelete: PropTypes.func,
  skill: PropTypes.shape({}),
  error: PropTypes.bool,

  handlePracticalChange: PropTypes.func,
  handlePracticalDelete: PropTypes.func,
  handlePracticalAdd: PropTypes.func,

  handleEducationalChange: PropTypes.func,
  handleEducationalDelete: PropTypes.func,
  handleEducationalAdd: PropTypes.func,

  cvInfo: PropTypes.shape({
    personal: PropTypes.shape({}),
    skills: PropTypes.arrayOf(PropTypes.shape({})),
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

  handleSkillsChange: () => {},
  handleSkillAdd: () => {},
  handleSkillDelete: () => {},
  skill: {},
  error: false,

  handlePracticalChange: () => {},
  handlePracticalDelete: () => {},
  handlePracticalAdd: () => {},

  handleEducationalChange: () => {},
  handleEducationalDelete: () => {},
  handleEducationalAdd: () => {},

  cvInfo: { personal: {}, skills: [], practice: [], education: [] },
};

export default EditCV;
