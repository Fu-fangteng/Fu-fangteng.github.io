import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Papers from "./pages/Papers";
import Contact from "./pages/Contact";
import TextCursor from "./pages/TextCursor";
import NekoPet from "./components/NekoPet";
import ClickSparkle from "./components/ClickSparkle";
import "./App.css";

/* ── Konami Code easter egg ── */
const KONAMI = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];

function KonamiEgg() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const buf: string[] = [];
    const handler = (e: KeyboardEvent) => {
      buf.push(e.key);
      if (buf.length > KONAMI.length) buf.shift();
      if (buf.join(',') === KONAMI.join(',')) {
        setActive(true);
        setTimeout(() => setActive(false), 3500);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  if (!active) return null;
  return (
    <div style={{
      position:'fixed', inset:0, zIndex:99999,
      display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',
      background:'rgba(248,243,233,0.94)', backdropFilter:'blur(10px)',
      pointerEvents:'none',
    }}>
      <style>{`
        @keyframes konamiIn { from{opacity:0;transform:scale(.6)} to{opacity:1;transform:scale(1)} }
        @keyframes bounce { 0%,100%{transform:translateY(0)} 40%{transform:translateY(-18px)} }
      `}</style>
      <div style={{fontSize:'5rem', animation:'bounce 0.6s ease-in-out 3', marginBottom:'1rem'}}>🎊</div>
      <div style={{fontFamily:"'Fraunces',serif", fontWeight:900, fontSize:'clamp(2rem,5vw,3.5rem)', color:'#2d6e4a', letterSpacing:'-2px', animation:'konamiIn 0.4s cubic-bezier(0.34,1.56,0.64,1)'}}>
        ↑↑↓↓←→←→BA
      </div>
      <div style={{color:'#3d5944', marginTop:'1rem', fontSize:'1.1rem', fontWeight:500}}>
        You found the secret! 🌿 Magnus approves.
      </div>
    </div>
  );
}

/* ── Text selection easter egg ── */
function SelectionEgg() {
  const [tip, setTip] = useState<{text:string; x:number; y:number} | null>(null);

  useEffect(() => {
    const TRIGGERS: Record<string, string> = {
      'magnus':   '👋 Hey, that\'s me!',
      'fangteng': '符芳腾 — my full name!',
      'acl 2025': '🏆 Two papers accepted!',
      'nlp':      '🤖 My research home',
      'frisbee':  '🥏 Team captain!',
      'hkust':    '🎓 My university',
    };

    const handler = () => {
      const sel = window.getSelection();
      if (!sel || sel.isCollapsed) { setTip(null); return; }
      const text = sel.toString().trim().toLowerCase();
      const match = Object.keys(TRIGGERS).find(k => text.includes(k));
      if (match) {
        const range = sel.getRangeAt(0);
        const rect  = range.getBoundingClientRect();
        setTip({ text: TRIGGERS[match], x: rect.left + rect.width / 2, y: rect.top - 12 });
        setTimeout(() => setTip(null), 2500);
      } else {
        setTip(null);
      }
    };

    document.addEventListener('selectionchange', handler);
    return () => document.removeEventListener('selectionchange', handler);
  }, []);

  if (!tip) return null;
  return (
    <div style={{
      position:'fixed', left: tip.x, top: tip.y, zIndex:9998,
      transform:'translate(-50%,-100%)',
      background:'var(--green)', color:'#f8f3e9',
      padding:'5px 12px', borderRadius:'20px',
      fontSize:'0.8rem', fontWeight:600, whiteSpace:'nowrap',
      boxShadow:'0 4px 14px rgba(45,110,74,0.3)',
      pointerEvents:'none',
      animation:'selEggIn 0.25s cubic-bezier(0.34,1.56,0.64,1)',
      fontFamily:"'Plus Jakarta Sans',sans-serif",
    }}>
      <style>{`@keyframes selEggIn{from{opacity:0;transform:translate(-50%,-80%) scale(0.7)}to{opacity:1;transform:translate(-50%,-100%) scale(1)}}`}</style>
      {tip.text}
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <TextCursor text="✿" spacing={90} maxPoints={5} />
          <Routes>
            <Route path="/"         element={<Home />} />
            <Route path="/about"    element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/papers"   element={<Papers />} />
            <Route path="/contact"  element={<Contact />} />
          </Routes>
        </main>

        {/* ── Global interactive layers ── */}
        <NekoPet />
        <ClickSparkle />
        <KonamiEgg />
        <SelectionEgg />
      </div>
    </Router>
  );
}

export default App;
