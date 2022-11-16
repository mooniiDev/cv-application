// Packages imports
import React from 'react';
import PropTypes from 'prop-types';

// Styling imports
import '../styles/PracticePreview.css';

class PracticePreview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { practiceInfo } = this.props;

    return (
      <div className="practice-preview">
        <h3 className="preview-info-heading">PRACTICE</h3>
        {practiceInfo.map((practice) => {
          return (
            <div key={practice.id}>
              <p className="practice-title">
                {practice.title.toLowerCase()}{' '}
                <span className="practice-company">
                  — {practice.company.toLowerCase()}
                </span>
              </p>

              <p className="preview-date">
                {practice.startMonth} {practice.startYear} - {practice.endMonth}{' '}
                {/* Do not show end year if this is the current position */}
                {practice.endMonth === 'Present' ? null : practice.endYear}
              </p>

              <p className="practice-task">
                <span>Main task:</span> {practice.task}
              </p>

              <p className="practice-type">
                <span>Employment type:</span> {practice.type}
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}

// Validating prop types
PracticePreview.propTypes = {
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
    })
  ),
};

// Creating default props
PracticePreview.defaultProps = {
  practiceInfo: {
    title: '',
    company: '',
    task: '',
    type: '',
    startYear: '',
    startMonth: '',
    endYear: '',
    endMonth: '',
  },
};

export default PracticePreview;
