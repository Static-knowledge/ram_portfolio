import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import SplashCursor from './components/SplashCursor.tsx'; // 👈 Import your cursor
import './index.css';

createRoot(document.getElementById("root")!).render(
  <div className="relative">
    <SplashCursor /> {/*  cursor animation */}
    <App />
  </div>
);
