import { Request, Response } from "express";
import { validation } from "../../middlewares/Validation";
import * as Yup from "yup";
import { EmpresaService } from "../../../infrastructure/services";
import { StatusCodes } from "http-status-codes";

interface IQueryProps {
  page?: number;
  limit?: number;
  nomeEmpresa?: string;
  cidade?: number;
}

export const getAllValidation = validation((getSchema) => ({
  query: getSchema<IQueryProps>(
    Yup.object().shape({
      page: Yup.number().integer().optional().moreThan(0),
      limit: Yup.number().integer().optional().moreThan(0),
      nomeEmpresa: Yup.string().optional(),
      cidade: Yup.number().integer().optional().moreThan(0),
    })
  ),
}));

export const getAll = async (
  req: Request<{}, {}, {}, IQueryProps>,
  res: Response
) => {
  try {
    const empresas = await EmpresaService.getAll(
      req.query.page || 1,
      req.query.limit || 10,
      req.query.cidade,
      req.query.nomeEmpresa
    );

    return res.status(StatusCodes.OK).json(empresas);
  } catch (error: any) {
    return res.status(404).json({ message: error.message });
  }
};
