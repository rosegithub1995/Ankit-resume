import React, { useEffect, useRef } from 'react';
import styles from './style.module.scss';
import gsap from 'gsap';
import Magnetic from '../Magnetic';

export default function RoundedButton({ children, backgroundColor = "#455CE9", ...attributes }) {

  const circleRef = useRef(null);
  const textRef = useRef(null);
  const timelineRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    timelineRef.current = gsap.timeline({ paused: true })
      .to(circleRef.current, { top: "-25%", width: "150%", duration: 0.4, ease: "power3.in" }, "enter")
      .to(circleRef.current, { top: "-150%", width: "125%", duration: 0.25 }, "exit");

    return () => {
      // Clear the timeout when the component unmounts
      clearTimeout(timeoutRef.current);
    }
  }, []);

  const manageMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timelineRef.current.tweenFromTo('enter', 'exit');
    gsap.set(textRef.current, { zIndex: 1 }); // Ensure text appears above circle on hover
  }

  const manageMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      // Ensure the timeline is paused before playing
      if (timelineRef.current.paused()) {
        timelineRef.current.play();
      }
      gsap.set(textRef.current, { zIndex: 'auto' }); // Reset z-index to default
    }, 300)
  }

  return (
    <Magnetic>
      <div className={styles.roundedButton}
        style={{ overflow: "hidden" }}
        onMouseEnter={manageMouseEnter}
        onMouseLeave={manageMouseLeave} {...attributes}>
        <div ref={textRef} style={{ position: 'relative', zIndex: 'auto' }}>{children}</div>
        <div ref={circleRef} style={{ backgroundColor }} className={styles.circle}></div>
      </div>
    </Magnetic>
  )
}
