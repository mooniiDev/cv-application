// Packages imports
import React from 'react';
import PropTypes from 'prop-types';

// Components imports
import PersonalPreview from './PersonalPreview';
import SkillsPreview from './SkillsPreview';
import PracticePreview from './PracticePreview';
import EducationPreview from './EducationPreview';

// Styling imports
import '../styles/PreviewCV.css';

class PreviewCV extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { cvInfo } = this.props;
    const personalInfo = cvInfo.personal;
    const skillsInfo = cvInfo.skills;
    const practiceInfo = cvInfo.practice;
    const educationInfo = cvInfo.education;

    return (
      <div className="preview-box">
        <PersonalPreview personalInfo={personalInfo} />
        <SkillsPreview skillsInfo={skillsInfo} />
        <PracticePreview practiceInfo={practiceInfo} />
        <EducationPreview educationInfo={educationInfo} />
      </div>
    );
  }
}

// Validating prop types
PreviewCV.propTypes = {
  cvInfo: PropTypes.shape({
    personal: PropTypes.shape({}),
    skills: PropTypes.arrayOf(PropTypes.shape({})),
    practice: PropTypes.arrayOf(PropTypes.shape({})),
    education: PropTypes.arrayOf(PropTypes.shape({})),
  }),
};

// Creating default props
PreviewCV.defaultProps = {
  cvInfo: {
    personal: {},
    skills: [],
    practice: [],
    education: [],
  },
};

export default PreviewCV;
