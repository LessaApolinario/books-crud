import dotenv from 'dotenv';
import express from 'express';
import { loadRoutes } from '../ui/routes';

function startApp() {
  dotenv.config();
  const app = express();
  const port = Number(process.env.SERVER_PORT) || 7000;

  app.use(express.json());
  app.use('/api', loadRoutes());

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

export default startApp;
