// Packages imports
import React from 'react';
import PropTypes from 'prop-types';

// Components imports
import PersonalPreview from './PersonalPreview';

// Styling imports
import '../styles/PreviewCV.css';

class PreviewCV extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { cvInfo } = this.props;
    const personalInfo = cvInfo.personal;

    return (
      <div className="preview-box">
        <PersonalPreview personalInfo={personalInfo} />
      </div>
    );
  }
}

// Validating prop types
PreviewCV.propTypes = {
  cvInfo: PropTypes.shape({
    personal: PropTypes.shape({}).isRequired,
  }).isRequired,
};

export default PreviewCV;
