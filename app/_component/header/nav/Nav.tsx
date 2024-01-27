import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { menuSlide } from '@/app/anim';
import Link from '@/app/_component/header/nav/Link/Link';
import Footer from './Footer/footer';
import Curve from './Curve/curve';

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Work",
    href: "/work",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
]

export default function index() {

  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div 
      variants={menuSlide} 
      initial="initial" 
      animate="enter" 
      exit="exit" 
      className="h-screen bg-[rgb(41,41,41)] 
      fixed text-[white] right-0 top-0"
      >
       <div className="box-border 
       h-full flex flex-col justify-between p-16 md:p-20">
            <div onMouseLeave={() => {setSelectedIndicator(pathname)}} 
            className="flex flex-col text-4xl md:text-6xl gap-3 mt-20">
                    <div className="text-[rgb(153,153,153)]
                     uppercase text-sm mb-4 md:mb-8
                     border-b-[rgb(153,153,153)] border-b border-solid">
                        <p>Navigation</p>
                    </div>
                    {
                      navItems.map( (data, index) => {
                        return <Link 
                        key={index} 
                        data={{...data, index}} 
                        isActive={selectedIndicator == data.href} 
                        setSelectedIndicator={setSelectedIndicator}>
                        </Link>
                      })
                    }
            </div>
            
                <Footer/>
                <Curve/>
            
        </div>
    </motion.div>
  )
}