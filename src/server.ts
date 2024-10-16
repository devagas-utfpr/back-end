import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./swaggerConfig";

import "./main/utils/TraducoesYup";

import cors from "cors";
import router from "./main/routes/routes";

const server = express();

server.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

server.use(
  cors({
    origin: "*",
    methods: "*",
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

server.use(express.json());
server.use(router);

export { server };
