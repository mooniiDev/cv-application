// Packages
import React from 'react';

// Font Awesome Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPen } from '@fortawesome/free-solid-svg-icons';

class PracticalExperience extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <h2 className="info-title">
          <span className="info-practical">PRACTICAL EXPERIENCE</span>
          <span className="info-buttons">
            <FontAwesomeIcon icon={faPlus} className="fa-fw" />
            <FontAwesomeIcon icon={faPen} className="fa-fw" />
          </span>
        </h2>
        <form className="hidden">
          <div>
            {/* Title */}
            <div>
              <label htmlFor="position-title">Title*</label>
              <input
                id="position-title"
                type="text"
                name="position_title"
                placeholder="Ex: Front-End Web Developer"
                required
              />
            </div>
            {/* Name */}
            <div>
              <label htmlFor="company-name">Company name*</label>
              <input
                id="company-name"
                type="text"
                name="company_name"
                placeholder="Ex: Tesonet"
                required
              />
            </div>
          </div>
          <div>
            {/* Tasks */}
            <div>
              <label htmlFor="main-tasks">Main tasks*</label>
              <input
                id="main-tasks"
                type="text"
                name="main_asks"
                placeholder="Ex: Maintaining user interface"
                required
              />
            </div>
            {/* Type */}
            <div>
              <label htmlFor="employment-type">Employment type</label>
              <select id="employment-type" type="text" name="employment_type">
                <option value="">Please select</option>
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
              <legend>Start date*</legend>
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
              <legend>End date (or expected)</legend>
              <label htmlFor="practical-end-year">Year</label>
              <input
                id="practical-end-year"
                type="number"
                name="practical_end_year"
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
          <div>
            <input type="submit" value="Save" />
            <input type="button" value="Cancel" />
          </div>
        </form>
      </div>
    );
  }
}

export default PracticalExperience;
