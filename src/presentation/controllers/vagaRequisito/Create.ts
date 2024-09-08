import { Request, Response } from "express";
import { validation } from "../../middlewares/Validation";
import * as Yup from "yup";
import { VagaRequisitoService } from "../../../infrastructure/services";
import { StatusCodes } from "http-status-codes";
import { VagaRequisito } from "@prisma/client";

interface IBodyProps
  extends Omit<VagaRequisito, "uuid" | "createdAt" | "updatedAt"> {}

export const createValidation = validation((getSchema) => ({
  body: getSchema<IBodyProps>(
    Yup.object().shape({
      uuidVaga: Yup.string().required(),
      uuidRequisito: Yup.string().required(),
    })
  ),
}));

export const create = async (
  req: Request<{}, {}, IBodyProps>,
  res: Response
) => {
  try {
    const vagaRequisito = await VagaRequisitoService.create(req.body);

    return res.status(StatusCodes.OK).json(vagaRequisito);
  } catch (error: any) {
    return res.status(404).json({ message: error.message });
  }
};
