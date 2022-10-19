// Packages imports
import React from 'react';
import PropTypes from 'prop-types';

// Components imports
import Button from './Button';

// Styling imports
import '../styles/EducationForm.css';

class EducationForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { formVisibility } = this.props;

    if (formVisibility === true) {
      return (
        <form className="education-form">
          {/* School and study information */}
          <div>
            {/* School name */}
            <label htmlFor="school-name">
              School*
              <input
                type="text"
                id="school-name"
                name="school-name"
                placeholder="Ex: Harvard University"
                required
              />
            </label>
            {/* Field of study */}
            <label htmlFor="study-title">
              Field of study*
              <input
                type="text"
                id="study-title"
                name="study-title"
                placeholder="Ex: Software Engineering"
                required
              />
            </label>
          </div>

          {/* Degree and grade information */}
          <div>
            {/* Degree */}
            <label htmlFor="education-degree">
              Degree
              <input
                type="text"
                id="education-degree"
                name="education-degree"
                placeholder="Ex: Bachelor’s"
              />
            </label>
            {/* Grade */}
            <label htmlFor="education-grade">
              Grade
              <input type="text" id="education-grade" name="education-grade" />
            </label>
          </div>

          {/* Education start date */}
          <fieldset>
            <legend>Start date*</legend>
            <label htmlFor="education-start-year">
              Year
              <input
                type="text"
                id="education-start-year"
                name="education-start-year"
                required
              />
            </label>
            <label
              htmlFor="education-start-month"
              className="education-start-month"
            >
              Month
              <select
                type="text"
                id="education-start-month"
                name="education-start-month"
              >
                <option value="month">Please select</option>
                <option value="january">January</option>
                <option value="february">February</option>
                <option value="march">March</option>
                <option value="april">April</option>
                <option value="may">May</option>
                <option value="june">June</option>
                <option value="july">July</option>
                <option value="august">August</option>
                <option value="september">September</option>
                <option value="october">October</option>
                <option value="november">November</option>
                <option value="december">December</option>
              </select>
            </label>
          </fieldset>

          {/* Education end date */}
          <fieldset>
            <legend>End date (or expected)</legend>
            <label htmlFor="education-end-year">
              Year
              <input
                type="text"
                id="education-end-year"
                name="education-end-year"
              />
            </label>
            <label
              htmlFor="education-end-month"
              className="education-end-month"
            >
              Month
              <select
                type="text"
                id="education-end-month"
                name="education-end-month"
              >
                <option value="month">Please select</option>
                <option value="january">January</option>
                <option value="february">February</option>
                <option value="march">March</option>
                <option value="april">April</option>
                <option value="may">May</option>
                <option value="june">June</option>
                <option value="july">July</option>
                <option value="august">August</option>
                <option value="september">September</option>
                <option value="october">October</option>
                <option value="november">November</option>
                <option value="december">December</option>
              </select>
            </label>
          </fieldset>

          {/* Button for deleting info */}
          <Button
            type="button"
            buttonText="delete"
            buttonClass="delete-button fontAwesome-button"
          />

          {/* Button for adding more info */}
          <Button
            type="button"
            buttonText="add"
            buttonClass="add-more-button fontAwesome-button"
          />
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
