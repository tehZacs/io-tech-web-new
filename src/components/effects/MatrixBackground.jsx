import { useEffect, useRef } from 'react';

/**
 * Matrix Background Effect Component
 * - Falling binary digits (1s and 0s) in IO-TECH brand colors
 * - Numbers fill entire screen width with continuous falling effect
 * - Larger font size for better visibility
 * - Optimized for low CPU usage
 */
export const MatrixBackground = ({
  opacity = 0.15  // Background opacity (0 to 1)
}) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();

    // Matrix characters (binary)
    const chars = '01';

    // Larger font size
    const fontSize = 28;
    const columns = Math.floor(canvas.width / fontSize);

    // Array to track position and trail of each column
    const drops = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = {
        y: Math.floor(Math.random() * canvas.height / fontSize), // Start at random positions
        trail: []
      };
    }

    // Gray tones for subtle effect
    const colors = [
      'rgba(120, 130, 145, 1)',     // Light gray-blue
      'rgba(100, 110, 125, 0.9)',   // Medium gray-blue
      'rgba(80, 90, 105, 0.8)',     // Darker gray-blue
      'rgba(60, 70, 85, 0.7)',      // Dark gray-blue
    ];

    // Draw function
    const draw = () => {
      // Deep dark background (#101820)
      ctx.fillStyle = 'rgba(16, 24, 32, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `bold ${fontSize}px monospace`;

      // Draw each column
      for (let i = 0; i < drops.length; i++) {
        const drop = drops[i];

        // Random character (0 or 1)
        const char = chars[Math.floor(Math.random() * chars.length)];

        // Draw trail (fading older characters)
        for (let j = 0; j < drop.trail.length; j++) {
          const trailChar = drop.trail[j];
          const trailAlpha = (drop.trail.length - j) / drop.trail.length;
          const colorIndex = Math.min(j, colors.length - 1);

          // Make older trail characters fade
          ctx.fillStyle = colors[colorIndex].replace(/[\d.]+\)$/g, `${trailAlpha * 0.5})`);

          const x = i * fontSize;
          const y = trailChar.y * fontSize;
          ctx.fillText(trailChar.char, x, y);
        }

        // Draw leading character (brightest)
        ctx.fillStyle = colors[0];
        const x = i * fontSize;
        const y = drop.y * fontSize;
        ctx.fillText(char, x, y);

        // Add to trail
        drop.trail.push({ char, y: drop.y });

        // Limit trail length
        if (drop.trail.length > 15) {
          drop.trail.shift();
        }

        // Move drop down
        drop.y++;

        // Reset drop to top when it reaches bottom
        if (drop.y * fontSize > canvas.height && Math.random() > 0.95) {
          drop.y = 0;
          drop.trail = [];
        }
      }
    };

    // Animation loop with reduced frame rate for CPU efficiency
    let lastTime = 0;
    const fps = 24; // Target 24 FPS for smooth but efficient animation
    const interval = 1000 / fps;

    const animate = (currentTime) => {
      animationRef.current = requestAnimationFrame(animate);

      const deltaTime = currentTime - lastTime;

      if (deltaTime > interval) {
        lastTime = currentTime - (deltaTime % interval);
        draw();
      }
    };

    // Start animation
    animationRef.current = requestAnimationFrame(animate);

    // Handle window resize
    const handleResize = () => {
      setCanvasSize();
      // Recalculate drops array
      const newColumns = Math.floor(canvas.width / fontSize);
      drops.length = newColumns;
      for (let i = 0; i < newColumns; i++) {
        if (!drops[i]) {
          drops[i] = {
            y: Math.floor(Math.random() * canvas.height / fontSize),
            trail: []
          };
        }
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [opacity]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity }}
    />
  );
};
