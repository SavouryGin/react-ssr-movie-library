import App from '@shared/app';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { loadableReady } from '@loadable/component';

loadableReady(() => {
  const rootContainer = document.getElementById('root') as HTMLElement;
  const appContainer = (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  if (IS_SPA) {
    createRoot(rootContainer).render(appContainer);
  } else {
    hydrateRoot(rootContainer, appContainer);
  }
});
