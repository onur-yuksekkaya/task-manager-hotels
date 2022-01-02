import { Router } from "express";

import authRouter from "./auth";
import taskRouter from "./task";
import employeeRouter from "./employee";

const routes = Router();

routes.use("/auth", authRouter);
routes.use("/tasks", taskRouter);
routes.use("/employee", employeeRouter);

export default routes;
