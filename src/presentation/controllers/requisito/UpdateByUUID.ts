import * as Yup from "yup";

import { Request, Response } from "express";
import { RequisitoService } from "../../../infrastructure/services";
import { StatusCodes } from "http-status-codes";
import { validation } from "../../middlewares/Validation";
import { Requisito } from "@prisma/client";

interface IParamsProps {
  uuid?: string;
}

interface IBodyProps
  extends Omit<Requisito, "uuid" | "createdAt" | "updatedAt"> {}

export const updateByUUIDValidation = validation((getSchema) => ({
  params: getSchema<IParamsProps>(
    Yup.object().shape({
      uuid: Yup.string().required(),
    })
  ),
  body: getSchema<IBodyProps>(
    Yup.object().shape({
      nome: Yup.string().required(),
    })
  ),
}));

export const updateByUUID = async (
  req: Request<IParamsProps, {}, IBodyProps>,
  res: Response
) => {
  try {
    const uuidRequisito = await RequisitoService.updateByUUID(
      req.params.uuid || "",
      req.body
    );
    return res.status(StatusCodes.OK).json(uuidRequisito);
  } catch (error: any) {
    return res.status(404).json({
      message: error.message,
    });
  }
};
