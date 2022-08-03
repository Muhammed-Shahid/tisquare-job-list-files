import React from "react";
import "./SkillTest.css";
import { useState } from "react";
import { collection, getDoc } from "firebase/firestore";
import db from "../../Firebase/Firebase";
import { Row, Col } from "react-bootstrap";
import TypingTest from "../../Games/TypingTest/TypingTest";

function SkillTest() {
  return (
    <div>
 
   
        <h2 className="title" style={{ color: " #7523CC" }}>Skill Test</h2>
       
     <TypingTest/>
    </div>
  );
}

export default SkillTest;
