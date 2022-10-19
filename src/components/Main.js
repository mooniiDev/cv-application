// Packages imports
import React from 'react';

// Components imports
import Button from './Button';
import PersonalInfo from './PersonalInfo';
import PracticeInfo from './PracticeInfo';
import EducationInfo from './EducationInfo';
import SkillsInfo from './SkillsInfo';

// Styling imports
import '../styles/Main.css';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isPersonalFormDisplayed: false,
      isPracticeFormDisplayed: false,
      isEducationFormDisplayed: false,
      isSkillsFormDisplayed: false,
    };
  }

  // Function that shows a certain form when it's "+" button is clicked
  handleFormDisplay = (e) => {
    const formType =
      e.target.parentElement.parentElement.getAttribute('data-form');

    // Displaying and hiding personal form
    if (formType === 'personal' && e.target.classList.contains('show')) {
      this.setState({
        isPersonalFormDisplayed: true,
      });
    } else if (formType === 'personal' && e.target.classList.contains('hide')) {
      this.setState({
        isPersonalFormDisplayed: false,
      });

      // Displaying and hiding practice form
    } else if (formType === 'practice' && e.target.classList.contains('show')) {
      this.setState({
        isPracticeFormDisplayed: true,
      });
    } else if (formType === 'practice' && e.target.classList.contains('hide')) {
      this.setState({
        isPracticeFormDisplayed: false,
      });

      // Displaying and hiding education form
    } else if (
      formType === 'education' &&
      e.target.classList.contains('show')
    ) {
      this.setState({
        isEducationFormDisplayed: true,
      });
    } else if (
      formType === 'education' &&
      e.target.classList.contains('hide')
    ) {
      this.setState({
        isEducationFormDisplayed: false,
      });

      // Displaying and hiding skills form
    } else if (formType === 'skills' && e.target.classList.contains('show')) {
      this.setState({
        isSkillsFormDisplayed: true,
      });
    } else if (formType === 'skills' && e.target.classList.contains('hide')) {
      this.setState({
        isSkillsFormDisplayed: false,
      });
    }
  };

  render() {
    const {
      isPersonalFormDisplayed,
      isPracticeFormDisplayed,
      isEducationFormDisplayed,
      isSkillsFormDisplayed,
    } = this.state;
    const { handleFormDisplay } = this;

    return (
      <main id="Main">
        <Button buttonText="PREVIEW" buttonClass="preview-button" />
        <PersonalInfo
          formType="personal"
          title="PERSONAL INFORMATION"
          border="red-border"
          hover="red-hover"
          formVisibility={isPersonalFormDisplayed}
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
          title="ADDITIONAL SKILLS"
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
