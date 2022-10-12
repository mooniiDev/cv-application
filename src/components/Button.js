// Packages imports
import React from 'react';
import PropTypes from 'prop-types';

// Font Awesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faPencil,
  faCheck,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

// Styling imports
import '../styles/Button.css';

class Button extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { buttonEvent, buttonText, buttonClass } = this.props;
    let buttonValue = buttonText;

    if (buttonValue === 'add') {
      buttonValue = (
        <FontAwesomeIcon icon={faPlus} className="fa-fw" pointerEvents="none" />
      );
    } else if (buttonValue === 'edit') {
      buttonValue = (
        <FontAwesomeIcon
          icon={faPencil}
          className="fa-fw"
          pointerEvents="none"
        />
      );
    } else if (buttonValue === 'save') {
      buttonValue = (
        <FontAwesomeIcon
          icon={faCheck}
          className="fa-fw"
          pointerEvents="none"
        />
      );
    } else if (buttonValue === 'cancel') {
      buttonValue = (
        <FontAwesomeIcon
          icon={faTimes}
          className="fa-fw"
          pointerEvents="none"
        />
      );
    }

    return (
      <button type="submit" onClick={buttonEvent} className={buttonClass}>
        {buttonValue}
      </button>
    );
  }
}

// Validating prop types
Button.propTypes = {
  buttonEvent: PropTypes.func,
  buttonText: PropTypes.string,
  buttonClass: PropTypes.string,
};

// Creating default props
Button.defaultProps = {
  buttonEvent: () => {},
  buttonText: '',
  buttonClass: '',
};

export default Button;
