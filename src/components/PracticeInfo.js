// Packages Imports
import React from 'react';
import PropTypes from 'prop-types';

// Components Imports
import InfoTitle from './InfoTitle';
import PracticeForm from './PracticeForm';

class PracticeInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {
      formType,
      title,
      border,
      hover,
      formVisibility,
      handleFormDisplay,
    } = this.props;

    return (
      <div>
        <InfoTitle
          formType={formType}
          title={title}
          border={border}
          hover={hover}
          formVisibility={formVisibility}
          handleFormDisplay={handleFormDisplay}
        />
        <PracticeForm formVisibility={formVisibility} />
      </div>
    );
  }
}

// Validating Prop Types
PracticeInfo.propTypes = {
  formType: PropTypes.string,
  title: PropTypes.string,
  border: PropTypes.string,
  hover: PropTypes.string,
  formVisibility: PropTypes.bool,
  handleFormDisplay: PropTypes.func.isRequired,
};

// Creating Default Props
PracticeInfo.defaultProps = {
  formType: 'practice',
  title: 'PRACTICAL EXPERIENCE',
  border: 'blue-border',
  hover: 'blue-hover',
  formVisibility: false,
};

export default PracticeInfo;
