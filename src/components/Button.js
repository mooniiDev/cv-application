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
    const { text } = this.props;
    return <input value={text} type="button" className="preview-button" />;
  }
}

// Validating Prop Types
Button.propTypes = {
  text: PropTypes.string,
};

// Creating Default Props
Button.defaultProps = {
  text: '❗Text Error',
};

export default Button;
