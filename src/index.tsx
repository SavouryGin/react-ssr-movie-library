import React from 'react';
import App from 'components/app';
import { createRoot } from 'react-dom/client';

// React 18 new root API
const rootContainer = document.getElementById('root');
if (!rootContainer) throw new Error('Failed to find the root element.');

const root = createRoot(rootContainer);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
