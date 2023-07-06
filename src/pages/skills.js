import { CheckedIcon } from "@/components/Icons";

import React from "react";

const Skill = ({ text, description }) => {
  return (
    <div className="relative h-30 w-72 mb-5 rounded-3xl border-2 border-solid border-dark bg-light p-8">
      <div className="flex justify-start items-center ">
        <CheckedIcon />
        <span className="text-2xl font-bold inline-block ">{text}</span>
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
      <div className="w-full flex items-center justify-center">
        <div className="col-span-2 items-center justify-start mr-3">
          <Skill text="Python - R" description="Programming Language" />
          <Skill text="MS Excel" description="Macros, VBA VLookup, Pivot..." />
        </div>
        <div className="col-span-2 items-center justify-start">
          <Skill text="SQL" description="SQL Server, MySQL.." />
          <Skill text="MS Power BI" description="Visualization, DAX..." />
        </div>
      </div>
    </>
  );
}

export default Skills;
