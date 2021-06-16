import "reflect-metadata";

import express, { NextFunction, Request, Response } from 'express';
// depois do express
import "express-async-errors";

import "@shared/container";
import { AppError } from "@shared/errors/AppError";

import createConnection from "@shared/infra/typeorm";

import { router } from '@shared/infra/http/routes';

createConnection();


const app = express();

app.use(express.json()); // antes das rotas
app.use(router);

app.use(
  (
    err: Error,
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message
      })
    }
    return response.status(500).json({
      status: "error",
      message: `Erro interno do servidor - ${err.message}`
    })
  });

app.listen(3333, () => {
  console.log('Server started on port 3333!');
});
