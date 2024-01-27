'use client';

import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion';

import Navbar from './_component/navbar';
import Loader from './_component/preloader';
import Header from './_component/header/header';



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
    <main className='bg-[#6f6c67]'>
      <AnimatePresence mode='wait'>
        {isLoading && <Loader />}
      </AnimatePresence>
      
      <Header/>
      
    </main>
  )
}
