import React from 'react';
import { ChunkExtractor } from '@loadable/server';
import { NextFunction, Request, Response } from 'express';
import { SUCCESS_CODE } from 'src/server/constants';
import { StaticRouter } from 'react-router-dom/server';
import { getApp, getHtml, getStats } from './render.util';
import { renderToString } from 'react-dom/server';

export const render = (req: Request, res: Response, next: NextFunction) => {
  const chunkExtractor = new ChunkExtractor(getStats(res));
  const { App } = getApp(res);

  res.renderApp = () => {
    const location = req.url;
    const jsx = chunkExtractor.collectChunks(
      <StaticRouter location={location}>
        <App />
      </StaticRouter>,
    );
    const reactHtml = renderToString(jsx);

    res.status(SUCCESS_CODE).send(getHtml(reactHtml, chunkExtractor));
  };

  next();
};
