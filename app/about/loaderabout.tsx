import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { opacity, slideUp } from "@/app/anim";
import { usePathname, useRouter } from "next/navigation"; // Import from next/router

export default function LoaderAbout() {
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const router = useRouter();

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
    dimension.height
  }  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.2, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.2, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  };

  // Get the pathname from the router
  const pathname = usePathname();

  // Define text based on the pathname
  let text = "";
  switch (pathname) {
    case "/about":
      text = "About";
      break;
    case "/contact":
      text = "Contact";
      break;
    case "/project":
      text = "Projects ";
      break;
    // Add more cases for other paths as needed
    default:
      text = "Ankit Pratap";
  }

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className="h-screen w-screen flex items-center justify-center fixed z-[99] bg-black"
    >
      {dimension.width > 0 && (
        <>
          <motion.p
            className="flex text-[white] text-6xl items-center absolute z-[1]"
            variants={opacity}
            initial="initial"
            animate="enter"
          >
            {text} {/* Render dynamic text */}
          </motion.p>
          <svg className="absolute w-full h-[calc(100%_+_300px)] top-0;">
            <motion.path
              className="fill-black"
              variants={curve}
              initial="initial"
              exit="exit"
            ></motion.path>
          </svg>
        </>
      )}
    </motion.div>
  );
}
