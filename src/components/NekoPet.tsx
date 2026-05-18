/**
 * NekoPet — pixel dog that chases the cursor.
 * Sprite: /dog_sprite.png  (CC0, Jason of GDN via OpenGameArt)
 *   96×48px, 6 cols × 3 rows of 16×16 tiles
 *   Row 0 cols 0-3: run cycle
 *   Row 1 cols 0-5: idle animation
 *   Row 2 cols 0-3: sleep animation
 *
 * pointer-events: none on the wrapper → never blocks page clicks.
 * Clicking within 44px of the dog shows a speech bubble.
 */
import { useEffect, useRef } from 'react';
import './NekoPet.css';

const TILE    = 16;
const SCALE   = 4;      // 16 * 4 = 64 px per tile on screen
const PX      = TILE * SCALE;   // 64
const BG_W    = 96  * SCALE;    // 384  (background-size width)
const BG_H    = 48  * SCALE;    // 192  (background-size height)

const SPEED      = 2.5;   // px per frame — slow & cute
const CATCH_DIST = 56;    // px — stop chasing when this close
const SLEEP_MS   = 7000;  // ms idle before sleeping

type State = 'idle' | 'run' | 'sleep' | 'happy';

/* ── sprite frame helpers ── */
const frame = (col: number, row: number) =>
  `-${col * PX}px -${row * PX}px`;

const RUN_FRAMES  = [0,1,2,3].map(c => frame(c, 0));
const IDLE_FRAMES = [0,1,2,3,4,5].map(c => frame(c, 1));
const SLEEP_FRAMES= [0,1,2,3].map(c => frame(c, 2));

const QUIPS = [
  'Woof! 🐾','Hello! (≧▽≦)','Treat? 🦴','*wags tail*',
  'Bark bark!','Play with me!','(・`ω´・)','Woof woof!',
];

export default function NekoPet() {
  const rootRef   = useRef<HTMLDivElement>(null);
  const spriteRef = useRef<HTMLDivElement>(null);
  const bubbleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root   = rootRef.current!;
    const sprite = spriteRef.current!;
    const bubble = bubbleRef.current!;

    /* ── sprite setup ── */
    sprite.style.width           = `${PX}px`;
    sprite.style.height          = `${PX}px`;
    sprite.style.backgroundImage = 'url(/dog_sprite.png)';
    sprite.style.backgroundSize  = `${BG_W}px ${BG_H}px`;

    /* ── state ── */
    let cx = window.innerWidth  * 0.82;
    let cy = window.innerHeight * 0.55;
    let mx = window.innerWidth  * 0.5;
    let my = window.innerHeight * 0.5;
    let lastMove   = Date.now();
    let tick       = 0;
    let frameIdx   = 0;
    let frameTimer = 0;
    let state: State = 'idle';
    let facingLeft   = false;
    let bubbleClear: ReturnType<typeof setTimeout> | null = null;
    let raf = 0;

    /* ── helpers ── */
    function setFrame(bp: string) {
      sprite.style.backgroundPosition = bp;
    }

    function setFlip(left: boolean) {
      if (left === facingLeft) return;
      facingLeft = left;
      sprite.style.transform = left ? 'scaleX(-1)' : 'scaleX(1)';
    }

    function showBubble() {
      bubble.textContent = QUIPS[Math.floor(Math.random() * QUIPS.length)];
      bubble.classList.add('show');
      if (bubbleClear) clearTimeout(bubbleClear);
      bubbleClear = setTimeout(() => bubble.classList.remove('show'), 2400);
    }

    /* ── position ── */
    root.style.left = `${cx}px`;
    root.style.top  = `${cy}px`;
    setFrame(IDLE_FRAMES[0]);

    /* ── proximity click ── */
    function onWindowClick(e: MouseEvent) {
      const dx = e.clientX - cx, dy = e.clientY - cy;
      if (Math.sqrt(dx*dx + dy*dy) < 44) {
        state = 'happy';
        showBubble();
        setTimeout(() => { state = 'idle'; }, 1600);
      }
    }

    const onMouse = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY; lastMove = Date.now();
    };
    window.addEventListener('mousemove',  onMouse);
    window.addEventListener('click', onWindowClick);

    /* ── animation loop ── */
    function loop() {
      tick++;
      const now  = Date.now();
      const dx   = mx - cx;
      const dy   = my - cy;
      const dist = Math.sqrt(dx*dx + dy*dy);
      const idleMs = now - lastMove;

      if (state === 'happy') {
        /* bounce rapidly */
        const t = (now - frameTimer) % 400;
        setFrame(RUN_FRAMES[Math.floor(t / 100) % 4]);

      } else if (dist < CATCH_DIST) {
        if (idleMs > SLEEP_MS && state !== 'sleep') {
          state = 'sleep'; frameIdx = 0; frameTimer = now;
        } else if (idleMs <= SLEEP_MS && state === 'sleep') {
          state = 'idle';
        }

        if (state === 'sleep') {
          const f = Math.floor((now - frameTimer) / 600) % SLEEP_FRAMES.length;
          setFrame(SLEEP_FRAMES[f]);
        } else {
          /* idle — cycle slowly */
          const f = Math.floor((now - frameTimer) / 300) % IDLE_FRAMES.length;
          setFrame(IDLE_FRAMES[f]);
        }

      } else {
        /* chasing cursor */
        state = 'run';
        if (idleMs > 200) frameTimer = now;  /* reset idle timer */

        const spd = Math.min(SPEED, dist * 0.1 + 0.4);
        cx += (dx / dist) * spd;
        cy += (dy / dist) * spd;

        /* clamp to viewport */
        const pad = PX / 2;
        cx = Math.max(pad, Math.min(window.innerWidth  - pad, cx));
        cy = Math.max(pad, Math.min(window.innerHeight - pad, cy));

        root.style.left = `${cx}px`;
        root.style.top  = `${cy}px`;

        setFlip(dx < 0);

        /* cycle run frames ~8 fps */
        const f = Math.floor(now / 125) % RUN_FRAMES.length;
        setFrame(RUN_FRAMES[f]);
      }

      raf = requestAnimationFrame(loop);
    }

    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove',  onMouse);
      window.removeEventListener('click', onWindowClick);
      if (bubbleClear) clearTimeout(bubbleClear);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="pet-root"
      style={{ transform: 'translate(-50%, -60%)' }}
    >
      <div ref={bubbleRef} className="pet-bubble" />
      <div className="pet-click-zone" />
      <div ref={spriteRef} className="pet-sprite" />
    </div>
  );
}
