import { Request, Response } from "express";
import { validation } from "../../middlewares/Validation";
import * as Yup from "yup";
import { VagaService } from "../../../infrastructure/services";
import { StatusCodes } from "http-status-codes";

interface IQueryProps {
  page?: number;
  limit?: number;
}

export const getAllValidation = validation((getSchema) => ({
  query: getSchema<IQueryProps>(
    Yup.object().shape({
      page: Yup.number().integer().optional().moreThan(0),
      limit: Yup.number().integer().optional().moreThan(0),
    })
  ),
}));

export const getAll = async (
  req: Request<{}, {}, {}, IQueryProps>,
  res: Response
) => {
  try {
    const vagas = await VagaService.getAll(
      req.query.page || 1,
      req.query.limit || 10
    );

    return res.status(StatusCodes.OK).json(vagas);
  } catch (error: any) {
    return res.status(404).json({ message: error.message });
  }
};
