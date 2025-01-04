import React, { useEffect } from "react";
import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Link from "next/link";
import profilePic from "../../public/images/profile/artist.jpg";
import Image from "next/image";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";
import Skills from "./skills";
import Roadmap from "@/components/Roadmap";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest <= value) {
        ref.current.textContent = typeof value === 'number' && Number.isInteger(value) 
          ? latest.toFixed(0)
          : latest.toFixed(1);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

function About() {
  return (
    <>
      <Head>
        <title>Tran Quoc Bao | About me</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-10">
          <AnimatedText text="Tran Quoc Bao" className="mb-12" />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
                Biography
              </h2>
              <p className="font-medium">
                Hi, I am <b>Bao</b>.<br />
                I am come from <b>UIT-VNUHCM</b>.<br />
                I will be graduated in <b>28/11/2024</b>.<br />
                I am flutter developers with <b>over 20 months of experience</b> .<br />
                I have an my own project.Reviewing to production on Google Play.
                I will deploy it to App Store soon.<br />
                You can review it on my DeployGate <Link href="https://deploygate.com/distributions/74e36f33869266142b82ef5e14dcf372d4aa36a4" target="_blank" className="text-cyan-600">here</Link>.
              </p>
              <p className="my-4 text-base font-medium">
                I am currently <b>available</b> and <b>ready</b> to contribute{" "}
                <b>full-time working</b> , offering my dedicated commitment
                to actively engage and play a part to the organization&apos;s goals.<br/>
                
              </p>
              <p className="my-4 text-base font-medium">
                Whenever you need, don&apos;t hesitate to{" "}
                {
                  <Link
                    href="mailto:baotran310702@gmail.com"
                    target="_blank"
                    className="text-cyan-600"
                  >
                    contact
                  </Link>
                }{" "}
                me.
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
              <Image
                src={profilePic}
                alt="Tran Quoc Bao"
                className="w-full h-auto rounded-2xl"
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-around">
              <div className="flex flex-col items-center justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={20} />
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 ">
                  Months of Experience
                </h2>
              </div>
              <div className="flex flex-col items-center justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={1} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 ">
                  Projects Completed
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Roadmap />
        </Layout>
      </main>
    </>
  );
}

export default About;
