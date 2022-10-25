// Packages imports
import React from 'react';
import PropTypes from 'prop-types';

// Styling imports
import '../styles/PersonalPreview.css';

class PersonalPreview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { personalInfo } = this.props;

    return (
      <div className="personal-preview-box">
        {/* Person name and surname */}
        <h2 className="person-name">
          {personalInfo.firstName.toUpperCase()}{' '}
          {personalInfo.lastName.toUpperCase()}
        </h2>

        {/* Person contacts */}
        <div className="person-contacts">
          {/* Person phone and email */}
          <div>
            <p>
              <span>Phone:</span> &nbsp;{personalInfo.phone}
            </p>
            <p>
              <span>Email:</span> &nbsp;{personalInfo.email}
            </p>
          </div>

          {/* Person socials */}
          <div>
            <p>
              <span>LinkedIn:</span> &nbsp;{personalInfo.linkedin}
            </p>
            <p>
              <span>GitHub:</span> &nbsp;{personalInfo.github}
            </p>
          </div>
        </div>

        {/* Person 'about' information */}
        <p className="person-about">{personalInfo.about}</p>
      </div>
    );
  }
}

// Validating prop types
PersonalPreview.propTypes = {
  personalInfo: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
    linkedin: PropTypes.string,
    github: PropTypes.string,
    about: PropTypes.string,
  }).isRequired,
};

export default PersonalPreview;
