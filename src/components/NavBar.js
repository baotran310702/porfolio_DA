import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";

const CustomLink = ({ href, title, className = "" }) => {
  //const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className="h-[1px] inline-block w-0 bg-dark absolute left-0
      -bottom-0.5 group-hover:w-full transition-[width] ease duration-300"
      ></span>
    </Link>
  );
};

function NavBar() {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <nav>
        <CustomLink href="/" title="HOME" className="mr-4" />
        <CustomLink href="/about" title="ABOUT" className="mr-4" />
        <CustomLink href="/projects" title="PROJECTS" className="mr-4" />
        <CustomLink href="/articles" title="ARTICLES" className="mr-4" />
      </nav>

      <nav>
        <CustomLink href="/" title="T" />
        <CustomLink href="/" title="T" />
        <CustomLink href="/" title="T" />
        <CustomLink href="/" title="T" />
        <CustomLink href="/" title="T" />
        <CustomLink href="/" title="T" />
      </nav>

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
}

export default NavBar;
