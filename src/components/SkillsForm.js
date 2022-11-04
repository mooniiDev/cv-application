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

    if (formVisibility) {
      return (
        <form className="skills-form">
          {/* Skill */}
          <label htmlFor="skill">
            Skill
            <input
              id="skill"
              type="text"
              name="skill"
              placeholder="Ex: React.js"
            />
          </label>

          {/* Button for adding a skill */}
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
