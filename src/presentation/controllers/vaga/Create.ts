import { Request, Response } from "express";
import { validation } from "../../middlewares/Validation";
import * as Yup from "yup";
import { VagaService } from "../../../infrastructure/services";
import { StatusCodes } from "http-status-codes";
import { Vaga } from "@prisma/client";

interface IBodyProps extends Omit<Vaga, "uuid" | "createdAt" | "updatedAt"> {}

export const createValidation = validation((getSchema) => ({
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

export const create = async (
  req: Request<{}, {}, IBodyProps>,
  res: Response
) => {
  try {
    const vaga = await VagaService.create(req.body);

    return res.status(StatusCodes.OK).json(vaga);
  } catch (error: any) {
    return res.status(404).json({ message: error.message });
  }
};
