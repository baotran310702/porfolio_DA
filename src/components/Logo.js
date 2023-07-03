import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const MotionLink = motion(Link);

function Logo() {
  return (
    <div className="w-16 h-16 flex items-center justify-center mt-2">
      <MotionLink
        href="/"
        className="flex items-center justify-center rounded-full bg-black"
      ></MotionLink>
    </div>
  );
}

export default Logo;
