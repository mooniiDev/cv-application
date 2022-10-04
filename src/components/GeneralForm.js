// Packages Imports
import React from 'react';

class GeneralForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
    };
  }

  render() {
    const { isActive } = this.state;

    if (isActive === true) {
      return (
        <form>
          <div>
            {/* First name */}
            <div>
              <label htmlFor="first-name">First name*</label>
              <input id="first-name" type="text" name="first_name" required />
            </div>
            {/* Last name */}
            <div>
              <label htmlFor="last-name">Last name*</label>
              <input id="last-name" type="text" name="last_name" required />
            </div>
          </div>
          <div className="contacts">
            {/* Phone */}
            <div>
              <label htmlFor="phone">Phone*</label>
              <input id="phone" type="tel" name="phone" required />
            </div>
            {/* Email */}
            <div>
              <label htmlFor="email">Email*</label>
              <input id="email" type="email" name="email" required />
            </div>
          </div>
          <div className="socials">
            {/* LinkedIn */}
            <div>
              <label htmlFor="linkedin">LinkedIn</label>
              <input id="linkedin" type="text" name="linkedin" />
            </div>
            {/* GitHub */}
            <div>
              <label htmlFor="github">GitHub</label>
              <input id="github" type="text" name="github" />
            </div>
          </div>
          <div>
            <input type="submit" value="Save" />
            <input type="button" value="Cancel" />
          </div>
        </form>
      );
    }
    return null;
  }
}

export default GeneralForm;
