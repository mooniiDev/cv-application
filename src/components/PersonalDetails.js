import React from 'react';

class PersonalDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <h2 className="personal-heading">PERSONAL DETAILS</h2>
        <form className="personal-details">
          <div className="personal-info-div">
            <div>
              <label htmlFor="personal-name">Name</label>
              <input
                id="personal-name"
                type="text"
                name="personal-name"
                required
              />
            </div>
            <div>
              <label htmlFor="personal-surname">Surname</label>
              <input
                id="personal-surname"
                type="text"
                name="surname"
                required
              />
            </div>
          </div>
          <div className="personal-contacts-div">
            <div>
              <label htmlFor="personal-phone">Phone</label>
              <input
                id="personal-phone"
                type="tel"
                name="personal-phone"
                required
              />
            </div>
            <div>
              <label htmlFor="personal-email">Email</label>
              <input id="personal-email" type="email" name="email" required />
            </div>
          </div>
          <div className="personal-socials-div">
            <div>
              <label htmlFor="personal-linkedin">LinkedIn</label>
              <input
                id="personal-linkedin"
                type="text"
                name="personal-linkedin"
              />
            </div>
            <div>
              <label htmlFor="personal-github">GitHub</label>
              <input id="personal-github" type="text" name="personal-github" />
            </div>
          </div>
          <input type="submit" value="Save" />
        </form>
      </div>
    );
  }
}

export default PersonalDetails;
