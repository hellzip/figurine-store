import React, { useEffect, useRef } from "react";

interface MovingPatternCanvasProps {
  className?: string;
}

const MovingPatternCanvas: React.FC<MovingPatternCanvasProps> = ({
  className = "",
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const drawMovingShapes = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Pure white background
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Many tiny glowing circles scattered across the screen
      const circleCount = 80; // More circles for better coverage

      for (let i = 0; i < circleCount; i++) {
        // Random but consistent positioning based on index
        const baseX = (i * 137.508) % canvas.width; // Golden angle distribution
        const baseY = (i * 100) % canvas.height;

        // Gentle floating movement
        const x = baseX + Math.sin(time * 0.005 + i * 0.1) * 15;
        const y = baseY + Math.cos(time * 0.003 + i * 0.2) * 10;

        // Keep circles on screen
        const finalX = Math.max(10, Math.min(canvas.width - 10, x));
        const finalY = Math.max(10, Math.min(canvas.height - 10, y));

        // Tiny radius with slight variation
        const radius = 1.5 + Math.sin(time * 0.008 + i) * 0.5;

        // Gentle glow effect with varying opacity
        const opacity = 0.3 + Math.sin(time * 0.006 + i * 0.5) * 0.2;

        // Create glow effect with multiple circles
        for (let glow = 3; glow >= 1; glow--) {
          const glowRadius = radius + glow * 0.8;
          const glowOpacity = opacity / (glow * 2);

          ctx.fillStyle = `rgba(255, 107, 53, ${glowOpacity})`;
          ctx.beginPath();
          ctx.arc(finalX, finalY, glowRadius, 0, Math.PI * 2);
          ctx.fill();
        }

        // Main bright circle
        ctx.fillStyle = `rgba(255, 107, 53, ${opacity})`;
        ctx.beginPath();
        ctx.arc(finalX, finalY, radius, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const animate = () => {
      drawMovingShapes();
      time++;
      animationId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 z-0 ${className}`}
      style={{ pointerEvents: "none" }}
    />
  );
};

export default MovingPatternCanvas;
