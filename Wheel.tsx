import React, { useEffect, useRef, useState } from 'react';
import { Player } from '../types';

interface WheelProps {
  players: Player[];
  onFinished: (playerIndex: number) => void;
  isSpinning: boolean;
}

const COLORS = [
  '#f43f5e', '#3b82f6', '#10b981', '#f59e0b', 
  '#8b5cf6', '#ec4899', '#06b6d4', '#84cc16'
];

export const Wheel: React.FC<WheelProps> = ({ players, onFinished, isSpinning }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [angle, setAngle] = useState(0);
  const angleRef = useRef(0);
  const spinningRef = useRef(false);
  const velocityRef = useRef(0);
  const [tickerAngle, setTickerAngle] = useState(0); // Offset for the visual ticker bounce

  const drawWheel = (ctx: CanvasRenderingContext2D, currentAngle: number) => {
    const size = ctx.canvas.width;
    const center = size / 2;
    const radius = center - 20;
    const sliceAngle = (2 * Math.PI) / players.length;

    ctx.clearRect(0, 0, size, size);

    // Outer Rim Shadow
    ctx.beginPath();
    ctx.arc(center, center, radius + 10, 0, 2 * Math.PI);
    ctx.fillStyle = '#1e293b';
    ctx.shadowBlur = 20;
    ctx.shadowColor = 'rgba(0,0,0,0.5)';
    ctx.fill();
    ctx.shadowBlur = 0;

    players.forEach((player, i) => {
      ctx.beginPath();
      // Gradient for each slice to give depth
      const grad = ctx.createRadialGradient(center, center, radius * 0.2, center, center, radius);
      grad.addColorStop(0, COLORS[i % COLORS.length]);
      grad.addColorStop(1, adjustColor(COLORS[i % COLORS.length], -30));
      
      ctx.fillStyle = grad;
      ctx.moveTo(center, center);
      ctx.arc(center, center, radius, currentAngle + i * sliceAngle, currentAngle + (i + 1) * sliceAngle);
      ctx.fill();
      
      // Separator line
      ctx.strokeStyle = 'rgba(255,255,255,0.2)';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Text rendering
      ctx.save();
      ctx.translate(center, center);
      ctx.rotate(currentAngle + i * sliceAngle + sliceAngle / 2);
      ctx.textAlign = 'right';
      ctx.fillStyle = 'white';
      ctx.shadowBlur = 4;
      ctx.shadowColor = 'rgba(0,0,0,0.4)';
      ctx.font = 'bold 18px "Plus Jakarta Sans"';
      
      // Truncate name if too long
      const displayName = player.name.length > 10 ? player.name.substring(0, 8) + '..' : player.name;
      ctx.fillText(displayName, radius - 35, 6);
      ctx.restore();
    });

    // Inner Shadow (inset effect)
    ctx.beginPath();
    const innerGrad = ctx.createRadialGradient(center, center, radius * 0.8, center, center, radius);
    innerGrad.addColorStop(0, 'rgba(0,0,0,0)');
    innerGrad.addColorStop(1, 'rgba(0,0,0,0.2)');
    ctx.fillStyle = innerGrad;
    ctx.arc(center, center, radius, 0, 2 * Math.PI);
    ctx.fill();

    // Center Hub (More premium look)
    const hubRadius = 25;
    ctx.beginPath();
    const hubGrad = ctx.createLinearGradient(center - hubRadius, center - hubRadius, center + hubRadius, center + hubRadius);
    hubGrad.addColorStop(0, '#475569');
    hubGrad.addColorStop(1, '#0f172a');
    ctx.fillStyle = hubGrad;
    ctx.arc(center, center, hubRadius, 0, 2 * Math.PI);
    ctx.fill();
    
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 4;
    ctx.stroke();

    // Hub core decoration
    ctx.beginPath();
    ctx.fillStyle = '#ffffff';
    ctx.arc(center, center, 4, 0, 2 * Math.PI);
    ctx.fill();
  };

  // Helper to darken colors for gradients
  const adjustColor = (hex: string, amt: number) => {
    let useHash = false;
    if (hex[0] === "#") {
      hex = hex.slice(1);
      useHash = true;
    }
    const num = parseInt(hex, 16);
    let r = (num >> 16) + amt;
    if (r > 255) r = 255; else if (r < 0) r = 0;
    let b = ((num >> 8) & 0x00FF) + amt;
    if (b > 255) b = 255; else if (b < 0) b = 0;
    let g = (num & 0x0000FF) + amt;
    if (g > 255) g = 255; else if (g < 0) g = 0;
    return (useHash ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const resize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        const dpr = window.devicePixelRatio || 1;
        const rect = parent.getBoundingClientRect();
        const minDim = Math.min(rect.width, rect.height) * 0.9;
        canvas.width = minDim * dpr;
        canvas.height = minDim * dpr;
        canvas.style.width = `${minDim}px`;
        canvas.style.height = `${minDim}px`;
        ctx.scale(dpr, dpr);
        drawWheel(ctx, angle);
      }
    };
    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, [players, angle]);

  useEffect(() => {
    if (isSpinning && !spinningRef.current) {
      spinningRef.current = true;
      // High initial velocity
      velocityRef.current = 0.35 + Math.random() * 0.45;
      
      let lastTime = performance.now();
      const animate = (time: number) => {
        const delta = time - lastTime;
        lastTime = time;
        
        // Physics update
        const prevAngle = angleRef.current;
        angleRef.current += velocityRef.current;
        setAngle(angleRef.current);

        // Visual Ticker Interaction Logic
        const sliceAngle = (2 * Math.PI) / players.length;
        const currentSlice = Math.floor(angleRef.current / sliceAngle);
        const prevSlice = Math.floor(prevAngle / sliceAngle);
        
        // If a new slice crossed the 0/2PI point (right side arrow)
        if (currentSlice !== prevSlice) {
          setTickerAngle(-15); // Kick the ticker back
        } else {
          setTickerAngle(prev => prev * 0.85); // Let ticker snap back with damping
        }
        
        // Friction - smooth deceleration
        velocityRef.current *= (0.982 + Math.random() * 0.003);
        
        if (velocityRef.current < 0.001) {
          spinningRef.current = false;
          velocityRef.current = 0;
          setTickerAngle(0);
          
          const currentTotalAngle = angleRef.current;
          const normalizedAngle = (currentTotalAngle % (2 * Math.PI));
          const winnerIndex = (players.length - Math.floor(normalizedAngle / sliceAngle)) % players.length;
          
          setTimeout(() => onFinished(winnerIndex), 500);
        } else {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isSpinning, players.length, onFinished]);

  return (
    <div className="relative flex items-center justify-center w-full aspect-square max-w-md mx-auto p-4">
      {/* Glow background */}
      <div className="absolute inset-0 bg-white/5 rounded-full blur-[60px] animate-pulse"></div>
      
      {/* Main Canvas */}
      <canvas ref={canvasRef} className="z-10 relative drop-shadow-[0_25px_25px_rgba(0,0,0,0.5)]" />
      
      {/* Visual Ticker (The Arrow) */}
      <div 
        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center transition-transform duration-75 origin-right"
        style={{ transform: `translateY(-50%) rotate(${tickerAngle}deg)` }}
      >
        <div className="relative">
          {/* Main Ticker Shape */}
          <div 
            className="w-10 h-12 bg-white drop-shadow-lg"
            style={{ clipPath: 'polygon(100% 50%, 0 0, 20% 50%, 0 100%)' }}
          ></div>
          {/* Ticker Accent */}
          <div 
            className="absolute inset-0 bg-slate-900 opacity-20"
            style={{ clipPath: 'polygon(100% 50%, 0 20%, 20% 50%, 0 80%)' }}
          ></div>
        </div>
      </div>
      
      {/* Decorative Outer Ring (Static) */}
      <div className="absolute inset-2 border-[12px] border-white/5 rounded-full pointer-events-none z-0"></div>
    </div>
  );
};