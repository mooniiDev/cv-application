// Packages imports
import React from 'react';

// Styling imports
import '../styles/ErrorMessage.css';

class ErrorMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <p className="error-message">
        Oops, add a skill of ... <i>something</i> 🤭
      </p>
    );
  }
}

export default ErrorMessage;
