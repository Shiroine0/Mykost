import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App.tsx'
// src/main.tsx
import '@fontsource/poppins/400.css'; // regular
import '@fontsource/poppins/700.css'; // bold


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
