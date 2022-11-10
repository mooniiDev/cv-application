// Packages imports
import React from 'react';
import PropTypes from 'prop-types';

class SkillsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { skills } = this.props;

    return (
      <div>
        {skills.map((skill) => {
          return (
            <p key={skill.id} className="skill">
              {skill.text}
            </p>
          );
        })}
      </div>
    );
  }
}

// Validating prop types
SkillsList.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.shape({})),
};

// // Creating default props
SkillsList.defaultProps = {
  skills: [],
};

export default SkillsList;
