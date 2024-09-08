import * as Yup from "yup";

import { Request, Response } from "express";
import { VagaService } from "../../../infrastructure/services";
import { StatusCodes } from "http-status-codes";
import { validation } from "../../middlewares/Validation";

interface IParamsProps {
  uuid?: string;
}

export const getByUUIDValidation = validation((getSchema) => ({
  params: getSchema<IParamsProps>(
    Yup.object().shape({
      uuid: Yup.string().required(),
    })
  ),
}));

export const getByUUID = async (req: Request<IParamsProps>, res: Response) => {
  try {
    const vaga = await VagaService.getByUUID(req.params.uuid || "");
    return res.status(StatusCodes.OK).json(vaga);
  } catch (error: any) {
    return res.status(404).json({
      message: error.message,
    });
  }
};
