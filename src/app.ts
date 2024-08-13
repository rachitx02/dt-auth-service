import express, { NextFunction, Request, Response } from "express";
import logger from "./config/logger";

const app = express();

app.get("/", (req, res) => {
  res.send("HI");
});

app.use((err: unknown, req: Request, res: Response, next: NextFunction) => {
  logger.info(`${err} is error ${req} is request is ${res} is response`);
  next();
});

export default app;
