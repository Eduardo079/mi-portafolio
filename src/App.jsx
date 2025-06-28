import React from "react";
import { motion } from "framer-motion";
import MatrixBackground from "./MatrixBackground";
import profileImg from "./assets/img.png";
import Aboutme from "./components/about_me";
import {
  FaUser,
  FaProjectDiagram,
  FaCogs,
  FaFileAlt,
} from "react-icons/fa";
import RotatingName from "./components/RotatingName";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import TypingText from "./components/TypingText";
import ScrollRevealSection from "./components/ScrollRevealSection";


const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.7,
      delayChildren: 0.5,
    },
  },
};

const imageVariant = {
  hidden: { opacity: 0, x: -120 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.2, ease: "easeOut" },
  },
};

const textVariant = {
  hidden: { opacity: 0, x: 120 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.2, ease: "easeOut" },
  },
};


const sectionVariant = (rotate = 0, delay = 0) => ({
  hidden: { opacity: 0, scale: 0.8, rotate },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 1.2, ease: "easeOut", delay },
  },
});

export default function App() {
  return (
    <div className="relative min-h-screen w-screen overflow-x-hidden bg-black font-sans text-white">
      <MatrixBackground />

      
      <motion.nav
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-80 shadow-md px-6 py-4 flex justify-between items-center"
      >
        <div className="text-xl font-bold text-cyan-400 flex items-center gap-2">
          <img src="/icon/apple-touch-icon.png" alt="Icono" className="w-6 h-6" />
        </div>

        <div className="space-x-6 flex items-center text-white text-sm md:text-base">
          <a href="#about" className="hover:text-cyan-400 flex items-center gap-2 transition"><FaUser /> Sobre mí</a>
          <a href="#projects" className="hover:text-cyan-400 flex items-center gap-2 transition"><FaProjectDiagram /> Proyectos</a>
          <a href="#Tecnolog" className="hover:text-cyan-400 flex items-center gap-2 transition"><FaCogs /> Tecnologías</a>
          <a href="/public/CV Kevin Martínez.pdf" download="CV_Kevin Martínez.pdf" className="hover:text-cyan-400 flex items-center gap-2 transition"><FaFileAlt /> CV</a>
        </div>
      </motion.nav>

      
      <motion.main
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full pt-32 pb-16 px-8 flex flex-col md:flex-row items-start gap-12"
      >
        
        <motion.div variants={imageVariant} className="flex-shrink-0">
          <img src={profileImg} alt="Mi Foto" className="w-[650px] h-auto" />
        </motion.div>

        
        <motion.div variants={textVariant} className="mb-6 text-4xl tracking-wider w-full">
          <div className="mb-6">
            <RotatingName />
          </div>
          <p className="text-md md:text-xl text-white/90 mb-32">
            Apasionado por la tecnología y el aprendizaje continuo.
          </p>
          <TypingText
            texts={[
              "Desarrollador web y entusiasta de la nube ☁️",
              "Explorando el mundo del análisis de datos 📊",
              "Amante del código limpio y eficiente 💻",
              "Conectando ideas con tecnología 🤖",
            ]}
          />
        </motion.div>
      </motion.main>

      
      <motion.section
        id="about"
        initial="hidden"
        animate="visible"
        variants={sectionVariant(-4, 1.8)}
        className="relative z-10 max-w-6xl mx-auto px-6 pt-24 -mt-24"
      >
        <ScrollRevealSection id="about" delay={0.2} rotate={-4}>
          <Aboutme />
        </ScrollRevealSection>
      </motion.section>

      
      <motion.section
        id="projects"
        initial="hidden"
        animate="visible"
        variants={sectionVariant(4, 2.6)}
        className="relative z-10 max-w-6xl mx-auto px-6"
      >
        <Projects />
      </motion.section>

      
      <motion.section
        id="Tecnolog"
        initial="hidden"
        animate="visible"
        variants={sectionVariant(-6, 3.4)}
        className="relative z-10 max-w-6xl mx-auto px-6 pt-24 -mt-24"
      >
        <Technologies />
      </motion.section>

      
      <footer className="relative z-10 max-w-6xl mx-auto px-6 py-6 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Kevin Martínez. Todos los derechos reservados.
      </footer>
    </div>
  );
}
