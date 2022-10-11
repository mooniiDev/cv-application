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
    const { title, border, hover, formType, handleFormDisplay } = this.props;
    return (
      <h2 className="info-title" data-form={formType}>
        <span className={`${border} info-border`}>{title}</span>
        <span>
          {/* Button of displaying the form for adding information */}
          <Button
            buttonEvent={handleFormDisplay}
            buttonText="add"
            buttonClass={`${hover} fontAwesome-button`}
          />
          {/* Button for editing information added to the form */}
          <Button
            buttonText="edit"
            buttonClass={`${hover} fontAwesome-button`}
          />
        </span>
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
  handleFormDisplay: PropTypes.func,
};

// Creating default props
InfoTitle.defaultProps = {
  title: '❗TEXT ERROR',
  border: 'green-border',
  hover: 'green-hover',
  formType: '',
  handleFormDisplay: () => {},
};

export default InfoTitle;
