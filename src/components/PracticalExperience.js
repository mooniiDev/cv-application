import React from 'react';

class PracticalExperience extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <h2>PRACTICAL EXPERIENCE</h2>
        <form>
          <div>
            {/* Title */}
            <div>
              <label htmlFor="position-title">Title*</label>
              <input
                id="position-title"
                type="text"
                name="position_title"
                required
              />
            </div>
            {/* Name */}
            <div>
              <label htmlFor="company-name">Company Name*</label>
              <input
                id="company-name"
                type="text"
                name="company_name"
                required
              />
            </div>
          </div>
          <div>
            {/* Tasks */}
            <div>
              <label htmlFor="main-tasks">Main Tasks*</label>
              <input id="main-tasks" type="text" name="main_asks" required />
            </div>
            {/* Type */}
            <div>
              <label htmlFor="employment-type">Employment Type</label>
              <select id="employment-type" type="text" name="employment_type">
                <option value="">Please Select</option>
                <option value="full-time">Full-time</option>
              </select>
            </div>
          </div>
          {/* Checkbox for current role */}
          <div>
            <input type="checkbox" id="current-checkbox" name="checkbox" />
            <label htmlFor="current-checkbox">
              I am currently working in this role
            </label>
          </div>
          <div>
            {/* Start date */}
            <fieldset>
              <legend>Start Date*</legend>
              <label htmlFor="practical-start-year">Year</label>
              <input
                id="practical-start-year"
                type="number"
                name="practical_start_year"
                required
              />
              <label htmlFor="practical-start-month">Month</label>
              <select
                id="practical-start-month"
                type="text"
                name="practical_start_month"
              >
                <option value="month">Month</option>
                <option value="january">January</option>
              </select>
            </fieldset>
            {/* End date */}
            <fieldset>
              <legend>End Date*</legend>
              <label htmlFor="practical-end-year">Year</label>
              <input
                id="practical-end-year"
                type="number"
                name="practical_end_year"
                required
              />
              <label htmlFor="practical-end-month">Month</label>
              <select
                id="practical-end-month"
                type="text"
                name="practical_end_month"
              >
                <option value="month">Month</option>
                <option value="january">January</option>
              </select>
            </fieldset>
          </div>
          <input type="submit" value="Save" />
        </form>
      </div>
    );
  }
}

export default PracticalExperience;
