import Head from "next/head";
import Image from "next/image";
import Layout from "@/components/Layout";
import profilesPic from "../../public/images/profile/myart.jpg";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { ArrowIcon } from "@/components/Icons";
import { motion } from "framer-motion";
import astronaut from "../../public/images/profile/astronaut.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bao&apos;s Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative flex items-center text-dark w-full min-h-screen ">
        <Image
          src={astronaut}
          alt="Astronaut"
          className="absolute top-0 z-10 w-72 h-72 animate-astronaut"
        />
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
              <motion.h1 className="animate-bounced !text-5xl text-left font-mono">
                Bao&apos;s Porfolio
              </motion.h1>
              <AnimatedText
                text="Flutter Developer"
                className="!text-7xl text-left"
              ></AnimatedText>
              <p className="my-4 text-lg font-medium ">
                A passionate Flutter developer with:<br/>
                • <b>Flutter - Dart - Swift - Kotlin</b>
                <br/>
                • Interacting native code by using <b>method channel and stream channel</b>
                <br/>
                • Strong <b>OOP</b> concept - <b>Design Pattern</b> - <b>SOLID Principle</b> 
                <br/>
                • Experienced in <b>Bloc State Management</b> - <b>Provider</b> - <b>GetX</b>
                <br/>
                • Experienced in <b>Dependency Injection GetIT</b> 
                <br/>
                • Experienced in working with <b>WorkManagerment</b> - <b>forground service</b> 
                <br/>
                • Experienced in working with <b>MVC - MVVM - Clean Architecture</b>
                <br/>
                • Experienced in <b>Firebase - AWS Cloud</b>
                <br/>
                • Experienced in <b>deploying app to Google Play Console</b> and <b>App Store</b>
                <br/>
                • Experienced in <b>Unit Testing</b> and <b>Integration Testing</b>
                <br/>
                • Experienced in <b>CI/CD Pipeline</b>
                <br/>
                • Knowledge of <b>WebSockets, Socket.IO</b>
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
