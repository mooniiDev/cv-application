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
    const { buttonValue } = this.props;

    return (
      <input value={buttonValue} type="button" className="preview-button" />
    );
  }
}

// Validating Prop Types
Button.propTypes = {
  buttonValue: PropTypes.string,
};

// Creating Default Props
Button.defaultProps = {
  buttonValue: '❗Text Error',
};

export default Button;
