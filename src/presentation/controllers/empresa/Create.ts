import { Request, Response } from "express";
import { validation } from "../../middlewares/Validation";
import * as Yup from "yup";
import { EmpresaService } from "../../../infrastructure/services";
import { StatusCodes } from "http-status-codes";
import { Empresa } from "@prisma/client";

interface IBodyProps
  extends Omit<Empresa, "uuid" | "createdAt" | "updatedAt"> {}

export const createValidation = validation((getSchema) => ({
    body: getSchema<IBodyProps>(
    Yup.object().shape({
      nome: Yup.string().required(),
      cnpj: Yup.string().required(),
      email: Yup.string().email().required(),
      cidade: Yup.number().required(),
      senha: Yup.string().required(),
    })
  ),
}));

export const create = async (
  req: Request<{}, {}, IBodyProps>,
  res: Response
) => {
  try {
    const empresas = await EmpresaService.create(req.body);

    return res.status(StatusCodes.OK).json(empresas);
  } catch (error: any) {
    return res.status(404).json({ message: error.message });
  }
};
