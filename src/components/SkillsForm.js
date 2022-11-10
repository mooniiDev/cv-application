// Packages imports
import React from 'react';
import PropTypes from 'prop-types';

// Components imports
import Button from './Button';
import SkillsList from './SkillsList';

// Styling imports
import '../styles/SkillsForm.css';
import '../styles/Button.css';

class SkillsForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {
      formVisibility,
      handleSkillsChange,
      handleSkillAdd,
      skillsInfo,
      skill,
    } = this.props;

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

          {/* If at least one skill is added - show the skills list */}
          {skillsInfo.length > 0 ? <SkillsList skills={skillsInfo} /> : null}
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
  skillsInfo: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      index: PropTypes.number,
      id: PropTypes.string,
    })
  ),
  skill: PropTypes.shape({
    text: PropTypes.string,
    index: PropTypes.number,
    id: PropTypes.string,
  }),
};

// Creating default props
SkillsForm.defaultProps = {
  formVisibility: false,
  handleSkillsChange: () => {},
  handleSkillAdd: () => {},
  skillsInfo: {},
  skill: {},
};

export default SkillsForm;
