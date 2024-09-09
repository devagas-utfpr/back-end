import * as Yup from "yup";

import { Request, Response } from "express";
import { VagaService } from "../../../infrastructure/services";
import { StatusCodes } from "http-status-codes";
import { validation } from "../../middlewares/Validation";
import { Vaga } from "@prisma/client";

interface IParamsProps {
  uuid?: string;
}

interface IBodyProps extends Omit<Vaga, "uuid" | "createdAt" | "updatedAt"> {}

export const updateByUUIDValidation = validation((getSchema) => ({
  params: getSchema<IParamsProps>(
    Yup.object().shape({
      uuid: Yup.string().required(),
    })
  ),
  body: getSchema<IBodyProps>(
    Yup.object().shape({
      titulo: Yup.string().required(),
      descricao: Yup.string().required(),
      status: Yup.boolean().required(),
      modalidade: Yup.number().required(),
      dataInicio: Yup.date().required(),
      dataFim: Yup.date().required(),
      uuidEmpresa: Yup.string().required(),
      uuidCargo: Yup.string().required(),
    })
  ),
}));

export const updateByUUID = async (
  req: Request<IParamsProps, {}, IBodyProps>,
  res: Response
) => {
  try {
    const uuidVaga = await VagaService.updateByUUID(
      req.params.uuid || "",
      req.body
    );
    return res.status(StatusCodes.OK).json(uuidVaga);
  } catch (error: any) {
    return res.status(404).json({
      message: error.message,
    });
  }
};
