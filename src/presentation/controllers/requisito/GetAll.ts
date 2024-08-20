import { Request, Response } from "express";
import { validation } from "../../middlewares/Validation";
import * as Yup from "yup";
import { RequisitoService } from "../../../infrastructure/services";
import { StatusCodes } from "http-status-codes";

interface IQueryProps {
  page?: number;
  limit?: number;
  nomeRequisito?: string;
}

export const getAllValidation = validation((getSchema) => ({
  query: getSchema<IQueryProps>(
    Yup.object().shape({
      page: Yup.number().integer().optional().moreThan(0),
      limit: Yup.number().integer().optional().moreThan(0),
      nomeRequisito: Yup.string().optional(),
    })
  ),
}));

export const getAll = async (
  req: Request<{}, {}, {}, IQueryProps>,
  res: Response
) => {
  try {
    const requisitos = await RequisitoService.getAll(
      req.query.page || 1,
      req.query.limit || 10,
      req.query.nomeRequisito
    );

    return res.status(StatusCodes.OK).json(requisitos);
  } catch (error: any) {
    return res.status(404).json({ message: error.message });
  }
};
