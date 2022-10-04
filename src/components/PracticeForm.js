// Packages Imports
import React from 'react';

class PracticeForm extends React.Component {
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
            {/* Title */}
            <div>
              <label htmlFor="position-title">
                Title*
                <input
                  id="position-title"
                  type="text"
                  name="position_title"
                  placeholder="Ex: Front-End Web Developer"
                  required
                />
              </label>
            </div>
            {/* Name */}
            <div>
              <label htmlFor="company-name">
                Company name*
                <input
                  id="company-name"
                  type="text"
                  name="company_name"
                  placeholder="Ex: Tesonet"
                  required
                />
              </label>
            </div>
          </div>
          <div>
            {/* Tasks */}
            <div>
              <label htmlFor="main-tasks">
                Main tasks*
                <input
                  id="main-tasks"
                  type="text"
                  name="main_asks"
                  placeholder="Ex: Maintaining user interface"
                  required
                />
              </label>
            </div>
            {/* Type */}
            <div>
              <label htmlFor="employment-type">
                Employment type
                <select id="employment-type" type="text" name="employment_type">
                  <option value="">Please select</option>
                  <option value="full-time">Full-time</option>
                </select>
              </label>
            </div>
          </div>
          {/* Checkbox for current role */}
          <div>
            <label htmlFor="current-checkbox">
              <input type="checkbox" id="current-checkbox" name="checkbox" />I
              am currently working in this role
            </label>
          </div>
          <div>
            {/* Start date */}
            <fieldset>
              <legend>Start date*</legend>
              <label htmlFor="practical-start-year">
                Year
                <input
                  id="practical-start-year"
                  type="number"
                  name="practical_start_year"
                  required
                />
              </label>
              <label htmlFor="practical-start-month">
                Month
                <select
                  id="practical-start-month"
                  type="text"
                  name="practical_start_month"
                >
                  <option value="month">Month</option>
                  <option value="january">January</option>
                </select>
              </label>
            </fieldset>
            {/* End date */}
            <fieldset>
              <legend>End date (or expected)</legend>
              <label htmlFor="practical-end-year">
                Year
                <input
                  id="practical-end-year"
                  type="number"
                  name="practical_end_year"
                />
              </label>
              <label htmlFor="practical-end-month">
                Month
                <select
                  id="practical-end-month"
                  type="text"
                  name="practical_end_month"
                >
                  <option value="month">Month</option>
                  <option value="january">January</option>
                </select>
              </label>
            </fieldset>
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

export default PracticeForm;
