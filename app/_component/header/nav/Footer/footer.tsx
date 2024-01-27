import { menuSlide, slide } from '@/app/anim';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react'

const Footer = () => {
  return (
    <motion.div variants={menuSlide} initial="initial" 
    animate="enter" 
    exit="exit"  className="flex w-full justify-between text-base md:text-lg gap-10">
        <Link href="/">Awwwards</Link>
        <Link href="">Instagram</Link>
        <Link href="">Dribble</Link>
        <Link href="">LinkedIn</Link>
    </motion.div>
  )
}

export default Footer;