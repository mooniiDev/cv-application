// Packages imports
import React from 'react';
import PropTypes from 'prop-types';

// Components imports
import PersonalPreview from './PersonalPreview';

class PreviewCV extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { cvInfo } = this.props;
    return <PersonalPreview cvInfo={cvInfo} />;
  }
}

// Validating prop types
PreviewCV.propTypes = {
  cvInfo: PropTypes.shape({}).isRequired,
};

export default PreviewCV;
