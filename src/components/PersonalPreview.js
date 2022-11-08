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
        {/* Name and surname of the person */}
        <h2 className="person-name">
          {personalInfo.firstName.toUpperCase()}{' '}
          {personalInfo.lastName.toUpperCase()}
        </h2>

        {/* Contacts of the person */}
        <div className="person-contacts">
          {/* Phone and email of the person */}
          <div>
            <p>
              <span>Phone:</span> &nbsp;{personalInfo.phone}
            </p>
            <p>
              <span>Email:</span> &nbsp;{personalInfo.email}
            </p>
          </div>

          {/* Socials of the person */}
          <div>
            <p>
              <span>LinkedIn:</span> &nbsp;{personalInfo.linkedin}
            </p>
            <p>
              <span>GitHub:</span> &nbsp;{personalInfo.github}
            </p>
          </div>
        </div>

        {/* 'About' information of the person */}
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
  }),
};

// Creating default props
PersonalPreview.defaultProps = {
  personalInfo: {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    linkedin: '',
    github: '',
    about: '',
  },
};

export default PersonalPreview;
