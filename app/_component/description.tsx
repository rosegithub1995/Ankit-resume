
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUpDescription, opacityDescription } from '@/app/anim';
import Rounded from '@/app/_component/rounded-button';
export default function Description() {

    const phrase = "Helping brands to stand out in the digital era. Together we will set the new status quo. No nonsense, always on the cutting edge.";
    const description = useRef(null);
    const isInView = useInView(description)
    return (
        <div ref={description} className="mt-24">
            <div className="max-w-2xl mx-auto p-6">
                <p>
                {
                    phrase.split(" ").map( (word, index) => {
                        return <span key={index} 
                        className="relative overflow-hidden inline-flex">
                            <motion.span variants={slideUpDescription} 
                            custom={index} animate={isInView ? "open" : "closed"} key={index}>{word}</motion.span></span>
                    })
                }
                </p>
                <motion.p variants={opacityDescription} animate={isInView ? "open" : "closed"}>The combination of my passion for design, code & interaction positions me in a unique place in the web design world.</motion.p>
                <div data-scroll data-scroll-speed={0.1}>
                <Rounded className="mt-6">
            <p className="text-lg font-light">About me</p>
          </Rounded>
                </div>
            </div>
        </div>
    )
}
