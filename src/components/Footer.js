import React from "react";
import Layout from "./Layout";
import Link from "next/link";

function Footer() {
  return (
    <footer
      className="w-full border-t-2 border-solid border-dark font-medium
    text-lg"
    >
      <Layout className="py-8 flex items-center justify-between">
        <span>
          {new Date().getDate()}/{new Date().getMonth()}/
          {new Date().getFullYear()}
        </span>
        <Link href="/">
          Welcome to my Portfolio
          <span className="text-primary text-2xl px-1">&#9825;</span>
        </Link>
        <Link href="/" className="">
          Made by NextJS & TailwindCSS
        </Link>
      </Layout>
    </footer>
  );
}

export default Footer;
