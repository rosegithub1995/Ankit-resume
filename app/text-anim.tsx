import React, { useRef, useEffect } from 'react';
import { TimelineMax, Power3 } from 'gsap';

const HeroText = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const $text = textRef.current;

    if (!$text) {
      console.error('Ref not available');
      return;
    }

    const chars1 = Array.from($text.childNodes[0].textContent);
    const chars2 = Array.from($text.childNodes[1].textContent);

    const tlHover = new TimelineMax({ paused: true })
      .staggerTo(chars1, 0.8, { yPercent: -100, ease: Power3.easeInOut }, 0.03)
      .staggerFrom(chars2, 0.8, { yPercent: 100, ease: Power3.easeInOut }, 0.03, 0.1);

    const handleHover = () => {
      tlHover.play();
    };

    const handleMouseLeave = () => {
      tlHover.reverse();
    };

    $text.addEventListener('mouseenter', handleHover);
    $text.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      $text.removeEventListener('mouseenter', handleHover);
      $text.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div ref={textRef} className="wrap">
      <div className="text">boring text</div>
      <div className="text">boring text</div>
    </div>
  );
};

export default HeroText;
