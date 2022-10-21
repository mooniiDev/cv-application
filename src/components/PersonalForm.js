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
    const { formVisibility } = this.props;

    if (formVisibility === true) {
      return (
        <form className="personal-form">
          {/* Personal information */}
          <div>
            {/* First name */}
            <label htmlFor="first-name">
              First name*
              <input type="text" id="first-name" name="first-name" required />
            </label>
            {/* Last name */}
            <label htmlFor="last-name" className="last-name">
              Last name*
              <input type="text" id="last-name" name="last-name" required />
            </label>
          </div>

          {/* Contacts information */}
          <div>
            {/* Phone */}
            <label htmlFor="phone">
              Phone*
              <input type="tel" id="phone" name="phone" required />
            </label>
            {/* Email */}
            <label htmlFor="email">
              Email*
              <input type="email" id="email" name="email" required />
            </label>
          </div>

          {/* Socials information */}
          <div>
            {/* LinkedIn */}
            <label htmlFor="linkedin">
              LinkedIn
              <input type="text" id="linkedin" name="linkedin" />
            </label>
            {/* GitHub */}
            <label htmlFor="github">
              GitHub
              <input type="text" id="github" name="github" />
            </label>
          </div>

          {/* About text */}
          <div>
            <label htmlFor="about">
              About
              <textarea
                id="about"
                name="about"
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
};

// Creating Default Props
PersonalForm.defaultProps = {
  formVisibility: false,
};

export default PersonalForm;
