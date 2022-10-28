// Packages imports
import React from 'react';
import PropTypes from 'prop-types';

// Components imports
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
      handlePracticalChange,
      handlePracticalAdd,
      cvInfoPractice,
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
        <PracticeForm
          formVisibility={formVisibility}
          handlePracticalChange={handlePracticalChange}
          handlePracticalAdd={handlePracticalAdd}
          cvInfoPractice={cvInfoPractice}
        />
      </div>
    );
  }
}

// Validating prop types
PracticeInfo.propTypes = {
  formType: PropTypes.string,
  title: PropTypes.string,
  border: PropTypes.string,
  hover: PropTypes.string,
  formVisibility: PropTypes.bool,
  handleFormDisplay: PropTypes.func,
  handlePracticalChange: PropTypes.func,
  handlePracticalAdd: PropTypes.func,
  cvInfoPractice: PropTypes.arrayOf(PropTypes.shape({})),
};

// Creating default props
PracticeInfo.defaultProps = {
  formType: 'practice',
  title: 'PRACTICAL EXPERIENCE',
  border: 'blue-border',
  hover: 'blue-hover',
  formVisibility: false,
  handleFormDisplay: () => {},
  handlePracticalChange: () => {},
  handlePracticalAdd: () => {},
  cvInfoPractice: [],
};

export default PracticeInfo;
