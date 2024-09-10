import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as Yup from "yup";

import { validation } from "../../middlewares/Validation";
import { Usuario } from "../../../domain/entities/Usuario";
import {
  EmpresaService,
  UsuarioService,
} from "../../../infrastructure/services";
import { PasswordCrypto } from "../../../infrastructure/services/auth/PasswordCrypto";
import { JWTService } from "../../../infrastructure/services/auth/JwtService";
import { Empresa } from "@prisma/client";

interface IBodyProps
  extends Omit<
    Usuario,
    "uuid" | "nome" | "cpf" | "dataNascimento" | "createdAt" | "updatedAt"
  > {}

export const signInValidation = validation((getSchema) => ({
  body: getSchema<IBodyProps>(
    Yup.object().shape({
      email: Yup.string().required().email(),
      senha: Yup.string().required().min(6),
    })
  ),
}));

export const signIn = async (
  req: Request<{}, {}, Usuario | Empresa>,
  res: Response
) => {
  const { email, senha } = req.body;

  let usuario = await UsuarioService.getByEmail(email);
  if (usuario instanceof Error) {
    const empresa = await EmpresaService.getByEmail(email);
    if (empresa instanceof Error) {
      return res.status(StatusCodes.UNAUTHORIZED).json({
        errors: {
          default: "Email e/ou senha são inválidos",
        },
      });
    }

    const isPasswordValid = await PasswordCrypto.verifyPassword(
      senha,
      empresa.senha
    );

    if (!isPasswordValid) {
      return res.status(StatusCodes.UNAUTHORIZED).json({
        errors: {
          default: "Email e/ou senha são inválidos",
        },
      });
    }

    const accessToken = JWTService.sign({ uuid: empresa.uuid });
    if (accessToken === "JWT_SECRET_NOT_FOUND") {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        errors: {
          default: "Erro ao gerar token de acesso.",
        },
      });
    }
    return res.status(StatusCodes.OK).json({ accessToken });
  }

  const isPasswordValid = await PasswordCrypto.verifyPassword(
    senha,
    usuario.senha
  );
  if (!isPasswordValid) {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      errors: {
        default: "Email e/ou senha são inválidos",
      },
    });
  }

  const accessToken = JWTService.sign({ uuid: usuario.uuid });
  if (accessToken === "JWT_SECRET_NOT_FOUND") {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: "Erro ao gerar token de acesso.",
      },
    });
  }
  return res.status(StatusCodes.OK).json({ accessToken });
};
