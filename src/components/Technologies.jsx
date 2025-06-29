import React from "react";
import { motion } from "framer-motion";

// Íconos personalizados
import azureLogo from "../assets/azure.png";
import netCore from "../assets/NET_core.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import tailwindcss from "../assets/tailwindcss.png";
import LogoReact from "../assets/React.png";
import Postman from "../assets/postman.png";
import github from "../assets/github.png";
import git from "../assets/git.png";
import firebase from "../assets/Firebase-Logo.png";
import sql from "../assets/sql.png";
import mysql from "../assets/mysql.png";
import powerBI from "../assets/powerBI.png"
import js from  "../assets/js.png"

const technologies = [
    azureLogo, netCore, html, css,
    tailwindcss, LogoReact, Postman,
    git, github, firebase, sql, mysql,
    powerBI,js
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
};

export default function Technologies() {
    return (
        <section className="mt-24" id="Tecnolog">
            <h2 className="text-4xl font-semibold text-center mb-10 text-cyan-300">
                Tecnologías
            </h2>

            <motion.div
                className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 max-w-6xl mx-auto px-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                {technologies.map((icon, index) => {
                    const isLarge = icon === firebase || icon === mysql;

                    return (
                        <div
                            key={index}
                            className="w-32 h-32 flex items-center justify-center"
                        >
                            <motion.img
                                src={icon}
                                alt={`Tech ${index}`}
                                className={`${isLarge ? "w-32 h-32" : "w-20 h-20"} object-contain`}
                                variants={itemVariants}
                                whileHover={{ scale: 1.2 }}
                                transition={{ type: "spring", stiffness: 200 }}
                            />
                        </div>
                    );
                })}
            </motion.div>
        </section>
    );
}
