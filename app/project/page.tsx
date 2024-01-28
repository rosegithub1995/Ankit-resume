"use client";
import { AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import LoaderAbout from "../about/loaderabout";

const Project = () => {
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
      <div className="">Projects</div>
    </div>
  );
};

export default Project;
