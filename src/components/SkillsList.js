// Packages imports
import React from 'react';
import PropTypes from 'prop-types';

// Components imports
import Button from './Button';

// Styling imports
import '../styles/SkillsList.css';
import '../styles/Button.css';

class SkillsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { skills, handleSkillDelete } = this.props;

    return (
      <div className="skills-list">
        {skills.map((skill) => {
          return (
            <div key={skill.id} data-id={skill.id} className="skill">
              <p key={skill.id} className="skill-text">
                {skill.text}
              </p>
              <Button
                type="button"
                buttonEvent={handleSkillDelete}
                buttonText="delete"
                buttonClass="delete-skill-button"
              />
            </div>
          );
        })}
      </div>
    );
  }
}

// Validating prop types
SkillsList.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.shape({})),
  handleSkillDelete: PropTypes.func,
};

// // Creating default props
SkillsList.defaultProps = {
  skills: [],
  handleSkillDelete: () => {},
};

export default SkillsList;
