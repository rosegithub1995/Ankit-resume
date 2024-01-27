"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import Loader from "./_component/preloader";
import Header from "./_component/header/header";
import Description from "@/app/components/Description/index";
import Landing from "@/app/components/Landing/index";
import Projects from "@/app/components/Projects/index";
import SlidingImages from "@/app/components/SlidingImages/index";
import Contact from "@/app/components/Contact/index";

export default function Home() {
  useEffect(() => {
    const link = document.querySelectorAll("nav > .hover-this");
    const cursor = document.querySelector(".cursor") as HTMLElement;

    if (!cursor) {
      console.error("Cursor element not found");
      return;
    }

    const animateit = function (
      this: any,
      e: { type?: any; offsetX?: any; offsetY?: any }
    ) {
      const span = this.querySelector("span");
      const { offsetX: x, offsetY: y } = e,
        { offsetWidth: width, offsetHeight: height } = this,
        move = 25,
        xMove = (x / width) * (move * 2) - move,
        yMove = (y / height) * (move * 2) - move;
      span.style.transform = `translate(${xMove}px, ${yMove}px)`;
      if (e.type === "mouseleave") span.style.transform = "";
    };

    const editCursor = (e: { clientX: any; clientY: any }) => {
      const { clientX: x, clientY: y } = e;
      cursor.style.left = x + "px";
      cursor.style.top = y + "px";
    };

    link.forEach((b) => b.addEventListener("mousemove", animateit));
    link.forEach((b) => b.addEventListener("mouseleave", animateit));
    window.addEventListener("mousemove", editCursor);

    // Cleanup event listeners when component unmounts
    return () => {
      link.forEach((b) => b.removeEventListener("mousemove", animateit));
      link.forEach((b) => b.removeEventListener("mouseleave", animateit));
      window.removeEventListener("mousemove", editCursor);
    };
  }, []);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  return (
    <main className="bg-[#6f6c67]">
      <AnimatePresence mode="wait">{isLoading && <Loader />}</AnimatePresence>

      <Header />

      <Landing />

      <Description />

      <Projects />

      <Contact />
    </main>
  );
}
