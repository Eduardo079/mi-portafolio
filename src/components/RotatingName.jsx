import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function RotatingName() {
  const [showFront, setShowFront] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFront((prev) => !prev);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const variants = {
    enter: { opacity: 0, rotateY: 90 },
    center: { opacity: 1, rotateY: 0 },
    exit: { opacity: 0, rotateY: -90 },
  };

  return (
    <div className="relative flex items-center justify-center w-full h-20 md:h-24 perspective-[800px]">
      <AnimatePresence initial={false} mode="wait">
        {showFront ? (
          <motion.div
            key="front"
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 1 }}
            className="absolute w-full text-center md:text-left text-2xl sm:text-3xl md:text-5xl font-extrabold text-cyan-400 drop-shadow-[0_0_5px_rgba(0,255,255,0.7)] select-none"
          >
            Kevin Eduardo Martínez Escobar
          </motion.div>
        ) : (
          <motion.div
            key="back"
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 1 }}
            className="absolute w-full text-center md:text-left text-2xl sm:text-3xl md:text-5xl font-extrabold text-cyan-400 drop-shadow-[0_0_5px_rgba(0,255,255,0.7)] select-none"
          >
            Ingeniero en Sistemas y Computación
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
