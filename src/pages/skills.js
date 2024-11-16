import { CheckedIcon } from "@/components/Icons";

import React from "react";

const Skill = ({ text, description }) => {
  return (
    <div className="relative flex flex-col items-center h-30 w-72 mb-5 rounded-3xl border-2 border-solid border-dark bg-light p-8">
      <div className="flex justify-start items-center ">
        <CheckedIcon />
        <span className="text-2xl font-bold ">{text}</span>
      </div>
      <p>{description}</p>
    </div>
  );
};

function Skills() {
  return (
    <>
      <h2 className="font-bold text-6xl mt-32 mb-28 w-full text-center">
        TECHNICAL SKILLS
      </h2>
      <div className="w-full flex justify-center items-center">
        <div className="w-4/5 grid grid-cols-3 items-center justify-items-center gap-4">
          <Skill
            text="Figma - Github"
            description="Tools"
          />
          <Skill
            text="Flutter - Dart"
            description="Development Framework"
          />
          <Skill
            text="Bloc, Redux, GetX, Provider"
            description="State Management"
          />
         
         <Skill
            text="Java, Kotlin"
            description="Programming Language"
          />
          <Skill
            text="ReactJS - NextJS" 
            description="Development Framework" 
          />
          <Skill
            text="TailwindCSS - SCSS/SASS"
            description="Utility CSS Framework"
          />
          
          <Skill
            text="Java, C#, Python, Javascript."
            description="Programming Language"
          />
          <Skill
            text="ASP.NET Web API - SQL Server"
            description="Backend position"
          />
           <Skill 
            text="HTML - CSS - JS" 
            description="Web Knowledge" 
          />
        </div>
      </div>
    </>
  );
}

export default Skills;
