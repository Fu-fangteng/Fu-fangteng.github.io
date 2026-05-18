/**
 * MagneticWrap — wraps any element and makes it magnetically attract to the cursor.
 */
import { useRef, useCallback, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  strength?: number; // 0–1, how strongly element moves toward cursor
  className?: string;
  style?: React.CSSProperties;
}

export default function MagneticWrap({ children, strength = 0.38, className, style }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current!;
    const r  = el.getBoundingClientRect();
    const cx = r.left + r.width  / 2;
    const cy = r.top  + r.height / 2;
    const dx = (e.clientX - cx) * strength;
    const dy = (e.clientY - cy) * strength;
    el.style.transition = 'transform 0.15s ease';
    el.style.transform  = `translate(${dx}px, ${dy}px)`;
  }, [strength]);

  const onLeave = useCallback(() => {
    const el = ref.current!;
    el.style.transition = 'transform 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    el.style.transform  = '';
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{ display: 'inline-block', ...style }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </div>
  );
}
