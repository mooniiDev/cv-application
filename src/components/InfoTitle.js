// Packages imports
import React from 'react';
import PropTypes from 'prop-types';

// Components imports
import Button from './Button';

// Styling imports
import '../styles/InfoTitle.css';

class InfoTitle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {
      title,
      border,
      hover,
      formType,
      handleFormDisplay,
      formVisibility,
    } = this.props;

    return (
      <h2 className="info-title" data-form={formType}>
        <span className={`${border} info-border`}>{title}</span>
        {formVisibility === false ? (
          <span>
            {/* Button for displaying the form */}
            <Button
              type="button"
              buttonEvent={handleFormDisplay}
              buttonText="show"
              buttonClass={`${hover} fontAwesome-button`}
            />
          </span>
        ) : (
          <span>
            {/* Button for hiding the form */}
            <Button
              type="button"
              buttonEvent={handleFormDisplay}
              buttonText="hide"
              buttonClass={`${hover} fontAwesome-button`}
            />
          </span>
        )}
      </h2>
    );
  }
}

// Validating prop types
InfoTitle.propTypes = {
  title: PropTypes.string,
  border: PropTypes.string,
  hover: PropTypes.string,
  formType: PropTypes.string,
  handleFormDisplay: PropTypes.func.isRequired,
  formVisibility: PropTypes.bool,
};

// Creating default props
InfoTitle.defaultProps = {
  title: '❗TEXT ERROR',
  border: 'green-border',
  hover: 'green-hover',
  formType: '',
  formVisibility: false,
};

export default InfoTitle;
