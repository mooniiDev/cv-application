// Packages Imports
import React from 'react';
import PropTypes from 'prop-types';

// Components Imports
import Button from './Button';

class EducationForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { formVisibility } = this.props;

    if (formVisibility === true) {
      return (
        <form>
          <div>
            {/* Name */}
            <div>
              <label htmlFor="school-name">
                School*
                <input
                  id="school-name"
                  type="text"
                  name="school_name"
                  placeholder="Ex: Harvard University"
                  required
                />
              </label>
            </div>
            {/* Title */}
            <div>
              <label htmlFor="study-title">
                Field of study*
                <input
                  id="study-title"
                  type="text"
                  name="study_title"
                  placeholder="Ex: Software Engineering"
                  required
                />
              </label>
            </div>
          </div>
          <div>
            {/* Degree */}
            <div>
              <label htmlFor="educational-degree">
                Degree
                <input
                  id="educational-degree"
                  type="text"
                  name="educational_degree"
                  placeholder="Ex: Bachelor’s"
                />
              </label>
            </div>
            {/* Grade */}
            <div>
              <label htmlFor="educational-grade">
                Grade
                <input
                  id="educational-grade"
                  type="text"
                  name="educational_grade"
                />
              </label>
            </div>
          </div>
          <div>
            {/* Start date */}
            <fieldset>
              <legend>Start date*</legend>
              <label htmlFor="educational-start-year">
                Year
                <input
                  id="educational-start-year"
                  type="number"
                  name="educational_start_year"
                  required
                />
              </label>
              <label htmlFor="educational-start-month">
                Month
                <select
                  id="educational-start-month"
                  type="text"
                  name="educational_start_month"
                >
                  <option value="month">Month</option>
                  <option value="january">January</option>
                </select>
              </label>
            </fieldset>
            {/* End date */}
            <fieldset>
              <legend>End date (or expected)</legend>
              <label htmlFor="educational-end-year">
                Year
                <input
                  id="educational-end-year"
                  type="number"
                  name="educational_end_year"
                />
              </label>
              <label htmlFor="educational-end-month">
                Month
                <select
                  id="educational-end-month"
                  type="text"
                  name="educational_end_month"
                >
                  <option value="month">Month</option>
                  <option value="january">January</option>
                </select>
              </label>
            </fieldset>
          </div>
          <div>
            <Button
              type="submit"
              buttonValue="Save"
              buttonClass="save-button"
            />
            <Button
              type="button"
              buttonValue="Cancel"
              buttonClass="cancel-button"
            />
          </div>
        </form>
      );
    }
    return null;
  }
}

// Validating Prop Types
EducationForm.propTypes = {
  formVisibility: PropTypes.bool,
};

// Creating Default Props
EducationForm.defaultProps = {
  formVisibility: false,
};

export default EducationForm;
