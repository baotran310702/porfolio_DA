import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { GithubIcon, LinkedIn } from "./Icons";
import { motion } from "framer-motion";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block absolute bg-black left-0
      -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
      ${router.asPath === href ? "w-full" : "w-0"} 
      `}
      ></span>
    </Link>
  );
};

function NavBar() {
  return (
    <header className=" w-full px-32 py-6 font-medium flex items-center justify-between">
      <nav>
        <CustomLink href="/" title="HOME" className="mr-8" />
        <CustomLink href="/about" title="ABOUT ME" className="mr-8" />
        <CustomLink href="/projects" title="PROJECTS" className="mr-8" />
      </nav>

      <nav className="flex items-center justify-center flex-wrap">
        <motion.a
          className="mr-3"
          href="
          https://www.linkedin.com/in/baotran310702/"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.8 }}
        >
          <LinkedIn />
        </motion.a>
        <motion.a
          className="ml-3"
          href="https://github.com/baotran310702"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.8 }}
        >
          <GithubIcon />
        </motion.a>
      </nav>
    </header>
  );
}

export default NavBar;
