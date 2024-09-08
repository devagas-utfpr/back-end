import swaggerJSDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Documentation",
      version: "1.0.0",
    },
  },
  apis: ["./src/main/routes/*.ts"], // Caminho para os arquivos de rotas
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
