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
      <ul className="list-disc pl-2">
        <li>Fullstack Academy of Code</li>
        <li>University of California, Santa Cruz</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
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
    <div className="">
      <AnimatePresence mode="wait">
        {isLoading && <LoaderAbout />}
      </AnimatePresence>

      <div className="mt-16 p-6 sm:p-12 dark:bg-gray-900 dark:text-gray-100">
        <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
          <Image
            src="/images/background.jpg"
            alt=""
            height="300"
            width="300"
            className="flex-shrink-0 w-96 h-96 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700"
          />
          <div className="flex flex-col">
            <h4 className="text-zinc-100 text-2xl md:text-4xl font-semibold text-center md:text-left">
              Ankit Pratap
            </h4>
            <p className="mt-4 text-zinc-300 text-lg dark:text-gray-400">
              Sure, here's a refined version of your bio with added experience
              details: "I am a skilled full-stack web developer dedicated to
              crafting immersive and user-friendly web experiences. With a
              strong foundation in JavaScript, I specialize in leveraging modern
              frameworks such as React and Redux to build dynamic front-end
              interfaces. On the back end, I am proficient in Node.js and
              Express, utilizing databases like PostgreSQL with Sequelize for
              efficient data management. My journey in web development has
              equipped me with a diverse skill set encompassing HTML, CSS, and
              Git version control. Continuously expanding my knowledge, I stay
              updated with the latest industry trends and technologies to
              deliver cutting-edge solutions. As a quick learner, I thrive in
              fast-paced environments and adapt swiftly to new challenges.
              Collaboration is at the core of my approach, and I am passionate
              about working alongside talented teams to bring innovative ideas
              to life. Together, we create impactful applications that resonate
              with users and drive business success."
            </p>
            <div className="flex pt-8 space-x-4">
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
        </div>

        <div className="text-zinc-200 flex justify-center pt-4 space-x-4 align-center">
          <RoundedButton>
            <p>asnemaris@gmail.com</p>
          </RoundedButton>
          <RoundedButton>
            <p>+91 6 27 84 74 30</p>
          </RoundedButton>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
