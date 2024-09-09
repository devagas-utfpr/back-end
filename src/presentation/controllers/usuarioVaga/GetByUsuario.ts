import * as Yup from "yup";

import { Request, Response } from "express";
import { UsuarioVagaService } from "../../../infrastructure/services";
import { StatusCodes } from "http-status-codes";
import { validation } from "../../middlewares/Validation";

interface IParamsProps {
  uuidUsuario?: string;
}

export const getByUsuarioValidation = validation((getSchema) => ({
  params: getSchema<IParamsProps>(
    Yup.object().shape({
      uuidUsuario: Yup.string().required(),
    })
  ),
}));

export const getByUsuario = async (
  req: Request<IParamsProps>,
  res: Response
) => {
  try {
    const usuarioVaga = await UsuarioVagaService.getByUsuario(
      req.params.uuidUsuario || ""
    );
    return res.status(StatusCodes.OK).json(usuarioVaga);
  } catch (error: any) {
    return res.status(404).json({
      message: error.message,
    });
  }
};
