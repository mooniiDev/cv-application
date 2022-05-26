import React from 'react';

class PersonalDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="PersonalDetails">
        <h2>PERSONAL DETAILS</h2>
        <form>
          <div className="person-div">
            <div className="name">
              <label htmlFor="name">Name</label>
              <input id="name" type="text" required />
            </div>
            <div className="surname">
              <label htmlFor="surname">Surname</label>
              <input id="surname" type="text" required />
            </div>
          </div>
          <div className="contacts-div">
            <div className="phone">
              <label htmlFor="phone">Phone</label>
              <input id="phone" type="text" />
            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input id="email" type="text" required />
            </div>
          </div>
          <div className="socials-div">
            <div className="linkedin">
              <label htmlFor="linkedin">LinkedIn</label>
              <input id="linkedin" type="text" />
            </div>
            <div className="github">
              <label htmlFor="github">GitHub</label>
              <input id="github" type="text" />
            </div>
          </div>
          <input type="submit" value="Save" />
        </form>
      </div>
    );
  }
}

export default PersonalDetails;
