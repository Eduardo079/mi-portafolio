import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const FALL_DURATION = 3; // segundos
const TYPING_SPEED = 80; // ms por letra
const PAUSE_AFTER_LINE = 700; // ms entre frases
const PAUSE_BEFORE_FALL = 1200; // ms antes de caer

export default function TypingAndFallingText({ texts }) {
    const [displayedLines, setDisplayedLines] = useState([]); // frases ya escritas completas
    const [currentText, setCurrentText] = useState(""); // frase que se está escribiendo
    const [charIndex, setCharIndex] = useState(0); // letra actual a mostrar
    const [phase, setPhase] = useState("typing"); // typing, pause, falling

    // Escribir letras una a una
    useEffect(() => {
        if (phase !== "typing") return;

        if (displayedLines.length >= texts.length) {
            // Ya escribimos todo
            setPhase("pause");
            return;
        }

        const fullText = texts[displayedLines.length];
        if (charIndex < fullText.length) {
            const timeout = setTimeout(() => {
                setCurrentText(fullText.slice(0, charIndex + 1));
                setCharIndex(charIndex + 1);
            }, TYPING_SPEED);
            return () => clearTimeout(timeout);
        } else {
            // Terminó frase actual, la agregamos a las líneas y reiniciamos índice
            setDisplayedLines((prev) => [...prev, fullText]);
            setCurrentText("");
            setCharIndex(0);
            // Pausa antes de siguiente frase
            const timeout = setTimeout(() => { }, PAUSE_AFTER_LINE);
            return () => clearTimeout(timeout);
        }
    }, [charIndex, displayedLines, phase, texts]);

    // Pausa antes de caer
    useEffect(() => {
        if (phase === "pause") {
            const timeout = setTimeout(() => {
                setPhase("falling");
            }, PAUSE_BEFORE_FALL);
            return () => clearTimeout(timeout);
        }
    }, [phase]);

    // Reiniciar todo después de caer
    useEffect(() => {
        if (phase === "falling") {
            const timeout = setTimeout(() => {
                setDisplayedLines([]);
                setCurrentText("");
                setCharIndex(0);
                setPhase("typing");
            }, (FALL_DURATION + 1) * 1000); // Tiempo de caída + 1s buffer
            return () => clearTimeout(timeout);
        }
    }, [phase]);

    
    const allLines = currentText
        ? [...displayedLines, currentText]
        : [...displayedLines];

    return (
        <div
            style={{
                fontFamily: "monospace",
                fontSize: "1.40rem",
                color: "#22d3ee",
                marginTop: 16,
                userSelect: "none",
                maxWidth: 700,
                marginLeft: "auto",
                marginRight: "auto",
                textAlign: "center",
                minHeight: 120,
                overflow: "hidden",
            }}
        >
            {phase !== "falling" &&
                allLines.map((line, i) => (
                    <p
                        key={i}
                        style={{
                            margin: 0,
                            display: "inline-block",
                            lineHeight: 1.4,
                            whiteSpace: "pre-wrap",
                            minHeight: 24,
                            width: "100%",
                        }}
                    >
                        {line}
                        {i === allLines.length - 1 && phase === "typing" && (
                            <span className="animate-pulse">|</span>
                        )}
                    </p>
                ))}

            {phase === "falling" && (
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 8,
                        userSelect: "none",
                    }}
                >
                    {allLines.map((line, lineIndex) => {
                        const letters = line.split("");
                        const len = letters.length;
                        return (
                            <div
                                key={lineIndex}
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    gap: 2,
                                    flexWrap: "wrap",
                                }}
                            >
                                {letters.map((char, charIndex) => {
                                    
                                    const delay =
                                        lineIndex * 0.5 + 
                                        ((len - 1 - charIndex) / len) * 0.5; 

                                    return (
                                        <motion.span
                                            initial={{ x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }}
                                            animate={{
                                                x: (Math.random() - 0.5) * 200,
                                                y: (Math.random() - 0.5) * 200,
                                                rotate: (Math.random() - 0.5) * 360,
                                                scale: 1.5,
                                                opacity: 0,
                                            }}
                                            transition={{
                                                duration: FALL_DURATION,
                                                ease: "easeOut",
                                                delay: delay,
                                            }}
                                            style={{ display: "inline-block" }}
                                        >
                                            {char === " " ? "\u00A0" : char}
                                        </motion.span>

                                    );
                                })}
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
