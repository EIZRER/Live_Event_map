import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app'; // adjust path if needed
import './style.css';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
