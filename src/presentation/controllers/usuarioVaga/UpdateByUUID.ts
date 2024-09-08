import * as Yup from "yup";

import { Request, Response } from "express";
import { UsuarioVagaService } from "../../../infrastructure/services";
import { StatusCodes } from "http-status-codes";
import { validation } from "../../middlewares/Validation";
import { UsuarioVaga } from "@prisma/client";

interface IParamsProps {
  uuid?: string;
}

interface IBodyProps
  extends Omit<UsuarioVaga, "uuid" | "createdAt" | "updatedAt"> {}

export const updateByUUIDValidation = validation((getSchema) => ({
  params: getSchema<IParamsProps>(
    Yup.object().shape({
      uuid: Yup.string().required(),
    })
  ),
  body: getSchema<IBodyProps>(
    Yup.object().shape({
      dataEntrada: Yup.date().required(),
      status: Yup.bool().required(),
      uuidUsuario: Yup.string().required(),
      uuidVaga: Yup.string().required(),
    })
  ),
}));

export const updateByUUID = async (
  req: Request<IParamsProps, {}, IBodyProps>,
  res: Response
) => {
  try {
    const uuidUsuarioVaga = await UsuarioVagaService.updateByUUID(
      req.params.uuid || "",
      req.body
    );
    return res.status(StatusCodes.OK).json(uuidUsuarioVaga);
  } catch (error: any) {
    return res.status(404).json({
      message: error.message,
    });
  }
};
