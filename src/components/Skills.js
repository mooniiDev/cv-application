import React from 'react';

class Skills extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <h2>SKILLS</h2>
        {/* Skill */}
        <div>
          <label htmlFor="skill">Skill</label>
          <input id="skill" type="text" name="skill" />
        </div>
      </div>
    );
  }
}

export default Skills;
