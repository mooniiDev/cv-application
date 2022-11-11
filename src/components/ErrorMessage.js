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
        You can&#39;t add a skill of ... nothing. 🤭
      </p>
    );
  }
}

export default ErrorMessage;
