import Head from "next/head";
import Image from "next/image";
import Layout from "@/components/Layout";
import profilesPic from "../../public/images/profile/myart.jpg";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { ArrowIcon } from "@/components/Icons";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bao's Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout className="pt-0">
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2 ">
              <Image
                src={profilesPic}
                alt="DA"
                className="w-1/2 h-auto ml-20 rounded-3xl"
              ></Image>
            </div>
            <div className="w-1/2 mr-10">
              <motion.h1 className="animate-bounced !text-4xl text-left font-mono">
                Bao's Porfolio
              </motion.h1>
              <AnimatedText
                text="Turning data into insights"
                className="!text-7xl text-left"
              ></AnimatedText>
              <p className="my-4 text-lg font-medium ">
                As a youthful junior student and a passion data analyst, I'm
                interested in working with data, willing to equip new knowledge,
                upgrade myself to align perfectly with the demands of business.
              </p>

              <div className="flex items-center self-start mt-2">
                <Link
                  href="/BaoTran_CV.pdf"
                  className={
                    "flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark"
                  }
                  target={"_blank"}
                  download={true}
                >
                  My Resume <ArrowIcon className="w-6 ml-2" />
                </Link>
                <Link
                  href="mailto:baotran310702@gmail.com"
                  target={`_blank`}
                  className="ml-4 text-lg font-medium capitalize text-dark underline"
                >
                  Email Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
