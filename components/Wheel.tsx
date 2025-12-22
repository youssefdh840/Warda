
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
  const angleRef = useRef(0);
  const spinningRef = useRef(false);
  const velocityRef = useRef(0);
  const [tickerAngle, setTickerAngle] = useState(0);

  const drawWheel = (ctx: CanvasRenderingContext2D, currentAngle: number) => {
    const dpr = window.devicePixelRatio || 1;
    // Logical size for drawing logic
    const logicalSize = ctx.canvas.width / dpr;
    const center = logicalSize / 2;
    const radius = center - 25;
    const sliceAngle = (2 * Math.PI) / players.length;

    // Reset transform to identity then apply DPR scale
    // This prevents "scale stacking" which causes the small wheel bug
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, logicalSize, logicalSize);

    // Outer Glow Circle
    ctx.beginPath();
    ctx.arc(center, center, radius + 10, 0, 2 * Math.PI);
    ctx.fillStyle = '#0f172a';
    ctx.shadowBlur = 25;
    ctx.shadowColor = 'rgba(0,0,0,0.6)';
    ctx.fill();
    ctx.shadowBlur = 0;

    players.forEach((player, i) => {
      const startAngle = currentAngle + i * sliceAngle;
      const endAngle = startAngle + sliceAngle;
      
      ctx.beginPath();
      const baseColor = COLORS[i % COLORS.length];
      
      const grad = ctx.createRadialGradient(center, center, radius * 0.1, center, center, radius);
      grad.addColorStop(0, baseColor);
      grad.addColorStop(1, adjustColor(baseColor, -60));
      
      ctx.fillStyle = grad;
      ctx.moveTo(center, center);
      ctx.arc(center, center, radius, startAngle, endAngle);
      ctx.fill();
      
      ctx.strokeStyle = 'rgba(255,255,255,0.2)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Labels
      ctx.save();
      ctx.translate(center, center);
      ctx.rotate(startAngle + sliceAngle / 2);
      ctx.textAlign = 'right';
      ctx.fillStyle = 'white';
      ctx.font = 'bold 16px "Plus Jakarta Sans", sans-serif';
      ctx.shadowBlur = 4;
      ctx.shadowColor = 'rgba(0,0,0,0.5)';
      
      const displayName = player.name.length > 10 ? player.name.substring(0, 8) + '..' : player.name;
      ctx.fillText(displayName, radius - 30, 6);
      ctx.restore();
    });

    // Outer Frame
    ctx.beginPath();
    ctx.arc(center, center, radius, 0, 2 * Math.PI);
    ctx.strokeStyle = 'rgba(255,255,255,0.15)';
    ctx.lineWidth = 8;
    ctx.stroke();

    // Center Hub
    const hubRadius = 24;
    ctx.beginPath();
    const hubGrad = ctx.createLinearGradient(center - hubRadius, center - hubRadius, center + hubRadius, center + hubRadius);
    hubGrad.addColorStop(0, '#475569');
    hubGrad.addColorStop(1, '#020617');
    ctx.fillStyle = hubGrad;
    ctx.arc(center, center, hubRadius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 4;
    ctx.stroke();

    ctx.beginPath();
    ctx.fillStyle = '#ffffff';
    ctx.arc(center, center, 4, 0, 2 * Math.PI);
    ctx.fill();
  };

  const adjustColor = (hex: string, amt: number) => {
    let useHash = false;
    if (hex[0] === "#") { hex = hex.slice(1); useHash = true; }
    const num = parseInt(hex, 16);
    let r = (num >> 16) + amt;
    if (r > 255) r = 255; else if (r < 0) r = 0;
    let b = ((num >> 8) & 0x00FF) + amt;
    if (b > 255) b = 255; else if (b < 0) b = 0;
    let g = (num & 0x0000FF) + amt;
    if (g > 255) g = 255; else if (g < 0) g = 0;
    return (useHash ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16).padStart(6, '0');
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;
    
    const resize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        const dpr = window.devicePixelRatio || 1;
        const rect = parent.getBoundingClientRect();
        // Use the smaller dimension to keep it circular and centered
        const logicalSize = Math.min(rect.width, rect.height) || 300;
        
        canvas.width = logicalSize * dpr;
        canvas.height = logicalSize * dpr;
        canvas.style.width = `${logicalSize}px`;
        canvas.style.height = `${logicalSize}px`;
        
        drawWheel(ctx, angleRef.current);
      }
    };
    
    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, [players]);

  useEffect(() => {
    if (isSpinning && !spinningRef.current) {
      spinningRef.current = true;
      velocityRef.current = 0.3 + Math.random() * 0.4;
      
      const animate = () => {
        if (!velocityRef.current) return;
        
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        if (!ctx) return;

        const prevAngle = angleRef.current;
        angleRef.current += velocityRef.current;
        
        const sliceAngle = (2 * Math.PI) / players.length;
        const currentSliceBoundary = Math.floor(angleRef.current / sliceAngle);
        const prevSliceBoundary = Math.floor(prevAngle / sliceAngle);
        
        if (currentSliceBoundary !== prevSliceBoundary) {
          setTickerAngle(-25);
        } else {
          setTickerAngle(prev => prev * 0.85);
        }

        velocityRef.current *= 0.985;
        drawWheel(ctx, angleRef.current);
        
        if (velocityRef.current < 0.0015) {
          spinningRef.current = false;
          velocityRef.current = 0;
          setTickerAngle(0);
          
          const normalizedAngle = ((angleRef.current % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
          const winnerIndex = Math.floor(((2 * Math.PI - normalizedAngle) % (2 * Math.PI)) / sliceAngle) % players.length;
          
          setTimeout(() => onFinished(winnerIndex), 800);
        } else {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isSpinning, players.length, onFinished]);

  return (
    <div className="relative flex items-center justify-center w-full aspect-square max-w-[340px] mx-auto overflow-visible">
      <div className={`absolute inset-0 rounded-full blur-[80px] transition-all duration-1000 ${isSpinning ? 'bg-emerald-400 opacity-40 scale-110' : 'bg-emerald-600 opacity-20 scale-100'}`}></div>
      
      <canvas ref={canvasRef} className="z-10 relative" />
      
      <div 
        className="absolute right-[-10px] top-1/2 -translate-y-1/2 z-20 transition-transform duration-75 origin-right pointer-events-none drop-shadow-xl"
        style={{ transform: `translateY(-50%) rotate(${tickerAngle}deg)` }}
      >
        <div 
          className="w-12 h-10 bg-white"
          style={{ clipPath: 'polygon(100% 50%, 0 15%, 35% 50%, 0 85%)' }}
        ></div>
      </div>
    </div>
  );
};
