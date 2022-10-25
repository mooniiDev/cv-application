// Packages imports
import React from 'react';
import PropTypes from 'prop-types';

class PracticePreview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return <div className="practice-preview-box" />;
  }
}

// Validating prop types
PracticePreview.propTypes = {
  practiceInfo: PropTypes.shape({
    title: PropTypes.string,
    company: PropTypes.string,
    task: PropTypes.string,
    type: PropTypes.string,
    startYear: PropTypes.string,
    startMonth: PropTypes.string,
    endYear: PropTypes.string,
    endMonth: PropTypes.string,
  }).isRequired,
};

export default PracticePreview;
