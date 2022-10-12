// Packages imports
import React from 'react';
import PropTypes from 'prop-types';

// Styling imports
import '../styles/GeneralForm.css';

class GeneralForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { formVisibility } = this.props;

    if (formVisibility === true) {
      return (
        <form className="general-form">
          {/* General info */}
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

          {/* Contacts info */}
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

          {/* Socials info */}
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
        </form>
      );
    }
    return null;
  }
}

// Validating Prop Types
GeneralForm.propTypes = {
  formVisibility: PropTypes.bool,
};

// Creating Default Props
GeneralForm.defaultProps = {
  formVisibility: false,
};

export default GeneralForm;
