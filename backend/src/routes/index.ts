import { Router } from 'express';
import authRouter from './authRouter';
import ensureAuthenticated from 'api/middlewares/ensureAuthenticated';

const routes = Router();

// Rotas da API
routes.use('/auth', authRouter);

export default routes;
