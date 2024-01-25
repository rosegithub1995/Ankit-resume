import React, { useEffect, useRef, ReactNode, HTMLAttributes } from 'react';
import gsap from 'gsap';
import Magnetic from '@/app/_component/magnetic';

interface RoundedButtonProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  backgroundColor?: string;
}

export default function RoundedButton({ children, backgroundColor = '#455CE9', ...attributes }: RoundedButtonProps) {
  const circle = useRef<HTMLDivElement>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);
  let timeoutId: NodeJS.Timeout | null = null;

  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true });
    if (circle.current) {
      timeline.current
        .to(circle.current, { top: '-25%', width: '150%', duration: 0.4, ease: 'power3.in' }, 'enter')
        .to(circle.current, { top: '-150%', width: '125%', duration: 0.25 }, 'exit');
    }
  }, []);

  const manageMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    if (timeline.current) {
      timeline.current.tweenFromTo('enter', 'exit');
    }
  };

  const manageMouseLeave = () => {
    timeoutId = setTimeout(() => {
      if (timeline.current) {
        timeline.current.play();
      }
    }, 300);
  };

  return (
    <Magnetic>
      <div className={`rounded-full border border-gray-400 cursor-pointer relative flex items-center justify-center p-4 ${attributes.className}`} onMouseEnter={manageMouseEnter} onMouseLeave={manageMouseLeave} {...attributes}>
        {children}
        <div ref={circle} style={{ backgroundColor }} className="w-full h-150% absolute rounded-full top-full"></div>
      </div>
    </Magnetic>
  );
}
