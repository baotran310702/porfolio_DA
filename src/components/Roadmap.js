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
      <h2 className="font-bold text-6xl mb-28 w-full text-center">EDUCATION</h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-1 w-[4px] h-full bg-dark origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-betweem ml-20 ">
          <Details
            title="University Of Information and Technology - VNU"
            time="2020-2024"
            description="Relevant courses included Data Structures and Algorithm, Web Application Designing, OOP (Object Oriented Programming)..."
            major="Bachelor of Information System"
            link="https://www.uit.edu.vn/"
            nameLink="UIT"
          />
          <Details
            title={`Joined UIT Web - Game Hackathon`}
            time="2022"
            major="UIT Web - Game Hackathon"
            description="Make a Web3 that using solidity framework and asp.net web api in backend and 
            reactJS in frontend to make a auction NFT web named GreenSavers. People can you ETH to join
             auction, all the money will be using for charity."
            link="https://www.facebook.com/GameUITHackathon/photos/a.1802405493469811/1802452036798490/"
            nameLink="Fanpage"
          />
        </ul>
      </div>
    </div>
  );
}

export default Roadmap;
