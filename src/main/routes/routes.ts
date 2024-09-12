import { Router } from "express";
import {
  EmpresaController,
  UsuarioController,
  AuthController,
  CargoController,
  RequisitoController,
  VagaRequisitoController,
  UsuarioVagaController,
  VagaController,
} from "../../presentation/controllers";
import { ensureAuthenticated } from "../../presentation/middlewares/ensureAuthenticated";
const router = Router();

/**
 * @swagger
 * /empresas:
 *   post:
 *     summary: Cria uma nova empresa
 *     responses:
 *       201:
 *         description: Empresa criada com sucesso
 */

router.post(
  "/empresas",
  EmpresaController.createValidation,
  EmpresaController.create
);

router.get(
  "/empresas",
  ensureAuthenticated,
  EmpresaController.getAllValidation,
  EmpresaController.getAll
);

router.get(
  "/empresas/:uuid",
  ensureAuthenticated,
  EmpresaController.getByUUIDValidation,
  EmpresaController.getByUUID
);

router.put(
  "/empresas/:uuid",
  ensureAuthenticated,
  EmpresaController.updateByUUIDValidation,
  EmpresaController.updateByUUID
);

router.delete(
  "/empresas/:uuid",
  ensureAuthenticated,
  EmpresaController.deleteByUUIDValidation,
  EmpresaController.deleteByUUID
);

router.post("/auth", AuthController.signInValidation, AuthController.signIn);

router.post(
  "/usuarios",
  UsuarioController.createValidation,
  UsuarioController.create
);

router.get(
  "/usuarios",
  ensureAuthenticated,
  UsuarioController.getAllValidation,
  UsuarioController.getAll
);

router.get(
  "/usuarios/:uuid",
  ensureAuthenticated,
  UsuarioController.getByUUIDValidation,
  UsuarioController.getByUUID
);

router.put(
  "/usuarios/:uuid",
  ensureAuthenticated,
  UsuarioController.updateByUUIDValidation,
  UsuarioController.updateByUUID
);

router.delete(
  "/usuarios/:uuid",
  ensureAuthenticated,
  UsuarioController.deleteByUUIDValidation,
  UsuarioController.deleteByUUID
);

router.post(
  "/cargos",
  ensureAuthenticated,
  CargoController.createValidation,
  CargoController.create
);

router.get("/cargos", CargoController.getAllValidation, CargoController.getAll);

router.get(
  "/cargos/:uuid",
  ensureAuthenticated,
  CargoController.getByUUIDValidation,
  CargoController.getByUUID
);

router.put(
  "/cargos/:uuid",
  ensureAuthenticated,
  CargoController.updateByUUIDValidation,
  CargoController.updateByUUID
);

router.delete(
  "/cargos/:uuid",
  ensureAuthenticated,
  CargoController.deleteByUUIDValidation,
  CargoController.deleteByUUID
);

router.post(
  "/requisitos",
  ensureAuthenticated,
  RequisitoController.createValidation,
  RequisitoController.create
);

router.get(
  "/requisitos",
  ensureAuthenticated,
  RequisitoController.getAllValidation,
  RequisitoController.getAll
);

router.get(
  "/requisitos/:uuid",
  ensureAuthenticated,
  RequisitoController.getByUUIDValidation,
  RequisitoController.getByUUID
);

router.put(
  "/requisitos/:uuid",
  ensureAuthenticated,
  RequisitoController.updateByUUIDValidation,
  RequisitoController.updateByUUID
);

router.delete(
  "/requisitos/:uuid",
  ensureAuthenticated,
  RequisitoController.deleteByUUIDValidation,
  RequisitoController.deleteByUUID
);

router.post(
  "/vagas",
  ensureAuthenticated,
  VagaController.createValidation,
  VagaController.create
);

router.get("/vagas", VagaController.getAllValidation, VagaController.getAll);

router.get(
  "/vagas/:uuid",
  ensureAuthenticated,
  VagaController.getByUUIDValidation,
  VagaController.getByUUID
);

router.get(
  "/vagas/empresa/:uuidEmpresa",
  ensureAuthenticated,
  VagaController.getByEmpresaValidation,
  VagaController.getByEmpresa
);

router.put(
  "/vagas/:uuid",
  ensureAuthenticated,
  VagaController.updateByUUIDValidation,
  VagaController.updateByUUID
);

router.delete(
  "/vagas/:uuid",
  ensureAuthenticated,
  VagaController.deleteByUUIDValidation,
  VagaController.deleteByUUID
);

router.post(
  "/vagas/requisitos",
  ensureAuthenticated,
  VagaRequisitoController.createValidation,
  VagaRequisitoController.create
);
router.get(
  "/vagas/requisitos/:uuidVaga",
  ensureAuthenticated,
  VagaRequisitoController.getByVagaValidation,
  VagaRequisitoController.getByVaga
);
router.delete(
  "/vagas/requisitos/:uuid",
  ensureAuthenticated,
  VagaRequisitoController.deleteByUUIDValidation,
  VagaRequisitoController.deleteByUUID
);

router.post(
  "/usuarios/vagas",
  ensureAuthenticated,
  UsuarioVagaController.createValidation,
  UsuarioVagaController.create
);
router.get(
  "/usuarios/vagas/:uuidVaga",
  ensureAuthenticated,
  UsuarioVagaController.getByUUIDValidation,
  UsuarioVagaController.getByUUID
);
router.get(
  "/usuarios/vagas/usuario/:uuidUsuario",
  ensureAuthenticated,
  UsuarioVagaController.getByUsuarioValidation,
  UsuarioVagaController.getByUsuario
);
router.put(
  "/usuarios/vagas/:uuidVaga",
  ensureAuthenticated,
  UsuarioVagaController.updateByUUIDValidation,
  UsuarioVagaController.updateByUUID
);
router.delete(
  "/usuarios/vagas/:uuid",
  ensureAuthenticated,
  UsuarioVagaController.deleteByUUIDValidation,
  UsuarioVagaController.deleteByUUID
);

export default router;
