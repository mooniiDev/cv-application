// Packages imports
import React from 'react';
import PropTypes from 'prop-types';

class PracticalPreview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return <div />;
  }
}

// Validating prop types
PracticalPreview.propTypes = {
  practicalInfo: PropTypes.shape({}).isRequired,
};

export default PracticalPreview;
