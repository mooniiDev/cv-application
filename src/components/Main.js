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
        isPersonalFormDisplayed: true,
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
        education: [
          {
            school: '',
            field: '',
            degree: '',
            grade: '',
            startYear: '',
            startMonth: '',
            endYear: '',
            endMonth: '',
            id: uniqid(),
          },
        ],
        skills: [],
      },
    };
  }

  // GENERAL HANDLING OF FORMS
  // A function to show a certain form when it's 'eye' button is clicked
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

  // MODE HANDLING
  // A function that changes content mode when main button is clicked
  handleMode = () => {
    this.setState((prevState) => ({
      editMode: !prevState.editMode,
    }));
  };

  // PERSONAL INFORMATION AND FORMS HANDLING
  // A function that handles changes in personal form's inputs fields
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

  // PRACTICAL INFORMATION HANDLING
  // A function that handles changes in practice form's inputs fields
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

  // A function that handles deletion of a practice form
  handlePracticalDelete = (e) => {
    this.setState((prevState) => ({
      cvInfo: {
        ...prevState.cvInfo,
        practice: prevState.cvInfo.practice.filter(
          (workplace) =>
            workplace.id !== e.target.parentElement.getAttribute('data-id')
        ),
      },
    }));
  };

  // A function that handles addition of a practice form
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

  // EDUCATIONAL INFORMATION HANDLING
  // A function that handles changes in education form's inputs fields
  handleEducationalChange = (e) => {
    this.setState((prevState) => ({
      cvInfo: {
        ...prevState.cvInfo,
        education: prevState.cvInfo.education.map((school) => {
          if (school.id === e.target.getAttribute('data-key')) {
            return {
              ...school,
              [e.target.getAttribute('data-info')]: e.target.value,
            };
          }
          return school;
        }),
      },
    }));
  };

  // A function that handles deletion of an education form
  handleEducationalDelete = (e) => {
    this.setState((prevState) => ({
      cvInfo: {
        ...prevState.cvInfo,
        education: prevState.cvInfo.education.filter(
          (school) =>
            school.id !== e.target.parentElement.getAttribute('data-id')
        ),
      },
    }));
  };

  // A function that handles addition of an education form
  handleEducationalAdd = () => {
    this.setState((prevState) => ({
      cvInfo: {
        ...prevState.cvInfo,
        education: [
          ...prevState.cvInfo.education,
          {
            school: '',
            field: '',
            degree: '',
            grade: '',
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

  // SKILLS HANDLING
  // A function that handles changes in skills form's input field
  handleSkillsChange = (e) => {
    this.setState((prevState) => ({
      cvInfo: {
        ...prevState.cvInfo,
        skills: [e.target.value],
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
      handlePracticalDelete,
      handlePracticalAdd,
      handleEducationalChange,
      handleEducationalDelete,
      handleEducationalAdd,
      handleSkillsChange,
    } = this;

    if (editMode) {
      return (
        <main id="main">
          {/* A button to show 'preview' mode content */}
          <Button
            buttonEvent={handleMode}
            buttonText="PREVIEW"
            buttonClass="main-button"
          />

          {/* Main 'edit' mode content */}
          <EditCV
            handleFormDisplay={handleFormDisplay}
            personalDisplay={formDisplay.isPersonalFormDisplayed}
            practiceDisplay={formDisplay.isPracticeFormDisplayed}
            educationDisplay={formDisplay.isEducationFormDisplayed}
            skillsDisplay={formDisplay.isSkillsFormDisplayed}
            handlePersonalChange={handlePersonalChange}
            handlePracticalChange={handlePracticalChange}
            handlePracticalDelete={handlePracticalDelete}
            handlePracticalAdd={handlePracticalAdd}
            handleEducationalChange={handleEducationalChange}
            handleEducationalDelete={handleEducationalDelete}
            handleEducationalAdd={handleEducationalAdd}
            handleSkillsChange={handleSkillsChange}
            cvInfo={cvInfo}
          />
        </main>
      );
    }
    return (
      <main id="main">
        {/* A button to show 'edit' mode content */}
        <Button
          buttonEvent={handleMode}
          buttonText="EDIT"
          buttonClass="main-button"
        />

        {/* Main 'preview' mode content */}
        <PreviewCV cvInfo={cvInfo} />
      </main>
    );
  }
}

export default Main;
