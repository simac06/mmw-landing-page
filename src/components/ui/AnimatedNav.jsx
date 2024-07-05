import { motion, easeInOut, AnimatePresence } from "framer-motion";
import { useState } from "react";

const menuVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    // y: "100%",
    y: 0,
    opacity: 0,
  },
  menuColorOpen: {
    backgroundColor: "rgb(20 21 21)",
  },
  menuColorClosed: {
    backgroundColor: "rgb(20 21 21 / 0.8)",
  },
};

export default function AnimatedNav(props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);
  return (
    <div className="w-screen z-50 fixed flex items-end">
      <motion.div
        initial={"menuColorClosed"}
        transition={isOpen ? { delay: 0 } : { delay: 0.5 }}
        animate={isOpen ? "menuColorOpen" : "menuColorClosed"}
        variants={menuVariants}
        className={`w-full  backdrop-blur-xl h-16 absolute top-0 z-[110] border-b-[0.1px] border-white grid grid-cols-2 shadow-2xl shadow-[rgba(0,0,0,0.4)]`}
      >
        <div className="h-full flex justify-start items-center px-4">
          <a href="/">
            <img
              src={props.logo}
              alt="Music's Most Wanted Logo"
              className="object-cover h-12"
            />
          </a>
        </div>
        <div className="flex border-box h-16 justify-end items-center">
          <button
            className="aspect-square border-l-[0.1px] border-white flex h-full justify-center items-center select-none hover:cursor-pointer text-white font-display font-black"
            onClick={handleToggle}
          >
            {isOpen ? "X" : "MENU"}
          </button>
        </div>
      </motion.div>
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            variants={menuVariants}
            transition={{
              duration: 0.2,
              // ease: [0.49, -0.01, 0.74, 1],
            }}
            exit={{
              // y: "-100%",
              opacity: 0,
            }}
            className="w-full h-[calc(100svh-4rem)] fixed bottom-0 bg-bg/80 backdrop-blur-xl z-[100]"
          >
            {props.children}
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}
