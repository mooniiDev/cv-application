// Packages Imports
import React from 'react';

// Components Imports
import Button from './Button';
import GeneralInfo from './GeneralInfo';
import PracticeInfo from './PracticeInfo';
import EducationInfo from './EducationInfo';
import SkillsInfo from './SkillsInfo';

// Styling Imports
import '../styles/Main.css';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isGeneralFormDisplayed: false,
      isPracticeFormDisplayed: false,
      isEducationFormDisplayed: false,
      isSkillsFormDisplayed: false,
    };
  }

  // function that shows a certain form when it's "+" button is clicked
  handleFormDisplay = (e) => {
    const formType =
      e.target.parentElement.parentElement.getAttribute('data-form');

    if (formType === 'general') {
      this.setState({
        isGeneralFormDisplayed: true,
      });
    } else if (formType === 'practice') {
      this.setState({
        isPracticeFormDisplayed: true,
      });
    } else if (formType === 'education') {
      this.setState({
        isEducationFormDisplayed: true,
      });
    } else if (formType === 'skills') {
      this.setState({
        isSkillsFormDisplayed: true,
      });
    }
  };

  render() {
    const {
      isGeneralFormDisplayed,
      isPracticeFormDisplayed,
      isEducationFormDisplayed,
      isSkillsFormDisplayed,
    } = this.state;
    const { handleFormDisplay } = this;

    return (
      <main id="Main">
        <Button buttonText="PREVIEW" buttonClass="preview-button" />
        <GeneralInfo
          formType="general"
          title="GENERAL INFORMATION"
          border="red-border"
          hover="red-hover"
          formVisibility={isGeneralFormDisplayed}
          handleFormDisplay={handleFormDisplay}
        />
        <PracticeInfo
          formType="practice"
          title="PRACTICAL EXPERIENCE"
          border="blue-border"
          hover="blue-hover"
          formVisibility={isPracticeFormDisplayed}
          handleFormDisplay={handleFormDisplay}
        />
        <EducationInfo
          formType="education"
          title="EDUCATIONAL EXPERIENCE"
          border="orange-border"
          hover="orange-hover"
          formVisibility={isEducationFormDisplayed}
          handleFormDisplay={handleFormDisplay}
        />
        <SkillsInfo
          formType="skills"
          title="SKILLS"
          border="purple-border"
          hover="purple-hover"
          formVisibility={isSkillsFormDisplayed}
          handleFormDisplay={handleFormDisplay}
        />
      </main>
    );
  }
}

export default Main;
