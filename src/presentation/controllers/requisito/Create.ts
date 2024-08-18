import { Request, Response } from "express";
import { validation } from "../../middlewares/Validation";
import * as Yup from "yup";
import { RequisitoService } from "../../../infrastructure/services";
import { StatusCodes } from "http-status-codes";
import { Requisito } from "../../../domain/entities/Requisito";

interface IBodyProps
  extends Omit<Requisito, "uuid" | "createdAt" | "updatedAt"> {}

export const createValidation = validation((getSchema) => ({
    body: getSchema<IBodyProps>(
    Yup.object().shape({
      nome: Yup.string().required(),
    })
  ),
}));

export const create = async (
  req: Request<{}, {}, IBodyProps>,
  res: Response
) => {
  try {
    const requisitos = await RequisitoService.create(req.body);

    return res.status(StatusCodes.OK).json(requisitos);
  } catch (error: any) {
    return res.status(404).json({ message: error.message });
  }
};