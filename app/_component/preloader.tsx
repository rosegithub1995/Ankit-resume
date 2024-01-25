'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { opacity, slideUp } from '@/app/anim';

const words = ["नमस्कार","Hello", "Bonjour", "Ciao", "Olà", "やあ", "Hallå", "Guten tag", "Hallo"]

export default function Index() {
    const [index, setIndex] = useState(0);
    const [dimension, setDimension] = useState({width: 0, height:0});

    useEffect( () => {
        setDimension({width: window.innerWidth, height: window.innerHeight})
    }, [])

    useEffect( () => {
        if(index == words.length - 1) return;
        setTimeout( () => {
            setIndex(index + 1)
        }, index == 0 ? 1000 : 150)
    }, [index])

    const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width/2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`
    const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width/2} ${dimension.height} 0 ${dimension.height}  L0 0`

    const curve = {
        initial: {
            d: initialPath,
            transition: {duration: 0.7, ease: [0.76, 0, 0.24, 1]}
        },
        exit: {
            d: targetPath,
            transition: {duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3}
        }
    }

    return (
        <motion.div variants={slideUp} initial="initial" exit="exit" 
        className="h-screen w-screen flex items-center justify-center fixed z-[99]
         bg-black
        ">
            {dimension.width > 0 && 
            <>
                <motion.p className="flex text-[white] text-[42px] items-center absolute z-[1]" 
                variants={opacity} initial="initial" animate="enter"> 🙏 &nbsp;
                    <span className='block w-2.5 h-2.5 bg-[white] mr-2.5 rounded-[50%]'>
                    </span> &nbsp;
                    {words[index]}
                </motion.p>
                <svg className='absolute w-full h-[calc(100%_+_300px)] top-0;'>
                    <motion.path className="fill-black" variants={curve}
                     initial="initial" exit="exit"></motion.path>
                </svg>
            </>
            }
        </motion.div>
    )
}
