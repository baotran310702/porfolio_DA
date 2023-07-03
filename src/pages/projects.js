import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React from "react";

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
            <div className="col-span-12">Project-1</div>
            <div className="col-span-12">project-2</div>
          </div>
        </Layout>
      </main>
    </>
  );
}

export default Projects;
