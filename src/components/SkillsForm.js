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
    const { formVisibility, handleSkillsChange, handleSkillAdd, skill } =
      this.props;

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
              value={skill.text}
              onChange={handleSkillsChange}
              placeholder="Ex: React.js"
            />
          </label>

          {/* A button to add another skill */}
          <Button
            buttonEvent={handleSkillAdd}
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
  handleSkillAdd: PropTypes.func,
  skill: PropTypes.shape({
    text: PropTypes.string,
    id: PropTypes.string,
    index: PropTypes.number,
  }),
};

// Creating default props
SkillsForm.defaultProps = {
  formVisibility: false,
  handleSkillsChange: () => {},
  handleSkillAdd: () => {},
  skill: {},
};

export default SkillsForm;
