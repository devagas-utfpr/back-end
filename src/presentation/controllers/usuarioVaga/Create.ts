import { Request, Response } from "express";
import { validation } from "../../middlewares/Validation";
import * as Yup from "yup";
import { UsuarioVagaService } from "../../../infrastructure/services";
import { StatusCodes } from "http-status-codes";
import { UsuarioVaga } from "@prisma/client";

interface IBodyProps
  extends Omit<UsuarioVaga, "uuid" | "createdAt" | "updatedAt"> {}

export const createValidation = validation((getSchema) => ({
  body: getSchema<IBodyProps>(
    Yup.object().shape({
      dataEntrada: Yup.date().required(),
      status: Yup.bool().required(),
      uuidUsuario: Yup.string().required(),
      uuidVaga: Yup.string().required(),
    })
  ),
}));

export const create = async (
  req: Request<{}, {}, IBodyProps>,
  res: Response
) => {
  try {
    const usuarioVagaCriado = await UsuarioVagaService.getByUsuario(
      req.body.uuidUsuario
    );

    if (Array.isArray(usuarioVagaCriado) && usuarioVagaCriado.length > 0) {
      const usuarioVaga = await UsuarioVagaService.updateByUUID(
        usuarioVagaCriado[0].uuid,
        req.body
      );
      return res.status(StatusCodes.OK).json(usuarioVaga);
    } else {
      const usuarioVaga = await UsuarioVagaService.create(req.body);
      return res.status(StatusCodes.OK).json(usuarioVaga);
    }
  } catch (error: any) {
    return res.status(404).json({ message: error.message });
  }
};
