import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import ExcelPic from "../../public/images/profile/ExcelPJ.png";
import DashboardPI from "../../public/images/profile/DashboardPI.png";
import NFT_Charity from "../../public/images/profile/thumbnail_greensavers.png";
import Tiktok_App from "../../public/images/profile/thumbnail_tiktok.png";
import Shoes_App from "../../public/images/profile/thumbnail-shoes.png";

import { motion } from "framer-motion";

const FeaturedProject = ({
  type,
  title,
  summary,
  img,
  link = "/",
  github = "/",
}) => {
  return (
    <article
      className="relative w-full flex items-center justify-between 
    rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12"
    >
      <div className="absolute top-2 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark"></div>
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto scale-[1.2] hover:scale-[1.3] ease-in-out duration-300"
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary text-lg font-medium">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark ">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold"
          >
            Visit project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, summary, img, link = "/", github = "/" }) => {
  return (
    <article
      className="relative w-full flex flex-col items-center justify-center 
    rounded-2xl border border-solid border-dark bg-light p-6"
    >
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark"></div>
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto scale-105 hover:scale-[1.1] ease-in-out duration-300"
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-lg">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-2xl font-bold">{title}</h2>
        </Link>

        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold"
          >
            Visit
          </Link>
        </div>
      </div>
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
          <AnimatedText text="PROJECTS" className="mb-8" />

          <div className="grid grid-cols-12 gap-24 mt-14">
            <div className="col-span-12">
              <FeaturedProject
                title="NFT Charity (Teamwork)"
                img={NFT_Charity}
                summary="I was joined in working at both frontend and backend position. At role frontend, i joined in user interface, login using metamask features, fetch nft from backend solidity and fetch api from backend. At backend, i joined in design models and used it to save transactions."
                link="https://github.com/hadanhtuan/NFT_Charity"
                github="https://github.com/hadanhtuan/NFT_Charity"
                type="Frontend: ReactJS, Backend: ASP.NET Web API"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Clone Tiktok Web"
                img={Tiktok_App}
                type="ReactJS - Module CSS (SASS & SCSS) - My first prject when learn ReactJS"
                link="https://tiktok-app-baotran.netlify.app/"
                github="https://github.com/baotran310702/tiktok-app"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Web Shoes Store"
                img={Shoes_App}
                type="ReactJS + Vite, TailwindCSS, ReduxToolkit (CSS & Responsive)"
                link="https://nike-shoes-store-baotran.vercel.app/"
                github="https://github.com/baotran310702/nike_shoes_shop_user_fe"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}

export default Projects;
