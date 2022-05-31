import React from 'react';
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
        <h2>
          SKILLS
          <FontAwesomeIcon icon={faPlus} />
          <FontAwesomeIcon icon={faPen} />
        </h2>
        <form>
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
