// Packages Imports
import React from 'react';

class SkillsForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
    };
  }

  render() {
    const { isActive } = this.state;
    if (isActive === true) {
      return (
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
      );
    }
    return null;
  }
}

export default SkillsForm;
