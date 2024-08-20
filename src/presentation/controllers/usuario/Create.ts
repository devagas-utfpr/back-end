import { Request, Response } from "express";
import { validation } from "../../middlewares/Validation";
import * as Yup from "yup";
import { UsuarioService } from "../../../infrastructure/services";
import { StatusCodes } from "http-status-codes";
import { Usuario } from "@prisma/client";

interface IBodyProps
  extends Omit<Usuario, "uuid" | "createdAt" | "updatedAt"> {}

export const createValidation = validation((getSchema) => ({
    body: getSchema<IBodyProps>(
    Yup.object().shape({
      nome: Yup.string().required(),
      cpf: Yup.string().required(),
      email: Yup.string().email().required(),
      dataNascimento: Yup.date().required(),
      senha: Yup.string().required(),
    })
  ),
}));

export const create = async (
  req: Request<{}, {}, IBodyProps>,
  res: Response
) => {
  try {
    const usuarios = await UsuarioService.create(req.body);

    return res.status(StatusCodes.OK).json(usuarios);
  } catch (error: any) {
    return res.status(404).json({ message: error.message });
  }
};
