import express, { Express } from "express";
import { userRouter } from "./users/users";
import { Server } from "http";

//	Entry class
/** This is entry class for run app */
export class App {
  app: Express;
  server: Server;
  port: number;

  constructor() {
    this.app = express();
    this.port = 8000;
  }

  useRoutes() {
    this.app.use("/users", userRouter);
  }

  public async init() {
    this.useRoutes();
    this.server = this.app.listen(this.port);
    console.log(`Server started at https://localhost:${this.port}`);
  }
}
