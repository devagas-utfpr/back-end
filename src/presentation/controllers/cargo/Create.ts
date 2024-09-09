import { Request, Response } from "express";
import { validation } from "../../middlewares/Validation";
import * as Yup from "yup";
import { CargoService } from "../../../infrastructure/services";
import { StatusCodes } from "http-status-codes";
import { Cargo } from "../../../domain/entities/Cargo";

interface IBodyProps
  extends Omit<Cargo, "uuid" | "createdAt" | "updatedAt"> {}

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
    const cargos = await CargoService.create(req.body);

    return res.status(StatusCodes.OK).json(cargos);
  } catch (error: any) {
    return res.status(404).json({ message: error.message });
  }
};