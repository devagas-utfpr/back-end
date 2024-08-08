import { Router } from "express";
import { PrismaEmpresaRepository } from "../../infrastructure/services/EmpresaServices";
import { EmpresaController } from "../../presentation/controllers/EmpresaController";

const router = Router();
const empresaRepository = new PrismaEmpresaRepository();
const empresaController = new EmpresaController(empresaRepository);

router.get("/empresas", (req, res) =>
  empresaController.getAll(res)
);

export default router;
