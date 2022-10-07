/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

// Packages Imports
import React from 'react';
import PropTypes from 'prop-types';

// Font Awesome Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPen } from '@fortawesome/free-solid-svg-icons';

// Styling Imports
import '../styles/InfoTitle.css';

class InfoTitle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { title, border, hover, formType, displayForm } = this.props;
    return (
      <h2 className="info-title" data-form={formType}>
        <span className={`${border} info-border`}>{title}</span>
        <span>
          {/* Button for adding information in the form */}
          <span onClick={displayForm} className={`${hover} icon-plus`}>
            <FontAwesomeIcon
              icon={faPlus}
              className="fa-fw"
              pointerEvents="none"
            />
          </span>
          {/* Button for editing information from the form */}
          <span className={`${hover} icon-edit`}>
            <FontAwesomeIcon icon={faPen} className="fa-fw" />
          </span>
        </span>
      </h2>
    );
  }
}

// Validating Prop Types
InfoTitle.propTypes = {
  title: PropTypes.string,
  border: PropTypes.string,
  hover: PropTypes.string,
  formType: PropTypes.string,
  displayForm: PropTypes.func,
};

// Creating Default Props
InfoTitle.defaultProps = {
  title: '❗TEXT ERROR',
  border: 'green-border',
  hover: 'green-hover',
  formType: '',
  displayForm: () => {},
};

export default InfoTitle;
