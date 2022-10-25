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
    const { cvInfo } = this.props;
    return (
      <div className="personal-preview-box">
        {/* Person name and surname */}
        <h2 className="person-name">
          {cvInfo.personal.firstName.toUpperCase()}{' '}
          {cvInfo.personal.lastName.toUpperCase()}
        </h2>

        {/* Person contacts */}
        <div className="person-contacts">
          {/* Person phone and email */}
          <div>
            <p>
              <span>Phone:</span> &nbsp;{cvInfo.personal.phone}
            </p>
            <p>
              <span>Email:</span> &nbsp;{cvInfo.personal.mail}
            </p>
          </div>

          {/* Person socials */}
          <div>
            <p>
              <span>LinkedIn:</span> &nbsp;{cvInfo.personal.linkedin}
            </p>
            <p>
              <span>GitHub:</span> &nbsp;{cvInfo.personal.github}
            </p>
          </div>
        </div>

        {/* Person 'about' information */}
        <p className="person-about">{cvInfo.personal.about}</p>
      </div>
    );
  }
}

// Validating prop types
PersonalPreview.propTypes = {
  cvInfo: PropTypes.shape({
    personal: PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      phone: PropTypes.string,
      mail: PropTypes.string,
      linkedin: PropTypes.string,
      github: PropTypes.string,
      about: PropTypes.string,
    }),
  }).isRequired,
};

export default PersonalPreview;
