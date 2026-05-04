import React, { useEffect, useRef } from 'react';

const AIWavyLoader = ({ 
  isLoading = true, 
  text = "Desenvolvendo a Resposta...",
  primaryColor = "#3876DF",
  containerClassName = ""
}) => {
  const canvasRef = useRef(null);
  const animationIdRef = useRef(null);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    const animate = () => {
      const width = canvas.width;
      const height = canvas.height;

      ctx.clearRect(0, 0, width, height);

      timeRef.current += 1;
      const t = timeRef.current * 0.06;

      const centerY = height / 2;
      const middleX = width / 2;
      const lineCount = 7;

      // Define unique wave patterns for each line
      const linePatterns = [
        { freq1: 0.022, freq2: 0.045, amp1: 9, amp2: 5, speed1: 1.0, speed2: 1.8, phase: 0 },
        { freq1: 0.028, freq2: 0.014, amp1: 11, amp2: 7, speed1: 1.3, speed2: 0.8, phase: Math.PI / 7 },
        { freq1: 0.018, freq2: 0.036, amp1: 8, amp2: 6, speed1: 0.9, speed2: 1.5, phase: (2 * Math.PI) / 7 },
        { freq1: 0.032, freq2: 0.016, amp1: 10, amp2: 8, speed1: 1.2, speed2: 0.6, phase: (3 * Math.PI) / 7 },
        { freq1: 0.020, freq2: 0.041, amp1: 12, amp2: 4, speed1: 1.1, speed2: 1.9, phase: (4 * Math.PI) / 7 },
        { freq1: 0.026, freq2: 0.013, amp1: 7, amp2: 9, speed1: 1.4, speed2: 0.7, phase: (5 * Math.PI) / 7 },
        { freq1: 0.024, freq2: 0.048, amp1: 10, amp2: 6, speed1: 0.8, speed2: 1.6, phase: (6 * Math.PI) / 7 },
      ];

      // Draw multiple lines all starting from the same centerline
      for (let lineIdx = 0; lineIdx < lineCount; lineIdx++) {
        ctx.beginPath();
        
        const pattern = linePatterns[lineIdx];

        for (let x = 0; x <= width; x += 1) {
          // Calculate how far we are from the edges (0 at edges, 1 in middle)
          const fromLeftEdge = x / (middleX * 0.4);
          const fromRightEdge = (width - x) / (middleX * 0.4);
          const distFromEdge = Math.min(fromLeftEdge, fromRightEdge, 1);
          
          // Only apply waves in the middle area - straight at edges
          const waveFade = distFromEdge * distFromEdge * distFromEdge;

          // Each line has its own unique wave combination
          const wave1 = Math.sin(x * pattern.freq1 - t * pattern.speed1 + pattern.phase) * pattern.amp1;
          const wave2 = Math.sin(x * pattern.freq2 - t * pattern.speed2 + pattern.phase * 2) * pattern.amp2;
          const wave3 = Math.sin(x * (pattern.freq1 * 0.5) - t * (pattern.speed1 * 0.5) + pattern.phase * 3) * (pattern.amp1 * 0.6);
          
          // Chaotic combination of the three waves
          const totalWave = (wave1 + wave2 + wave3) * waveFade;
          
          // All lines start at centerY and spread out from there
          const y = centerY + totalWave;

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        // Simple solid color, no gradient fade
        ctx.strokeStyle = primaryColor;
        ctx.lineWidth = 1.3;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.stroke();
      }

      animationIdRef.current = requestAnimationFrame(animate);
    };

    const container = canvas.parentElement;
    if (container) {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    }

    animate();

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, [primaryColor]);

  if (!isLoading) return null;

  return (
    <div 
      className={`ai-wavy-loader ${containerClassName}`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '16px',
        padding: '24px'
      }}
    >
      {text && (
        <p
          style={{
            margin: 0,
            fontSize: '13px',
            color: 'rgba(180, 180, 180, 0.8)',
            fontWeight: '400',
            letterSpacing: '0.3px',
            textAlign: 'center',
            opacity: 0.8,
            fontFamily: "'Tahoma', sans-serif"
          }}
        >
          {text}
        </p>
      )}
      
      <div
        style={{
          width: '100%',
          maxWidth: '500px',
          height: '60px',
          position: 'relative',
          borderRadius: '0px',
          overflow: 'hidden',
          background: 'transparent',
          border: 'none'
        }}
      >
        <canvas
          ref={canvasRef}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'block'
          }}
        />
      </div>
    </div>
  );
};

export default AIWavyLoader;
