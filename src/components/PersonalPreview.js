// Packages imports
import React from 'react';
import PropTypes from 'prop-types';

// Styling imports
import '../styles/PersonalPreview.css';

class PersonalPreview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { cvInfo } = this.props;
    return (
      <div className="personal-preview-box">
        <h2 className="person-name">
          {cvInfo.personal.firstName.toUpperCase()}{' '}
          {cvInfo.personal.lastName.toUpperCase()}
        </h2>
      </div>
    );
  }
}

// Validating prop types
PersonalPreview.propTypes = {
  cvInfo: PropTypes.shape({
    personal: PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
    }),
  }).isRequired,
};

export default PersonalPreview;
