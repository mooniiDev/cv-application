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
              <label htmlFor="first-name">
                First name*
                <input id="first-name" type="text" name="first_name" required />
              </label>
            </div>
            {/* Last name */}
            <div>
              <label htmlFor="last-name">
                Last name*
                <input id="last-name" type="text" name="last_name" required />
              </label>
            </div>
          </div>
          <div className="contacts">
            {/* Phone */}
            <div>
              <label htmlFor="phone">
                Phone*
                <input id="phone" type="tel" name="phone" required />
              </label>
            </div>
            {/* Email */}
            <div>
              <label htmlFor="email">
                Email*
                <input id="email" type="email" name="email" required />
              </label>
            </div>
          </div>
          <div className="socials">
            {/* LinkedIn */}
            <div>
              <label htmlFor="linkedin">
                linkedin
                <input id="linkedin" type="text" name="linkedin" />
              </label>
            </div>
            {/* GitHub */}
            <div>
              <label htmlFor="github">
                GitHub
                <input id="github" type="text" name="github" />
              </label>
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
