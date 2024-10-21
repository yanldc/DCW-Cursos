import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import AuthController from '../api/controllers/authController';
import UserController from '../api/controllers/userController';

const authRouter = Router();
const authController = new AuthController();
const userController = new UserController();

authRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().required().email(),
      password: Joi.string().required(),
    },
  }),
  authController.login,
);

authRouter.post(
  '/register',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      birth: Joi.date().required(),
      email: Joi.string().required().email(),
      password: Joi.string().required().min(6),
    },
  }),
  userController.create,
);

export default authRouter;
