import { Router } from "express";
import { EmpresaController } from "../../presentation/controllers/empresa";
import { UsuarioController } from "../../presentation/controllers/usuario";
import { CargoController } from "../../presentation/controllers/cargo";


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

router.post(
  "/usuarios",
  UsuarioController.createValidation,
  UsuarioController.create
);

router.get(
  "/usuarios",
  UsuarioController.getAllValidation,
  UsuarioController.getAll
);

router.get(
  "/usuarios/:uuid",
  UsuarioController.getByUUIDValidation,
  UsuarioController.getByUUID
);

router.put(
  "/usuarios/:uuid",
  UsuarioController.updateByUUIDValidation,
  UsuarioController.updateByUUID
);

router.delete(
  "/usuarios/:uuid",
  UsuarioController.deleteByUUIDValidation,
  UsuarioController.deleteByUUID
);

router.post(
  "/cargos",
  CargoController.createValidation,
  CargoController.create
);

router.get(
  "/cargos",
  CargoController.getAllValidation,
  CargoController.getAll
);

router.get(
  "/cargos/:uuid",
  CargoController.getByUUIDValidation,
  CargoController.getByUUID
);

router.put(
  "/cargos/:uuid",
  CargoController.updateByUUIDValidation,
  CargoController.updateByUUID
);

router.delete(
  "/cargos/:uuid",
  CargoController.deleteByUUIDValidation,
  CargoController.deleteByUUID
);

export default router;
