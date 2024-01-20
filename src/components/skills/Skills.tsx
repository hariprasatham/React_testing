import { useEffect, useState } from "react";
import { SkillSProps } from "./Skills.types";

const Skills = (props: SkillSProps) => {
  const { skills } = props;
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(()=>{
    setTimeout(()=>setIsLoggedIn(true), 500)
  }, [])
  return (
    <>
      <ul>
        {skills.map((skill) => {
          return <li key={skill}>{skill}</li>;
        })}
      </ul>
      {isLoggedIn ? (
        <button>Start learning</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </>
  );
};

export default Skills;
