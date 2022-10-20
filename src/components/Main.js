// Packages imports
import React from 'react';

// Components imports
import Button from './Button';
import EditCV from './EditCV';
import PreviewCV from './PreviewCV';

// Styling imports
import '../styles/Main.css';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formDisplay: {
        isPersonalFormDisplayed: false,
        isPracticeFormDisplayed: false,
        isEducationFormDisplayed: false,
        isSkillsFormDisplayed: false,
      },
      editMode: true,
    };
  }

  // Function that shows a certain form when it's "+" button is clicked
  handleFormDisplay = (e) => {
    const formType =
      e.target.parentElement.parentElement.getAttribute('data-form');

    // Displaying and hiding personal form
    if (formType === 'personal' && e.target.classList.contains('show')) {
      this.setState({
        formDisplay: { isPersonalFormDisplayed: true },
      });
    } else if (formType === 'personal' && e.target.classList.contains('hide')) {
      this.setState({
        formDisplay: { isPersonalFormDisplayed: false },
      });

      // Displaying and hiding practice form
    } else if (formType === 'practice' && e.target.classList.contains('show')) {
      this.setState({
        formDisplay: { isPracticeFormDisplayed: true },
      });
    } else if (formType === 'practice' && e.target.classList.contains('hide')) {
      this.setState({
        formDisplay: { isPracticeFormDisplayed: false },
      });

      // Displaying and hiding education form
    } else if (
      formType === 'education' &&
      e.target.classList.contains('show')
    ) {
      this.setState({
        formDisplay: { isEducationFormDisplayed: true },
      });
    } else if (
      formType === 'education' &&
      e.target.classList.contains('hide')
    ) {
      this.setState({
        formDisplay: { isEducationFormDisplayed: false },
      });

      // Displaying and hiding skills form
    } else if (formType === 'skills' && e.target.classList.contains('show')) {
      this.setState({
        formDisplay: { isSkillsFormDisplayed: true },
      });
    } else if (formType === 'skills' && e.target.classList.contains('hide')) {
      this.setState({
        formDisplay: { isSkillsFormDisplayed: false },
      });
    }
  };

  render() {
    const { formDisplay, editMode } = this.state;
    const { handleFormDisplay } = this;

    if (editMode === true) {
      return (
        <main id="Main">
          <Button buttonText="PREVIEW" buttonClass="main-button" />
          <EditCV
            handleFormDisplay={handleFormDisplay}
            personalDisplay={formDisplay.isPersonalFormDisplayed}
            practiceDisplay={formDisplay.isPracticeFormDisplayed}
            educationDisplay={formDisplay.isEducationFormDisplayed}
            skillsDisplay={formDisplay.isSkillsFormDisplayed}
          />
        </main>
      );
    }
    return (
      <main id="Main">
        <Button buttonText="EDIT" buttonClass="main-button" />
        <PreviewCV />
      </main>
    );
  }
}

export default Main;
