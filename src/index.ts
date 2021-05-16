import express from "express";
import Swagger from "swagger-ui-express";

import SwaggerFile from "../swagger.json";
import { usersRoutes } from "./routes/users.routes";

const app = express();

app.use(express.json());

app.use("/api-docs", Swagger.serve, Swagger.setup(SwaggerFile));

app.use("/users", usersRoutes);

export { app };
