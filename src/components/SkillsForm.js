// Packages
import React from 'react';

class SkillsForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
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
    );
  }
}

export default SkillsForm;
