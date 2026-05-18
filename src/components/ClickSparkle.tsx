import { useEffect, useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import './ClickSparkle.css';

interface Dot { id: number; x: number; y: number; angle: number; color: string; dur: number; dist: number; }
interface Star { id: number; x: number; y: number; dy: number; char: string; }

const COLORS  = ['#6aab85','#2d6e4a','#c8965a','#c5ddd0','#3a8a5e','#f0e4c2'];
const STARS   = ['✦','✿','❋','✺','⊹','✵'];
const DOT_N   = 9;
let uid = 0;

export default function ClickSparkle() {
  const [dots,  setDots]  = useState<Dot[]>([]);
  const [stars, setStars] = useState<Star[]>([]);

  const burst = useCallback((x: number, y: number) => {
    const now = uid;
    uid += DOT_N + 2;

    /* radial dots */
    const newDots: Dot[] = Array.from({ length: DOT_N }, (_, i) => ({
      id:    now + i,
      x, y,
      angle: (i / DOT_N) * 360 + Math.random() * (360 / DOT_N),
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      dur:   0.45 + Math.random() * 0.25,
      dist:  30 + Math.random() * 30,
    }));

    /* floating star characters */
    const newStars: Star[] = Array.from({ length: 2 }, (_, i) => ({
      id:   now + DOT_N + i,
      x:    x + (Math.random() - 0.5) * 30,
      y:    y + (Math.random() - 0.5) * 20,
      dy:  -(35 + Math.random() * 30),
      char: STARS[Math.floor(Math.random() * STARS.length)],
    }));

    setDots(d  => [...d,  ...newDots]);
    setStars(s => [...s, ...newStars]);

    const cleanup = () => {
      const dotIds  = newDots.map(d => d.id);
      const starIds = newStars.map(s => s.id);
      setDots(d  => d.filter(dot  => !dotIds.includes(dot.id)));
      setStars(s => s.filter(star => !starIds.includes(star.id)));
    };
    setTimeout(cleanup, 900);
  }, []);

  useEffect(() => {
    const handler = (e: PointerEvent) => {
      const t = e.target as HTMLElement;
      /* skip clicks on links, buttons, inputs, the pet */
      if (!t.closest('a, button, input, select, .pet-body')) {
        burst(e.clientX, e.clientY);
      }
    };
    window.addEventListener('pointerdown', handler);
    return () => window.removeEventListener('pointerdown', handler);
  }, [burst]);

  return createPortal(
    <>
      {dots.map(d => (
        <div
          key={d.id}
          className="sparkle-dot"
          style={{
            left: d.x, top: d.y,
            background: d.color,
            '--angle': `${d.angle}deg`,
            '--dur':   `${d.dur}s`,
            '--dist':  `${d.dist}px`,
          } as React.CSSProperties}
        />
      ))}
      {stars.map(s => (
        <div
          key={s.id}
          className="sparkle-star"
          style={{
            left: s.x, top: s.y,
            color: COLORS[Math.floor(Math.random() * COLORS.length)],
            '--dy': `${s.dy}px`,
          } as React.CSSProperties}
        >
          {s.char}
        </div>
      ))}
    </>,
    document.body,
  );
}
