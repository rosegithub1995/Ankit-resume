"use client";

import React, { useEffect, useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "@/app/_component/tabbutton";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Contact from "../components/Contact";
import RoundedButton from "../common/RoundedButton";
import LoaderAbout from "./loaderabout";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="grid grid-cols-2 gap-4">
        <ul className="list-disc pl-2">
          <li>Full stack Developer</li>
          <li>Node.js</li>
          <li>Nextjs</li>
          <li>JavaScript</li>
          <li>MSSQL</li>
        </ul>
        <ul className="list-disc pl-2">
          <li>Android Developer</li>
          <li>Software Development</li>
          <li>SqlLite</li>
          <li>Programming</li>
          <li>Api</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div className="grid grid-cols-2 gap-4">
        <ul className="list-disc pl-2">
          <li>B. A. English (Hons)</li>
          <li>Full Stack developer</li>
          <li>Android Development</li>
        </ul>
        <ul className="list-disc pl-2">
          <li>2021</li>
          <li>Since May 2022</li>
          <li>Since 2022</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Experiences",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Development experience of around 2 years</li>
        <li className="text-emerald-500 font-semibold">
          I do not have prior job experience
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 100);
    })();
  }, []);
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: React.SetStateAction<string>) => {
    startTransition(() => {
      setTab(id);
    });
  };

  // Find the selected tab data, or fallback to an empty object if not found
  const selectedTab = TAB_DATA.find((t) => t.id === tab) || { content: null };

  return (
    <div className="m-2 p-2 gap-4">
      <AnimatePresence mode="wait">
        {isLoading && <LoaderAbout />}
      </AnimatePresence>

      <div className="mt-16 p-6 md:p-12 dark:bg-gray-900 dark:text-gray-100">
        <div className="flex flex-col items-center md:flex-row md:space-x-6">
          <div className="flex h-96 flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
            <Image
              src="/images/background.jpg"
              alt=""
              height="300"
              width="300"
              className="flex-shrink-0 w-96 h-96 border 
            rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700"
            />
          </div>
          <div className="md:w-1/2 max-w-7xl flex flex-col justify-center">
            <p className="mt-4 text-lg text-zinc-200 dark:text-gray-400">
              <div className="flex flex-col items-center">
                <div className="mb-4 text-center">
                  <h1 className="animate-fade-in-up delay-200 text-3xl font-bold">
                    Ankit Pratap
                  </h1>
                  <h3 className="mt-4 animate-fade-in-up delay-400 text-xl">
                    Full-Stack Web Developer
                  </h3>
                </div>
                <div className="flex flex-wrap gap-4">
                  I&apos;m a full-stack web developer with a passion for
                  crafting user-centric experiences that go beyond pixels and
                  code. I thrive in collaborative environments and believe in
                  the power of teamwork to bring innovative ideas to life. My
                  journey in web development has equipped me with a diverse
                  skillset, from back-end magic with Node.js and Express to
                  front-end finesse with React and Redux. But what truly excites
                  me is seeing my creations resonate with users and contribute
                  to real-world impact. I&apos;m a quick learner, always eager
                  to explore new technologies and stay ahead of the curve.
                  Let&apos;s connect and build something remarkable together!
                </div>
              </div>
            </p>
          </div>
        </div>

        <div className="flex mt-4 pt-8 space-x-4 justify-center md:justify-start">
          {TAB_DATA.map((item) => (
            <TabButton
              key={item.id}
              selectTab={() => handleTabChange(item.id)}
              active={tab === item.id}
            >
              {item.title}
            </TabButton>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-2 text-zinc-200"
        >
          {selectedTab.content}
        </motion.div>
      </div>
      <div className="px-4 space-x-4 md:px-48 text-zinc-200 flex justify-between pt-4 align-center">
        <RoundedButton>
          <p>asnemaris@gmail.com</p>
        </RoundedButton>
        <RoundedButton>
          <p>+91 6 27 84 74 30</p>
        </RoundedButton>
      </div>
    </div>
  );
};

export default AboutSection;
