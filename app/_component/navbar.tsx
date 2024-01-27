import React, { useEffect } from "react";
import styles from "./Navbar.module.scss";

const Navbar: React.FC = () => {
  useEffect(() => {
    const link = document.querySelectorAll(
      `.${styles.nav} > .${styles.hoverThis}`
    );
    const cursor = document.querySelector(`.${styles.cursor}`) as HTMLElement;

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
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  return (
    <div className={styles.navWrapper}>
      <nav className={styles.nav}>
        <a href="#" className={styles.hoverThis}>
          <span>Home</span>
        </a>
        <a href="#" className={styles.hoverThis}>
          <span>Our Story</span>
        </a>
        <a href="#" className={styles.hoverThis}>
          <span>Studio</span>
        </a>
        <a href="#" className={styles.hoverThis}>
          <span>Contact</span>
        </a>
        <div className={styles.cursor}></div>
      </nav>
    </div>
  );
};

export default Navbar;
