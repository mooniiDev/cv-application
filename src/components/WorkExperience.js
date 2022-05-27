import React from 'react';

class WorkExperience extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <form>
          <h2>WORK EXPERIENCE</h2>
          <div className="work-experience">
            <div>
              <label htmlFor="work-company">Company</label>
              <input
                id="work-company"
                type="text"
                name="work-company"
                required
              />
            </div>
          </div>
          <input type="submit" value="Save" />
        </form>
      </div>
    );
  }
}

export default WorkExperience;
