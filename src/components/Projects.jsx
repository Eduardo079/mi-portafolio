import React, { useState } from "react";
import arquitecturaImg from "../assets/Arquitectura.jpg";

export default function Projects() {
    const [showImage, setShowImage] = useState(false);
    const [isImageLarge, setIsImageLarge] = useState(false);

    
    const handleCloseLarge = (e) => {
        if (e.target.id === "lightbox-overlay") {
            setIsImageLarge(false);
        }
    };

    return (
        <section id="projects" className="py-16 px-6 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-cyan-400 mb-6">Proyectos</h2>

            <div className="bg-gray-800 p-6 rounded-lg shadow-md flex flex-col gap-6">
                <div>
                    <h3 className="text-2xl font-semibold text-white mb-2">
                        Arquitectura en la nube basada en la Industria 4.0 para Interamerican Financial Consultants
                    </h3>
                    <p className="text-white/90 mb-3">
                        Proyecto de graduación enfocado en la construcción de una arquitectura inteligente en la nube para <strong>Interamerican Financial Consultants</strong>, optimizando el flujo de datos y facilitando la toma de decisiones.
                    </p>
                    <p className="text-white/80 mb-3">
                        Se desarrolló una solución donde <strong>Azure Data Factory</strong> actúa como orquestador, iniciando automáticamente un clúster en Databricks que ejecuta notebooks responsables del procesamiento de archivos, incluyendo limpieza avanzada de datos (manejo de espacios, valores nulos, etc.). Luego, los datos procesados son almacenados en <strong>PostgreSQL</strong> y visualizados mediante dashboards interactivos en <strong>Power BI</strong>.
                    </p>
                    <ul className="list-disc list-inside text-white/80 space-y-1 mb-4">
                        <li>Orquestación automatizada con Azure Data Factory</li>
                        <li>ETL desarrollado en notebooks de Databricks con PySpark</li>
                        <li>Transformación y limpieza de archivos con validación de calidad</li>
                        <li>Persistencia de datos en PostgreSQL alojado en Azure</li>
                        <li>Visualización de métricas clave con dashboards en Power BI</li>
                    </ul>

                    
                    <div className="flex justify-between items-center flex-wrap gap-4">
                        <button
                            onClick={() => setShowImage(!showImage)}
                            className="bg-cyan-500 hover:bg-cyan-400 text-white font-bold py-2 px-4 rounded transition"
                        >
                            {showImage ? "Ocultar Arquitectura" : "Arquitectura del Proyecto"}
                        </button>

                        <div className="flex flex-wrap gap-2">
                            {["Azure", "Databricks", "PySpark", "PostgreSQL", "Power BI"].map((tool, idx) => (
                                <span
                                    key={idx}
                                    className="bg-cyan-700 text-white text-sm font-semibold px-3 py-1 rounded-full shadow"
                                >
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                
                {showImage && (
                    <div className="flex justify-center mt-6">
                        <img
                            src={arquitecturaImg}
                            alt="Arquitectura del proyecto"
                            className="rounded-lg border border-cyan-400 shadow-lg w-full max-w-3xl cursor-pointer transition-transform duration-300"
                            onClick={() => setIsImageLarge(true)}
                        />
                    </div>
                )}

                
                {isImageLarge && (
                    <div
                        id="lightbox-overlay"
                        onClick={() => setIsImageLarge(false)}
                        className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 cursor-default"
                    >
                        <img
                            src={arquitecturaImg}
                            alt="Arquitectura ampliada"
                            className="max-w-full max-h-full rounded-lg shadow-lg"
                           
                            onClick={() => setIsImageLarge(false)}
                        />
                    </div>
                )}

            </div>
        </section>
    );
}
