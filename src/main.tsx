import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import React from "react";
import ReactDOM from "react-dom/client";

// 新增：挂载鼠标跟随圆点
function addCursorFollower() {
  const dot = document.createElement("div");
  dot.className = "cursor-follower";
  document.body.appendChild(dot);
  document.addEventListener("mousemove", (e) => {
    dot.style.transform = `translate(${e.clientX - 9}px, ${e.clientY - 9}px)`;
  });
}
addCursorFollower();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
