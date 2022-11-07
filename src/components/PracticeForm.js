// Packages imports
import React from 'react';
import PropTypes from 'prop-types';

// Components imports
import Button from './Button';

// Styling imports
import '../styles/PracticeForm.css';

class PracticeForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {
      formVisibility,
      handlePracticalChange,
      handlePracticalAdd,
      practiceInfo,
    } = this.props;

    if (formVisibility) {
      return practiceInfo.map((practice, index) => {
        return (
          <form key={practice.id} className="practice-form">
            {/* Company information */}
            <div>
              {/* Position title */}
              <label htmlFor="position-title">
                Title*
                <input
                  type="text"
                  id="position-title"
                  name="position-title"
                  data-info="title"
                  data-key={practice.id}
                  defaultValue={practice.title}
                  onChange={handlePracticalChange}
                  placeholder="Ex: Front-End Web Developer"
                  required
                />
              </label>

              {/* Company name */}
              <label htmlFor="company-name">
                Company name*
                <input
                  type="text"
                  id="company-name"
                  name="company-name"
                  data-info="company"
                  data-key={practice.id}
                  defaultValue={practice.company}
                  onChange={handlePracticalChange}
                  placeholder="Ex: Tesonet"
                  required
                />
              </label>
            </div>
            {/* Main task and employment type */}
            <div className="task-and-type">
              {/* Main task */}
              <label htmlFor="main-task">
                Main task*
                <input
                  type="text"
                  id="main-task"
                  name="main-task"
                  data-info="task"
                  data-key={practice.id}
                  defaultValue={practice.task}
                  onChange={handlePracticalChange}
                  placeholder="Ex: Maintaining user interface"
                  required
                />
              </label>
              {/* Employment type */}
              <label htmlFor="employment-type" className="employment-label">
                Employment type
                <select
                  type="text"
                  id="employment-type"
                  name="employment-type"
                  data-info="type"
                  data-key={practice.id}
                  defaultValue={practice.type}
                  onChange={handlePracticalChange}
                >
                  <option value="type">Please select</option>
                  <option value="full-time">Full-time</option>
                  <option value="part-time">Part-time</option>
                  <option value="contract">Contract</option>
                  <option value="temporary">Temporary</option>
                  <option value="internship">Internship</option>
                  <option value="other">Other</option>
                </select>
              </label>
            </div>
            {/* Practice start date */}
            <fieldset>
              <legend>Start date*</legend>
              <label htmlFor="practice-start-year">
                Year
                <input
                  type="text"
                  id="practice-start-year"
                  name="practice-start-year"
                  data-info="startYear"
                  data-key={practice.id}
                  defaultValue={practice.startYear}
                  onChange={handlePracticalChange}
                  required
                />
              </label>
              <label
                htmlFor="practice-start-month"
                className="practice-start-month"
              >
                Month
                <select
                  type="text"
                  id="practice-start-month"
                  name="practice-start-month"
                  data-info="startMonth"
                  data-key={practice.id}
                  defaultValue={practice.startMonth}
                  onChange={handlePracticalChange}
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
            {/* Practice end date */}
            <fieldset>
              <legend>End date (or expected)</legend>
              <label htmlFor="practice-end-year">
                Year
                <input
                  type="text"
                  id="practice-end-year"
                  name="practice-end-year"
                  data-info="endYear"
                  data-key={practice.id}
                  defaultValue={practice.endYear}
                  onChange={handlePracticalChange}
                />
              </label>
              <label
                htmlFor="practice-end-month"
                className="practice-end-month"
              >
                Month
                <select
                  type="text"
                  id="practice-end-month"
                  name="practice-end-month"
                  data-info="endMonth"
                  data-key={practice.id}
                  defaultValue={practice.endMonth}
                  onChange={handlePracticalChange}
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
              buttonText="delete"
              buttonClass="delete-button fontAwesome-button"
            />

            {index === practiceInfo.length - 1 ? (
              // Button for adding more info
              <Button
                buttonEvent={handlePracticalAdd}
                buttonText="add"
                buttonClass="add-button fontAwesome-button"
              />
            ) : null}
          </form>
        );
      });
    }
    return null;
  }
}

// Validating prop types
PracticeForm.propTypes = {
  formVisibility: PropTypes.bool,
  handlePracticalChange: PropTypes.func,
  handlePracticalAdd: PropTypes.func,
  practiceInfo: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      company: PropTypes.string,
      task: PropTypes.string,
      type: PropTypes.string,
      startYear: PropTypes.string,
      startMonth: PropTypes.string,
      endYear: PropTypes.string,
      endMonth: PropTypes.string,
      id: PropTypes.string,
    })
  ),
};

// Creating default props
PracticeForm.defaultProps = {
  formVisibility: false,
  handlePracticalChange: () => {},
  handlePracticalAdd: () => {},
  practiceInfo: {},
};

export default PracticeForm;
