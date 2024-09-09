import * as Yup from "yup";

import { Request, Response } from "express";
import { VagaRequisitoService } from "../../../infrastructure/services";
import { StatusCodes } from "http-status-codes";
import { validation } from "../../middlewares/Validation";

interface IParamsProps {
  uuidVaga?: string;
}

export const getByVagaValidation = validation((getSchema) => ({
  params: getSchema<IParamsProps>(
    Yup.object().shape({
      uuidVaga: Yup.string().required(),
    })
  ),
}));

export const getByVaga = async (req: Request<IParamsProps>, res: Response) => {
  try {
    const vagaRequisito = await VagaRequisitoService.getByVaga(
      req.params.uuidVaga || ""
    );
    return res.status(StatusCodes.OK).json(vagaRequisito);
  } catch (error: any) {
    return res.status(404).json({
      message: error.message,
    });
  }
};
