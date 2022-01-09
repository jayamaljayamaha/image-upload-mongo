import express from "express";
import ImageRoute from "./routes/images";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import { paths } from "./swagger/SwaggerDoc";
import * as GridFsService from "./services/GridFsService";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.APP_PORT ? parseInt(process.env.APP_PORT) : 3000;

const swaggerJson = {
  openapi: "3.0.1",
  info: {
    version: "1.0.0",
    title: "APIs Document",
    description: "your description here",
    termsOfService: "",
    license: {
      name: "Apache 2.0",
      url: "https://www.apache.org/licenses/LICENSE-2.0.html",
    },
  },
  servers: [
    {
      url: `http://localhost:${PORT}/api`,
      description: "Local server",
    },
  ],
  paths,
};

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerJson));
app.use("/api", ImageRoute);

GridFsService.init();

export default app;
