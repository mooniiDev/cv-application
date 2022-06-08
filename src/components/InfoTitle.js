// Packages Imports
import React from 'react';

// Font Awesome Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPen } from '@fortawesome/free-solid-svg-icons';

class InfoTitle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <h2 className="info-title">
        <span />
        <span className="info-buttons">
          <FontAwesomeIcon icon={faPlus} className="fa-fw" />
          <FontAwesomeIcon icon={faPen} className="fa-fw" />
        </span>
      </h2>
    );
  }
}

export default InfoTitle;
