import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import routes from './src/routes/index';
import './src/database/connection.ts';
import bodyParser from 'body-parser';
import { errors } from 'celebrate';
import AppError from './src/api/middlewares/AppError';
import cors from 'cors';

const app = express();

// Habilitar CORS
app.use(
  cors({
    origin: 'http://localhost:3000', // Permitir requisições apenas deste domínio
  }),
);

// Middleware para analisar o corpo das requisições
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rotas da aplicação
app.use(routes);

// Tratamento de erros do Celebrate
app.use(errors());

// Middleware para tratamento de erros globais
app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.code).json({
        code: error.code,
        status: 'error',
        message: error.message,
      });
    }

    console.log(error);
    return response.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  },
);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
