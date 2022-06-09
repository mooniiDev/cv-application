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
    const { title } = this.props;
    return (
      <h2 className="info-title">
        <span>{title}</span>
        <span className="info-buttons">
          <FontAwesomeIcon icon={faPlus} className="fa-fw" />
          <FontAwesomeIcon icon={faPen} className="fa-fw" />
        </span>
      </h2>
    );
  }
}

InfoTitle.propTypes = {
  title: PropTypes.string,
};

InfoTitle.defaultProps = {
  title: '',
};

export default InfoTitle;
