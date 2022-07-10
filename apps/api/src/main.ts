/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import {apiRouter} from './app/api-router';

const app = express();

app.use('/api', apiRouter);

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
