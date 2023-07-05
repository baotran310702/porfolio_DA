import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import KmeanPic from "../../public/images/profile/KMeans.png";
import ExcelPic from "../../public/images/profile/ExcelPJ.png";
import DashboardPI from "../../public/images/profile/DashboardPI.png";
import ArimaPic from "../../public/images/profile/Python.png";
import Datawarehouse from "../../public/images/profile/Data ware house.png";

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
                title="Analyze The Behavior of Tenants in New York in 2019 using KMeans - a clustering algorithm."
                img={KmeanPic}
                summary="Data preprocessing with Python (drop empty, delete duplicate...). Then, applying KMeans algorithm for dataset and running process. Finally, visualizing theri correlation with box-plot chart and show the clusters in map using python's library."
                link="https://github.com/baotran310702/Analyze_Airbnb_KMeans"
                github="https://github.com/baotran310702/Analyze_Airbnb_KMeans"
                type="Python"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Shopping Habit of Customer in Istanbul."
                img={ExcelPic}
                type="MS Excel"
                link="https://github.com/baotran310702/Customer_shopping_analysis"
                github="https://github.com/baotran310702/Customer_shopping_analysis"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Revenue Hospitality."
                img={DashboardPI}
                type="Power BI"
                link="https://github.com/baotran310702/Analyze_Revenue_Hospitality"
                github="https://github.com/baotran310702/Analyze_Revenue_Hospitality"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Hybrid ARIMA & Random Walk Model in Predicting Cryptocurrency."
                img={ArimaPic}
                type="Python"
                link="https://github.com/baotran310702/Crypto_Price_Forecasting"
                github="https://github.com/baotran310702/Crypto_Price_Forecasting"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Building Data Warehouse for Airbnb in New York in 2019 and Report."
                img={Datawarehouse}
                type="Visual Studio & Sql Server"
                github="https://github.com/baotran310702/SSAS_AB_NYC_2019/tree/main"
                link="https://github.com/baotran310702/SSAS_AB_NYC_2019/tree/main"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}

export default Projects;
