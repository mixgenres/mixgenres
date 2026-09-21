
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { preloadSoundfont } from './engine/audio';

// Start downloading public/soundfont.sf2 right away
preloadSoundfont().catch(() => {});

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

