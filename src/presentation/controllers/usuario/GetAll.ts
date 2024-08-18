import { Request, Response } from "express";
import { validation } from "../../middlewares/Validation";
import * as Yup from "yup";
import { UsuarioService } from "../../../infrastructure/services";
import { StatusCodes } from "http-status-codes";

interface IQueryProps {
  page?: number;
  limit?: number;
  nomeUsuario?: string;
}

export const getAllValidation = validation((getSchema) => ({
  query: getSchema<IQueryProps>(
    Yup.object().shape({
      page: Yup.number().integer().optional().moreThan(0),
      limit: Yup.number().integer().optional().moreThan(0),
      nomeUsuario: Yup.string().optional(),
    })
  ),
}));

export const getAll = async (
  req: Request<{}, {}, {}, IQueryProps>,
  res: Response
) => {
  try {
    const usuarios = await UsuarioService.getAll(
      req.query.page || 1,
      req.query.limit || 10,
      req.query.nomeUsuario
    );

    return res.status(StatusCodes.OK).json(usuarios);
  } catch (error: any) {
    return res.status(404).json({ message: error.message });
  }
};
