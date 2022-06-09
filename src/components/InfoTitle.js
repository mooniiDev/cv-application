// Packages Imports
import React from 'react';
import PropTypes from 'prop-types';

// Font Awesome Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPen } from '@fortawesome/free-solid-svg-icons';

class InfoTitle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { title, border, hover } = this.props;
    return (
      <h2 className="info-title">
        <span className={border}>{title}</span>
        <span className="info-buttons">
          <FontAwesomeIcon icon={faPlus} className={`${hover} fa-fw`} />
          <FontAwesomeIcon icon={faPen} className={`${hover} fa-fw`} />
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
};

// Creating Default Props
InfoTitle.defaultProps = {
  title: '❗Error in the title text.',
  border: 'green-border',
  hover: 'green-hover',
};

export default InfoTitle;
