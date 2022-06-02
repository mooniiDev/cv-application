// Packages
import React from 'react';

// Font Awesome Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPen } from '@fortawesome/free-solid-svg-icons';

class Skills extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <h2 className="info-title">
          <span className="info-skills">SKILLS</span>
          <span className="info-buttons">
            <FontAwesomeIcon icon={faPlus} className="skills fa-fw" />
            <FontAwesomeIcon icon={faPen} className="skills fa-fw" />
          </span>
        </h2>
        <form className="hidden">
          <div>
            {/* Skill */}
            <label htmlFor="skill">Skill</label>
            <input
              id="skill"
              type="text"
              name="skill"
              placeholder="Ex: React.js"
            />
          </div>
          <div>
            <input type="submit" value="Save" />
            <input type="button" value="Cancel" />
          </div>
        </form>
      </div>
    );
  }
}

export default Skills;
