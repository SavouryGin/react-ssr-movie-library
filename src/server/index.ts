import express from 'express';
import { hot } from 'server/middleware';
import { router } from 'server/router';

export const app = express();
app.use(hot());
app.use(router);

app.listen(3000, () => {
  console.log('App is started on localhost:3000');
});
