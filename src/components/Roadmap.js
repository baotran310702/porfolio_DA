import { useScroll } from "framer-motion";
import { motion } from "framer-motion";
import React, { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({
  title,
  time,
  description,
  major,
  link = "",
  nameLink = "",
}) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon references={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl">
          {title}&nbsp;{" "}
          <a
            href={link}
            target="_blank"
            className="font-bold text-xl text-blue-500"
          >
            @{nameLink}
          </a>
        </h3>
        <span className="text-sm">
          {time} | {major}
        </span>
        <p>{description}</p>
      </motion.div>
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
    <div className="my-32">
      <h2 className="font-bold text-5xl mb-28 w-full text-center">EDUCATION</h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-1 w-[4px] h-full bg-dark origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-betweem ml-20 ">
          <Details
            title="University Of Information and Technology - VNU"
            time="2020-2024"
            description="Relevant courses included Data Structures and Algorithm, Database Management System (DBMS), Distributed Database, Business Data Analyst, OLAP, Data Mining..."
            major="Bachelor of Information System"
            link="https://www.uit.edu.vn/"
            nameLink="UIT"
          />
          <Details
            title={`Google Data Analyst Professional Certificate - Coursera`}
            time="19/06/2023"
            description="Including 8 courses, Data Analysis with R Programming,
            Process Data from Dirty to Clean,
            Share Data Through the Art of Visualization,            
            Ask Questions to Make Data-Driven Decisions,            
            Analyze Data to Answer Questions,            
            Prepare Data for Exploration,            
            Foundations: Data, Data, Everywhere,            
            Google Data Analytics Capstone: Complete a Case Study."
            major="Data Analyst Courses"
            link="https://www.coursera.org/account/accomplishments/professional-cert/H5WPSC7AX3NQ"
            nameLink="Google"
          />
          <Details
            title="Advanced SQL Courses Provided by Kaggle"
            time="07/2023"
            description="Learn more about UNION and JOINs, analytic function, nested and repeated data and write efficient queries."
            major="Optimize And Make Query Less Complicated"
            link="https://www.kaggle.com/learn/certification/tranbao1414/advanced-sql"
            nameLink="Kaggle"
          />
        </ul>
      </div>
    </div>
  );
}

export default Roadmap;
