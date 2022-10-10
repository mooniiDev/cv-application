// Packages Imports
import React from 'react';
import PropTypes from 'prop-types';

// Styling Imports
import '../styles/Button.css';

class Button extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { buttonValue, buttonClass } = this.props;

    return <input type="button" value={buttonValue} className={buttonClass} />;
  }
}

// Validating Prop Types
Button.propTypes = {
  buttonValue: PropTypes.string,
  buttonClass: PropTypes.string,
};

// Creating Default Props
Button.defaultProps = {
  buttonValue: '❗TEXT ERROR',
  buttonClass: 'preview-button',
};

export default Button;
