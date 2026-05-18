import { useEffect, useRef, useState, useCallback } from 'react';
import './PetFollower.css';

const SPEED        = 4.5;
const CATCH_DIST   = 58;
const SLEEP_DELAY  = 6000; // ms of mouse inactivity before sleeping

type State = 'running' | 'idle' | 'sleeping' | 'happy';

const QUIPS = [
  'Woof! 🐾', 'Hello friend!', 'Play?  (≧∇≦)', 'I like you!',
  'ᕙ(⇀‸↼‶)ᕗ', '*wags tail*', 'Yay!! 🎉', 'Pet me~~',
];

export default function PetFollower() {
  /* raw refs for rAF loop — no re-render on every frame */
  const posRef   = useRef({ x: typeof window !== 'undefined' ? window.innerWidth * 0.82 : 800, y: 500 });
  const mouseRef = useRef({ x: -999, y: -999 });
  const lastMove = useRef(Date.now());
  const rafRef   = useRef(0);

  /* rendered state — updated only when something meaningful changes */
  const [pos,      setPos]      = useState(posRef.current);
  const [flip,     setFlip]     = useState(false);
  const [petState, setPetState] = useState<State>('idle');
  const [bubble,   setBubble]   = useState<string | null>(null);

  const showBubble = useCallback((text: string) => {
    setBubble(text);
    setTimeout(() => setBubble(null), 2200);
  }, []);

  /* click on pet */
  const handleClick = useCallback(() => {
    setPetState('happy');
    showBubble(QUIPS[Math.floor(Math.random() * QUIPS.length)]);
    setTimeout(() => setPetState('idle'), 1600);
  }, [showBubble]);

  /* animation loop */
  useEffect(() => {
    const onMouse = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      lastMove.current = Date.now();
    };
    window.addEventListener('mousemove', onMouse);

    const tick = () => {
      const p  = posRef.current;
      const m  = mouseRef.current;
      const dx = m.x - p.x;
      const dy = m.y - p.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const idleMs = Date.now() - lastMove.current;

      if (idleMs > SLEEP_DELAY) {
        setPetState(s => s === 'sleeping' ? s : 'sleeping');
      } else if (dist > CATCH_DIST) {
        /* move toward cursor */
        const spd = Math.min(SPEED, dist * 0.13 + 0.8);
        p.x += (dx / dist) * spd;
        p.y += (dy / dist) * spd;
        setPos({ x: p.x, y: p.y });
        setFlip(dx < 0);
        setPetState(s => s === 'running' ? s : 'running');
      } else {
        setPetState(s => (s === 'running') ? 'idle' : s);
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('mousemove', onMouse);
    };
  }, []);

  const emoji = petState === 'sleeping' ? '🦕' : '🦕';

  return (
    <div
      className={`pet-wrap ${petState}`}
      style={{
        left: pos.x,
        top:  pos.y,
        transform: `translate(-50%,-50%) scaleX(${flip ? -1 : 1})`,
      }}
    >
      <div className="pet-body" onClick={handleClick} title="Click me!">
        {bubble   && <div className="pet-bubble">{bubble}</div>}
        {petState === 'sleeping' && <span className="pet-zzz">💤</span>}
        <span className="pet-emoji" style={{ filter: petState === 'sleeping' ? 'grayscale(0.4)' : undefined }}>
          {emoji}
        </span>
      </div>
    </div>
  );
}
