import Link from 'next/link';
import { motion } from 'framer-motion';
import { slide, scale } from '@/app/anim';

interface LinkData {
  title: string;
  href: string;
  index: number;
}

interface LinkComponentProps {
  data: LinkData;
  isActive: boolean;
  setSelectedIndicator: (href: string) => void;
}

export default function LinkComponent({ data, isActive, setSelectedIndicator }: LinkComponentProps) {
  const { title, href, index } = data;

  return (
    <motion.div
      className="relative flex items-center"
      onMouseEnter={() => { setSelectedIndicator(href) }}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div
        variants={scale}
        animate={isActive ? "open" : "closed"}
        className="w-2.5 h-2.5 bg-white absolute left-[-30px] rounded-full"
      ></motion.div>
      <Link href={href}>{title}</Link>
    </motion.div>
  )
}
