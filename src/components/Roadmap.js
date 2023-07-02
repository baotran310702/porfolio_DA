import { useScroll } from "framer-motion";
import { motion } from "framer-motion";
import React, { useRef } from "react";

const Details = ({ title, time, description, major, link = "" }) => {
  return (
    <li className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">
      <div>
        <h3 className="capitalize font-bold text-2xl">{title}&nbsp;</h3>
        <span>
          {time} | {major}
        </span>
        <p>{description}</p>
      </div>
    </li>
  );
};

function Roadmap() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-6xl mb-32 w-full text-center">EDUCATION</h2>
      <div className="w-[75%] mx-auto relative">
        <motion.div className="absolute left-8 top-0 w-[4px] h-full bg-dark origin-top" />
        <ul className="w-full flex flex-col items-start justify-between ml-20 ">
          <Details
            title="University Of Information and Technology - VNU"
            time="2020-2024"
            description="Relevant courses included Data Structures and Algorithm, Database Management System (DBMS), Distributed Database, Business Data Analyst, OLAP, Data Mining..."
            major="Bachelor of Information System"
          />
          <Details
            title="University Of Information and Technology - VNU"
            time="2020-2024"
            description="Relevant courses included Data Structures and Algorithm, Database Management System (DBMS), Distributed Database, Business Data Analyst, OLAP, Data Mining..."
            major="Bachelor of Information System"
          />
        </ul>
      </div>
    </div>
  );
}

export default Roadmap;
