import express, {
  Request,
  Response,
  NextFunction,
  ErrorRequestHandler,
  Application,
} from "express";
import { Server } from "http";
import createHttpError from "http-errors";
import { config } from "dotenv";
config();

const app: Application = express();

app.get("/", (Request, Response, NextFunction) => {
  Response.send("Hello worlds");
});

app.use((Request, Response, NextFunction) => {
  NextFunction(new createHttpError.NotFound());
});

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    status: err.status || 500,
    message: err.message,
  });
};

app.use(errorHandler);

const PORT: Number = Number(process.env.PORT) || 3000;
const server: Server = app.listen(3000, () => {
  console.log(`Running at http://localhost:${PORT}`);
});
