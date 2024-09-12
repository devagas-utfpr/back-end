import * as Yup from "yup";

import { Request, Response } from "express";
import { VagaService } from "../../../infrastructure/services";
import { StatusCodes } from "http-status-codes";
import { validation } from "../../middlewares/Validation";

interface IParamsProps {
  uuidEmpresa?: string;
}

export const getByEmpresaValidation = validation((getSchema) => ({
  params: getSchema<IParamsProps>(
    Yup.object().shape({
      uuidEmpresa: Yup.string().required(),
    })
  ),
}));

export const getByEmpresa = async (req: Request<IParamsProps>, res: Response) => {
  try {
    const vaga = await VagaService.getByEmpresa(req.params.uuidEmpresa || "");
    return res.status(StatusCodes.OK).json(vaga);
  } catch (error: any) {
    return res.status(404).json({
      message: error.message,
    });
  }
};
