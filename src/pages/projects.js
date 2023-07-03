import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";
import React from "react";

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article>
      <Link href={link} target="_blank">
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>

      <div>
        <span>{type}</span>
        <Link href={link} target="_blank">
          <h2>{title}</h2>
        </Link>
        <p>{summary}</p>
      </div>

      <Link href={github} target="_blank">
        <GithubIcon />
      </Link>
      <Link href={link} target="_blank">
        Visit project
      </Link>
    </article>
  );
};

function Projects() {
  return (
    <>
      <Head>
        <title>Tran Quoc Bao | Projects</title>
        <meta name="description" content="any description"></meta>
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text="Projects" />
          <div className="grid grid-cols-12 gap-24">
            <div className="col-span-12">Featured Project</div>
            <div className="col-span-6">Project-1</div>
            <div className="col-span-6">project-2</div>
            <div className="col-span-12">Featured Project</div>
            <div className="col-span-6">Project-1</div>
            <div className="col-span-6">project-2</div>
          </div>
        </Layout>
      </main>
    </>
  );
}

export default Projects;
