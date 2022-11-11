// Packages imports
import React from 'react';

class ErrorMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return <p>You can&#39;t add a skill of ... nothing. 🤭</p>;
  }
}

export default ErrorMessage;
