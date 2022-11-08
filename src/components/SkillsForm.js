// Packages imports
import React from 'react';
import PropTypes from 'prop-types';

// Components imports
import Button from './Button';

// Styling imports
import '../styles/SkillsForm.css';
import '../styles/Button.css';

class SkillsForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { formVisibility } = this.props;

    // If skills form is clicked to be visible
    if (formVisibility) {
      return (
        <form className="skills-form">
          {/* Skill input */}
          <label htmlFor="skill">
            Skill
            <input
              id="skill"
              type="text"
              name="skill"
              placeholder="Ex: React.js"
            />
          </label>

          {/* A button to add another skill */}
          <Button
            buttonText="add"
            buttonClass="add-skill-button fontAwesome-button"
          />
        </form>
      );
    }
    return null;
  }
}

// Validating prop types
SkillsForm.propTypes = {
  formVisibility: PropTypes.bool.isRequired,
};

export default SkillsForm;
