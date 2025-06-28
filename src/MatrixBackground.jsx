import React, { useEffect, useRef } from "react";

export default function MatrixBackground() {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const w = (canvas.width = window.innerWidth);
    const h = (canvas.height = window.innerHeight);

    const nodes = Array.from({ length: 60 }).map(() => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 1,
      vy: (Math.random() - 0.5) * 1,
      radius: Math.random() * 2 + 1,
    }));

    function draw() {
      ctx.fillStyle = "#0d0d0d";
      ctx.fillRect(0, 0, w, h);

      nodes.forEach((n, i) => {
        n.x += n.vx;
        n.y += n.vy;

        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = "#00e6e6"; // azul cian
        ctx.fill();

        for (let j = i + 1; j < nodes.length; j++) {
          const dist =
            (n.x - nodes[j].x) ** 2 + (n.y - nodes[j].y) ** 2;
          if (dist < 9000) {
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = "rgba(0, 230, 230, 0.1)";
            ctx.stroke();
          }
        }
      });
    }

    const interval = setInterval(draw, 30);
    return () => clearInterval(interval);
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-0" />;
}
