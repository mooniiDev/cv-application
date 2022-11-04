// Packages imports
import React from 'react';
import uniqid from 'uniqid';

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
      cvInfo: {
        personal: {
          firstName: '',
          lastName: '',
          phone: '',
          email: '',
          linkedin: '',
          github: '',
          about: '',
        },
        practice: [
          {
            title: '',
            company: '',
            task: '',
            type: '',
            startYear: '',
            startMonth: '',
            endYear: '',
            endMonth: '',
            id: uniqid(),
          },
        ],
      },
    };
  }

  // Function that shows a certain form when it's "eye" button is clicked
  handleFormDisplay = (e) => {
    const formType =
      e.target.parentElement.parentElement.getAttribute('data-form');

    // Displaying and hiding personal form
    if (formType === 'personal') {
      this.setState((prevState) => ({
        formDisplay: {
          ...prevState.formDisplay,
          isPersonalFormDisplayed:
            !prevState.formDisplay.isPersonalFormDisplayed,
        },
      }));

      // Displaying and hiding practice form
    } else if (formType === 'practice') {
      this.setState((prevState) => ({
        formDisplay: {
          ...prevState.formDisplay,
          isPracticeFormDisplayed:
            !prevState.formDisplay.isPracticeFormDisplayed,
        },
      }));

      // Displaying and hiding education form
    } else if (formType === 'education') {
      this.setState((prevState) => ({
        formDisplay: {
          ...prevState.formDisplay,
          isEducationFormDisplayed:
            !prevState.formDisplay.isEducationFormDisplayed,
        },
      }));

      // Displaying and hiding skills form
    } else if (formType === 'skills') {
      this.setState((prevState) => ({
        formDisplay: {
          ...prevState.formDisplay,
          isSkillsFormDisplayed: !prevState.formDisplay.isSkillsFormDisplayed,
        },
      }));
    }
  };

  // Function that changes content mode when main button is clicked
  handleMode = () => {
    this.setState((prevState) => ({
      editMode: !prevState.editMode,
    }));
  };

  // Function that handles changes in personal form's inputs fields
  handlePersonalChange = (e) => {
    this.setState((prevState) => ({
      cvInfo: {
        ...prevState.cvInfo,
        personal: {
          ...prevState.cvInfo.personal,
          [e.target.getAttribute('data-info')]: e.target.value,
        },
      },
    }));
  };

  // Function that handles changes in practice form's inputs fields
  handlePracticalChange = (e) => {
    this.setState((prevState) => ({
      cvInfo: {
        ...prevState.cvInfo,
        practice: prevState.cvInfo.practice.map((workplace) => {
          if (workplace.id === e.target.getAttribute('data-key')) {
            return {
              ...workplace,
              [e.target.getAttribute('data-info')]: e.target.value,
            };
          }
          return workplace;
        }),
      },
    }));
  };

  handlePracticalAdd = () => {
    this.setState((prevState) => ({
      cvInfo: {
        ...prevState.cvInfo,
        practice: [
          ...prevState.cvInfo.practice,
          {
            title: '',
            company: '',
            task: '',
            type: '',
            startYear: '',
            startMonth: '',
            endYear: '',
            endMonth: '',
            id: uniqid(),
          },
        ],
      },
    }));
  };

  render() {
    const { formDisplay, editMode, cvInfo } = this.state;
    const {
      handleFormDisplay,
      handleMode,
      handlePersonalChange,
      handlePracticalChange,
      handlePracticalAdd,
    } = this;

    if (editMode === true) {
      return (
        <main id="main">
          <Button
            buttonEvent={handleMode}
            buttonText="PREVIEW"
            buttonClass="main-button"
          />
          <EditCV
            handleFormDisplay={handleFormDisplay}
            personalDisplay={formDisplay.isPersonalFormDisplayed}
            practiceDisplay={formDisplay.isPracticeFormDisplayed}
            educationDisplay={formDisplay.isEducationFormDisplayed}
            skillsDisplay={formDisplay.isSkillsFormDisplayed}
            handlePersonalChange={handlePersonalChange}
            handlePracticalChange={handlePracticalChange}
            handlePracticalAdd={handlePracticalAdd}
            cvInfo={cvInfo}
          />
        </main>
      );
    }
    return (
      <main id="main">
        <Button
          buttonEvent={handleMode}
          buttonText="EDIT"
          buttonClass="main-button"
        />
        <PreviewCV cvInfo={cvInfo} />
      </main>
    );
  }
}

export default Main;
