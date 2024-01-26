'use client';

import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion';
import Preloader from '@/app/components/Preloader';
import HeroText from './text-anim';
import Navbar from './navbar';


export default function Home() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();

          setTimeout( () => {
            setIsLoading(false);
            document.body.style.cursor = 'default'
            window.scrollTo(0,0);
          }, 2000)
      }
    )()
  }, [])

  return (
    <main>
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>
      <nav className=''></nav>
      <Navbar/>
    </main>
  )
}
