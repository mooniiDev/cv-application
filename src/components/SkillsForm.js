// Packages Imports
import React from 'react';
import PropTypes from 'prop-types';

// Components Imports
import Button from './Button';

class SkillsForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { formVisibility } = this.props;

    if (formVisibility === true) {
      return (
        <form>
          <div>
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
          </div>
          <div>
            <Button
              type="submit"
              buttonValue="Save"
              buttonClass="save-button"
            />
            <Button
              type="button"
              buttonValue="Cancel"
              buttonClass="cancel-button"
            />
          </div>
        </form>
      );
    }
    return null;
  }
}

// Validating Prop Types
SkillsForm.propTypes = {
  formVisibility: PropTypes.bool,
};

// Creating Default Props
SkillsForm.defaultProps = {
  formVisibility: false,
};

export default SkillsForm;
