// Packages
import React from 'react';

// Font Awesome Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPen } from '@fortawesome/free-solid-svg-icons';

class EducationalExperience extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <h2 className="info-title">
          <span>EDUCATIONAL EXPERIENCE</span>
          <span className="info-buttons">
            <FontAwesomeIcon icon={faPlus} className="fa-fw" />
            <FontAwesomeIcon icon={faPen} className="fa-fw" />
          </span>
        </h2>
        <form className="hidden">
          <div>
            {/* Name */}
            <div>
              <label htmlFor="school-name">School*</label>
              <input
                id="school-name"
                type="text"
                name="school_name"
                placeholder="Ex: Harvard University"
                required
              />
            </div>
            {/* Title */}
            <div>
              <label htmlFor="study-title">Field of study*</label>
              <input
                id="study-title"
                type="text"
                name="study_title"
                placeholder="Ex: Software Engineering"
                required
              />
            </div>
          </div>
          <div>
            {/* Degree */}
            <div>
              <label htmlFor="educational-degree">Degree</label>
              <input
                id="educational-degree"
                type="text"
                name="educational_degree"
                placeholder="Ex: Bachelor’s"
              />
            </div>
            {/* Grade */}
            <div>
              <label htmlFor="educational-grade">Grade</label>
              <input
                id="educational-grade"
                type="text"
                name="educational_grade"
              />
            </div>
          </div>
          <div>
            {/* Start date */}
            <fieldset>
              <legend>Start date*</legend>
              <label htmlFor="educational-start-year">Year</label>
              <input
                id="educational-start-year"
                type="number"
                name="educational_start_year"
                required
              />
              <label htmlFor="educational-start-month">Month</label>
              <select
                id="educational-start-month"
                type="text"
                name="educational_start_month"
              >
                <option value="month">Month</option>
                <option value="january">January</option>
              </select>
            </fieldset>
            {/* End date */}
            <fieldset>
              <legend>End date (or expected)</legend>
              <label htmlFor="educational-end-year">Year</label>
              <input
                id="educational-end-year"
                type="number"
                name="educational_end_year"
              />
              <label htmlFor="educational-end-month">Month</label>
              <select
                id="educational-end-month"
                type="text"
                name="educational_end_month"
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

export default EducationalExperience;
