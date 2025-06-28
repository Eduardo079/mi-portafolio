
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function ScrollRevealSection({ children, delay = 0, rotate = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, scale: 0.8, rotate }}
      animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
      transition={{ duration: 1.2, delay, ease: "easeOut" }}
      className="relative z-10 max-w-6xl mx-auto px-6 pt-24 -mt-24"
    >
      {children}
    </motion.section>
  );
}
