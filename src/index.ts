import "dotenv/config";
import { server } from "./server";

const startServer = () => {
  server.listen(process.env.PORT || 3333, () =>
    console.log(`Rodando na porta ${process.env.PORT || 3333}`)
  );
};

startServer();
