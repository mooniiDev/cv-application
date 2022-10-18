// Packages imports
import React from 'react';
import PropTypes from 'prop-types';

// Styling imports
import '../styles/SkillsForm.css';

class SkillsForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { formVisibility } = this.props;

    if (formVisibility === true) {
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
        </form>
      );
    }
    return null;
  }
}

// Validating prop types
SkillsForm.propTypes = {
  formVisibility: PropTypes.bool,
};

// Creating default props
SkillsForm.defaultProps = {
  formVisibility: false,
};

export default SkillsForm;
