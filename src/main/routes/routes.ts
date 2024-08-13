import { Router } from "express";
import { EmpresaController } from "../../presentation/controllers/empresa";

const router = Router();

router.post(
  "/empresas",
  EmpresaController.createValidation,
  EmpresaController.create
);

router.get(
  "/empresas",
  EmpresaController.getAllValidation,
  EmpresaController.getAll
);

router.get(
  "/empresas/:uuid",
  EmpresaController.getByUUIDValidation,
  EmpresaController.getByUUID
);

router.put(
  "/empresas/:uuid",
  EmpresaController.updateByUUIDValidation,
  EmpresaController.updateByUUID
);

router.delete(
  "/empresas/:uuid",
  EmpresaController.deleteByUUIDValidation,
  EmpresaController.deleteByUUID
);

export default router;
