import React from "react";
import TypingTest from "../../Games/TypingTest/TypingTest";
import NavBar from "../NavBar/NavBar";

function SkillTest() {
  return (
    <div>
 
      <NavBar/>       
        <h2 className="title" style={{ color: " #7523CC" }}>Skill Test</h2>
       
     <TypingTest/>
    </div>
  );
}

export default SkillTest;
