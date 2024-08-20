import * as Yup from "yup";

import { Request, Response } from "express";
import { RequisitoService } from "../../../infrastructure/services";
import { StatusCodes } from "http-status-codes";
import { validation } from "../../middlewares/Validation";

interface IParamsProps {
  uuid?: string;
}

export const deleteByUUIDValidation = validation((getSchema) => ({
  params: getSchema<IParamsProps>(
    Yup.object().shape({
      uuid: Yup.string().required(),
    })
  ),
}));

export const deleteByUUID = async (
  req: Request<IParamsProps>,
  res: Response
) => {
  try {
    const uuidRequisito = await RequisitoService.deleteByUUID(
      req.params.uuid || ""
    );
    return res.status(StatusCodes.OK).json(uuidRequisito);
  } catch (error: any) {
    return res.status(404).json({
      message: error.message,
    });
  }
};
