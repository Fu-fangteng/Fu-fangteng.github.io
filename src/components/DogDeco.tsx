/**
 * DogDeco — decorative pixel dogs using /dog_sprite.png (CC0, OpenGameArt)
 * Sprite: 96×48px, 16×16 tiles, 6 cols × 3 rows
 *   Row 0 cols 0-3 = run frames
 *   Row 1 cols 0-5 = idle frames
 *   Row 2 cols 0-3 = sleep frames
 */
import './DogDeco.css';

const TILE  = 16;

function bpos(col: number, row: number, scale: number) {
  return `-${col * TILE * scale}px -${row * TILE * scale}px`;
}

interface SpriteProps {
  size?: number;         // display size of one tile in px (default 64)
  className?: string;
  style?: React.CSSProperties;
  'aria-hidden'?: boolean;
}

function SpriteBase({
  size = 64, bgPos, animClass, className = '', style,
}: SpriteProps & { bgPos: string; animClass: string }) {
  const scale = size / TILE;
  return (
    <div
      className={`dog-deco-sprite ${animClass} ${className}`}
      aria-hidden
      style={{
        width: size, height: size,
        backgroundSize: `${96 * scale}px ${48 * scale}px`,
        backgroundPosition: bgPos,
        ...style,
      }}
    />
  );
}

/* ── Sitting / idle dog ── */
export function DogSitting({ size = 64, className, style }: SpriteProps) {
  const s = size / TILE;
  const f = (c: number) => bpos(c, 1, s);  // idle row
  return (
    <div
      className={`dog-deco-sprite dog-sit ${className ?? ''}`}
      aria-hidden
      style={{
        width: size, height: size,
        backgroundSize: `${96*s}px ${48*s}px`,
        '--f0': f(0), '--f1': f(1), '--f2': f(2),
        '--f3': f(3), '--f4': f(4), '--f5': f(5),
        backgroundPosition: f(0),
        ...style,
      } as React.CSSProperties}
    />
  );
}

/* ── Running dog ── */
export function DogRunning({ size = 64, className, style }: SpriteProps) {
  const s = size / TILE;
  const r = (c: number) => bpos(c, 0, s);  // run row
  return (
    <div
      className={`dog-deco-sprite dog-run ${className ?? ''}`}
      aria-hidden
      style={{
        width: size, height: size,
        backgroundSize: `${96*s}px ${48*s}px`,
        '--r0': r(0), '--r1': r(1), '--r2': r(2), '--r3': r(3),
        backgroundPosition: r(0),
        ...style,
      } as React.CSSProperties}
    />
  );
}

/* ── Sleeping dog ── */
export function DogSleeping({ size = 64, className, style }: SpriteProps) {
  const s = size / TILE;
  const sl = (c: number) => bpos(c, 2, s);  // sleep row
  return (
    <div
      className={`dog-deco-sprite dog-sleep ${className ?? ''}`}
      aria-hidden
      style={{
        width: size, height: size,
        backgroundSize: `${96*s}px ${48*s}px`,
        '--s0': sl(0), '--s1': sl(1), '--s2': sl(2), '--s3': sl(3),
        backgroundPosition: sl(0),
        ...style,
      } as React.CSSProperties}
    />
  );
}

/* ── Peeking dog (clipped, peeks upward) ── */
export function DogPeeking({ size = 64, className, style }: SpriteProps) {
  const s = size / TILE;
  return (
    <div
      className={`dog-deco-sprite dog-peek ${className ?? ''}`}
      aria-hidden
      style={{
        width: size, height: size,
        backgroundSize: `${96*s}px ${48*s}px`,
        backgroundPosition: bpos(2, 1, s),
        ...style,
      } as React.CSSProperties}
    />
  );
}

/* ── Sleeping dog with Zzz ── */
export function DogSleepingWithZzz({ size = 64, className, style }: SpriteProps) {
  return (
    <div style={{ display:'flex', alignItems:'flex-end', gap:'4px', ...style }} className={className}>
      <DogSleeping size={size} />
      <div style={{ display:'flex', flexDirection:'column', alignItems:'flex-start', marginBottom:'4px', gap:'2px' }}>
        <span className="zzz-float">z</span>
        <span className="zzz-float">z</span>
        <span className="zzz-float">z</span>
      </div>
    </div>
  );
}

/* backwards compat aliases */
export { DogSitting as DogWaving, DogPeeking as DogReading };
