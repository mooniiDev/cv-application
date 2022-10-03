// Packages Imports
import React from 'react';

// Styling Imports
import '../styles/Footer.css';

class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <footer id="Footer">
        <p>
          ☽ Crafted by&nbsp;
          <a
            href="https://github.com/mooniiDev"
            target="_blank"
            className="footer-link"
            rel="noreferrer"
          >
            mooniiDev
          </a>
          &nbsp;|&nbsp;
          <a
            href="https://github.com/mooniiDev/cv-application"
            target="_blank"
            className="footer-link"
            rel="noreferrer"
          >
            Source code
          </a>
          &nbsp;☾
        </p>
      </footer>
    );
  }
}

export default Footer;
