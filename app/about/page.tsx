"use client";
import { AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import LoaderAbout from "./loaderabout";
import Header from "../components/Header";

const About = () => {
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
  return (
    <div>
      <AnimatePresence mode="wait">
        {isLoading && <LoaderAbout />}
      </AnimatePresence>
      <div className="mt-24 p-2">
        <div className="mt-">About mannn</div>
      </div>
    </div>
  );
};

export default About;
