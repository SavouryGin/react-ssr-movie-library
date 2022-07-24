import App from '@shared/app';
import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { loadableReady } from '@loadable/component';

loadableReady(() => {
  const container = document.getElementById('root') as HTMLElement;

  if (IS_SPA) {
    createRoot(container).render(<App />);
  } else {
    hydrateRoot(container, <App />);
  }
});
