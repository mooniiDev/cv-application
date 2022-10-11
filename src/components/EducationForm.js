// Packages imports
import React from 'react';
import PropTypes from 'prop-types';

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
                  name="school-name"
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
                  name="study-title"
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
                  name="educational-degree"
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
                  name="educational-grade"
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
                  name="educational-start-year"
                  required
                />
              </label>
              <label htmlFor="educational-start-month">
                Month
                <select
                  id="educational-start-month"
                  type="text"
                  name="educational-start-month"
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
                  name="educational-end-year"
                />
              </label>
              <label htmlFor="educational-end-month">
                Month
                <select
                  id="educational-end-month"
                  type="text"
                  name="educational-end-month"
                >
                  <option value="month">Month</option>
                  <option value="january">January</option>
                </select>
              </label>
            </fieldset>
          </div>
        </form>
      );
    }
    return null;
  }
}

// Validating prop types
EducationForm.propTypes = {
  formVisibility: PropTypes.bool,
};

// Creating default props
EducationForm.defaultProps = {
  formVisibility: false,
};

export default EducationForm;
