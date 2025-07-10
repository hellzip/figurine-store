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

    // Generate random positions for circles (seeded for consistency)
    const circleCount = 80;
    const circles: {
      baseX: number;
      baseY: number;
      floatSpeedX: number;
      floatSpeedY: number;
      floatAmplitudeX: number;
      floatAmplitudeY: number;
      sizeVariation: number;
      opacityPhase: number;
    }[] = [];

    // Simple seeded random function for consistent positions
    let seed = 12345;
    const seededRandom = () => {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };

    // Generate random positions for each circle
    for (let i = 0; i < circleCount; i++) {
      circles.push({
        baseX: seededRandom() * window.innerWidth,
        baseY: seededRandom() * window.innerHeight,
        floatSpeedX: 0.005 + seededRandom() * 0.01,
        floatSpeedY: 0.003 + seededRandom() * 0.008,
        floatAmplitudeX: 10 + seededRandom() * 20,
        floatAmplitudeY: 8 + seededRandom() * 15,
        sizeVariation: seededRandom() * 0.5,
        opacityPhase: seededRandom() * Math.PI * 2,
      });
    }

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Update circle positions for new canvas size
      circles.forEach((circle) => {
        if (circle.baseX > canvas.width)
          circle.baseX = seededRandom() * canvas.width;
        if (circle.baseY > canvas.height)
          circle.baseY = seededRandom() * canvas.height;
      });
    };

    const drawMovingShapes = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Pure white background
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw randomly positioned tiny glowing circles
      circles.forEach((circle, i) => {
        // Gentle floating movement using each circle's unique properties
        const x =
          circle.baseX +
          Math.sin(time * circle.floatSpeedX + i * 0.1) *
            circle.floatAmplitudeX;
        const y =
          circle.baseY +
          Math.cos(time * circle.floatSpeedY + i * 0.2) *
            circle.floatAmplitudeY;

        // Keep circles on screen with gentle wrapping
        const finalX = ((x % canvas.width) + canvas.width) % canvas.width;
        const finalY = ((y % canvas.height) + canvas.height) % canvas.height;

        // Tiny radius with individual variation
        const radius = 1.5 + Math.sin(time * 0.008 + i) * circle.sizeVariation;

        // Individual opacity variation
        const opacity =
          0.3 + Math.sin(time * 0.006 + circle.opacityPhase) * 0.2;

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
      });
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
