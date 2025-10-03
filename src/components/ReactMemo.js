import React, { useState } from "react";
import { memo } from "react";
function ReactMemo() {
  const [skill, setSkill] = useState("");
  const [skills, setSkills] = useState([]);

  const handleAddSkill = () => {
    if (skill.trim() === "") return;
    setSkills([...skills, skill]);
    setSkill("");
  };

  return (
    <div>
      <h1>React.memo</h1>
      <input
        type="text"
        value={skill}
        onChange={(e) => setSkill(e.target.value)}
      />
      <button onClick={handleAddSkill}>Add Skill</button>

      <ul>
        {skills.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default memo(ReactMemo);
