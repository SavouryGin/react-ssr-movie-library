import { Request, Response } from 'express';

export const render = (_req: Request, res: Response) => {
  res.renderApp();
};
