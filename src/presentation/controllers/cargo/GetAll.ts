import { Request, Response } from "express";
import { validation } from "../../middlewares/Validation";
import * as Yup from "yup";
import { CargoService } from "../../../infrastructure/services";
import { StatusCodes } from "http-status-codes";

interface IQueryProps {
  page?: number;
  limit?: number;
  nomeCargo?: string;
}

export const getAllValidation = validation((getSchema) => ({
  query: getSchema<IQueryProps>(
    Yup.object().shape({
      page: Yup.number().integer().optional().moreThan(0),
      limit: Yup.number().integer().optional().moreThan(0),
      nomeCargo: Yup.string().optional(),
    })
  ),
}));

export const getAll = async (
  req: Request<{}, {}, {}, IQueryProps>,
  res: Response
) => {
  try {
    const cargos = await CargoService.getAll(
      req.query.page || 1,
      req.query.limit || 10,
      req.query.nomeCargo
    );

    return res.status(StatusCodes.OK).json(cargos);
  } catch (error: any) {
    return res.status(404).json({ message: error.message });
  }
};
