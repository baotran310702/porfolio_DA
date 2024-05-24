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
        <div className="w-4/5 grid grid-cols-2 items-center justify-items-center gap-4">
          <div className="col-span-1">
            <Skill
              text="Figma - Github"
              description="Tools"
            />
            <Skill text="HTML - CSS - JS" description="Web Knowledge" />
          </div>
          <div className="col-span-1">
            <Skill text="ReactJS - NextJS - Flutter" description="Development Framework" />
            <Skill
              text="TailwindCSS - SCSS/SASS"
              description="Utility CSS Framework"
            />
          </div>
          <div className="col-span-1">
            <Skill
              text="Bloc, Redux, GetX, Provider"
              description="State Management"
            />
          </div>
          <div className="col-span-1">
            <Skill
              text="Dart, Java, C#, Python, Javascript."
              description="Programming Language"
            />
          </div>
          <div className="col-span-1">
            <Skill
              text="ASP.NET Web API - SQL Server"
              description="Backend position"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
