import React from "react";

export default function Aboutme() {
  return (
    <section className="max-w-3xl mx-auto px-10 py-10 mt-10 rounded-2xl shadow-lg text-white font-mono relative z-10 backdrop-blur-md">
      <h2 className="text-3xl font-bold text-cyan-400 mb-8 text-center drop-shadow-md tracking-wide">
        Sobre mí
      </h2>

      <div className="flex justify-center">
        <div className="flex flex-col justify-center items-center text-center text-lg leading-relaxed max-w-lg space-y-6">
          <p className="drop-shadow-md">
            Soy una persona apasionada por la tecnología y el aprendizaje constante. He trabajado con Azure y sus diversas herramientas, lo que me ha permitido desarrollar una visión práctica sobre la nube y cómo aprovecharla para crear soluciones eficientes y escalables.
          </p>
          <p className="drop-shadow-md">
            Me motiva enfrentar nuevos retos y seguir creciendo profesionalmente, siempre con la curiosidad y disciplina como principales motivaciones. Creo que cada proyecto es una oportunidad para aprender y aportar valor real.
          </p>
          <p className="drop-shadow-md">
            Estoy comprometido con mejorar día a día y usar la tecnología para transformar ideas en resultados tangibles.
          </p>
        </div>
      </div>
    </section>
  );
}
