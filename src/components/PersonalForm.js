// Packages imports
import React from 'react';
import PropTypes from 'prop-types';

// Styling imports
import '../styles/PersonalForm.css';
import '../styles/Button.css';

class PersonalForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { formVisibility, handlePersonalChange, cvInfo } = this.props;

    if (formVisibility === true) {
      return (
        <form className="personal-form">
          {/* Personal information */}
          <div>
            {/* First name */}
            <label htmlFor="first-name">
              First name*
              <input
                type="text"
                id="first-name"
                name="first-name"
                data-info="firstName"
                value={cvInfo.personal.firstName}
                onChange={handlePersonalChange}
                required
              />
            </label>
            {/* Last name */}
            <label htmlFor="last-name" className="last-name">
              Last name*
              <input
                type="text"
                id="last-name"
                name="last-name"
                data-info="lastName"
                value={cvInfo.personal.lastName}
                onChange={handlePersonalChange}
                required
              />
            </label>
          </div>

          {/* Contacts information */}
          <div>
            {/* Phone */}
            <label htmlFor="phone">
              Phone*
              <input
                type="text"
                id="phone"
                name="phone"
                data-info="phone"
                value={cvInfo.personal.phone}
                onChange={handlePersonalChange}
                required
              />
            </label>
            {/* Email */}
            <label htmlFor="email">
              Email*
              <input
                type="email"
                id="email"
                name="email"
                data-info="email"
                value={cvInfo.personal.email}
                onChange={handlePersonalChange}
                required
              />
            </label>
          </div>

          {/* Socials information */}
          <div>
            {/* LinkedIn */}
            <label htmlFor="linkedin">
              LinkedIn
              <input
                type="text"
                id="linkedin"
                name="linkedin"
                data-info="linkedin"
                value={cvInfo.personal.linkedin}
                onChange={handlePersonalChange}
              />
            </label>
            {/* GitHub */}
            <label htmlFor="github">
              GitHub
              <input
                type="text"
                id="github"
                name="github"
                data-info="github"
                value={cvInfo.personal.github}
                onChange={handlePersonalChange}
              />
            </label>
          </div>

          {/* About text */}
          <div>
            <label htmlFor="about">
              About
              <textarea
                id="about"
                name="about"
                data-info="about"
                value={cvInfo.personal.about}
                onChange={handlePersonalChange}
                placeholder="Ex: I create magic through my mind, my heart and my keyboard. ✨"
              />
            </label>
          </div>
        </form>
      );
    }
    return null;
  }
}

// Validating Prop Types
PersonalForm.propTypes = {
  formVisibility: PropTypes.bool,
  handlePersonalChange: PropTypes.func.isRequired,
  cvInfo: PropTypes.shape({
    personal: PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      phone: PropTypes.string,
      email: PropTypes.string,
      linkedin: PropTypes.string,
      github: PropTypes.string,
      about: PropTypes.string,
    }),
  }).isRequired,
};

// Creating Default Props
PersonalForm.defaultProps = {
  formVisibility: false,
};

export default PersonalForm;
