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
    const { formVisibility, handleSkillsChange, skillsInfo } = this.props;

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
              defaultValue={skillsInfo[0]}
              onChange={handleSkillsChange}
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
  formVisibility: PropTypes.bool,
  handleSkillsChange: PropTypes.func,
  skillsInfo: PropTypes.arrayOf(PropTypes.string),
};

// Creating default props
SkillsForm.defaultProps = {
  formVisibility: false,
  handleSkillsChange: () => {},
  skillsInfo: [],
};

export default SkillsForm;
