// Packages Imports
import React from 'react';
import PropTypes from 'prop-types';

// Components Imports
import InfoTitle from './InfoTitle';
import GeneralForm from './GeneralForm';

class GeneralInfo extends React.Component {
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
      handleGeneralFormDisplay,
    } = this.props;

    return (
      <div>
        <InfoTitle
          formType={formType}
          title={title}
          border={border}
          hover={hover}
          formDisplay={handleGeneralFormDisplay}
        />
        <GeneralForm formVisibility={formVisibility} />
      </div>
    );
  }
}

// Validating Prop Types
GeneralInfo.propTypes = {
  formType: PropTypes.string,
  title: PropTypes.string,
  border: PropTypes.string,
  hover: PropTypes.string,
  formVisibility: PropTypes.bool,
  handleGeneralFormDisplay: PropTypes.func,
};

// Creating Default Props
GeneralInfo.defaultProps = {
  formType: 'general',
  title: 'GENERAL INFORMATION',
  border: 'red-border',
  hover: 'red-hover',
  formVisibility: false,
  handleGeneralFormDisplay: () => {
    this.setState({
      isGeneralFormDisplayed: true,
    });
  },
};

export default GeneralInfo;
