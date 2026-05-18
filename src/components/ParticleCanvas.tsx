import { useEffect, useRef } from 'react';

interface Particle {
  x:number; y:number; vx:number; vy:number;
  r:number; cr:number; cg:number; cb:number; a:number;
}

const COLS = [
  {r:106,g:171,b:133}, // sage
  {r:45, g:110,b:74 }, // green
  {r:200,g:150,b:90 }, // gold
];

export default function ParticleCanvas({ dark = false }: { dark?: boolean }) {
  const ref   = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({x:-999,y:-999});
  const raf   = useRef(0);

  useEffect(()=>{
    const canvas = ref.current!;
    const ctx    = canvas.getContext('2d')!;
    let pts: Particle[] = [];

    const init = ()=>{
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
      const n = Math.min(70, Math.floor(canvas.width*canvas.height/16000));
      pts = Array.from({length:n},()=>{
        const c = COLS[Math.floor(Math.random()*COLS.length)];
        return {
          x:Math.random()*canvas.width, y:Math.random()*canvas.height,
          vx:(Math.random()-.5)*.3, vy:(Math.random()-.5)*.3-.06,
          r:Math.random()*1.6+.4,
          cr:c.r, cg:c.g, cb:c.b,
          a: dark ? Math.random()*.45+.1 : Math.random()*.32+.12,
        };
      });
    };

    const draw = ()=>{
      ctx.clearRect(0,0,canvas.width,canvas.height);
      const {x:mx,y:my} = mouse.current;
      pts.forEach((p,i)=>{
        const dx=p.x-mx, dy=p.y-my, d=Math.sqrt(dx*dx+dy*dy);
        if(d<120&&d>0){ const f=(120-d)/120; p.x+=(dx/d)*f*1.5; p.y+=(dy/d)*f*1.5; }
        p.x+=p.vx; p.y+=p.vy;
        if(p.x<0)p.x=canvas.width; if(p.x>canvas.width)p.x=0;
        if(p.y<0)p.y=canvas.height; if(p.y>canvas.height)p.y=0;
        ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
        ctx.fillStyle=`rgba(${p.cr},${p.cg},${p.cb},${p.a})`; ctx.fill();
        for(let j=i+1;j<pts.length;j++){
          const q=pts[j], cx=p.x-q.x, cy=p.y-q.y, cd=Math.sqrt(cx*cx+cy*cy);
          if(cd<100){
            ctx.beginPath(); ctx.moveTo(p.x,p.y); ctx.lineTo(q.x,q.y);
            const la = dark ? 0.12*(1-cd/100) : 0.06*(1-cd/100);
            ctx.strokeStyle=`rgba(106,171,133,${la})`; ctx.lineWidth=.5; ctx.stroke();
          }
        }
      });
      raf.current=requestAnimationFrame(draw);
    };

    const onMouse=(e:MouseEvent)=>{ mouse.current={x:e.clientX,y:e.clientY}; };
    window.addEventListener('mousemove',onMouse);
    window.addEventListener('resize',init);
    init(); draw();
    return()=>{ cancelAnimationFrame(raf.current); window.removeEventListener('mousemove',onMouse); window.removeEventListener('resize',init); };
  },[dark]);

  return <canvas ref={ref} style={{position:'absolute',inset:0,width:'100%',height:'100%',zIndex:2,pointerEvents:'none'}}/>;
}
