import { Request, Response } from "express";
import { IEmpresaRepository } from "../../domain/repositories/IEmpresaRepository";

export class EmpresaController {
  constructor(private empresaRepository: IEmpresaRepository) {}

  async getAll(res: Response): Promise<Response> {
    try {
      const empresas = await this.empresaRepository.getAll();
      return res.json(empresas);
    } catch (error: any) {
      return res.status(404).json({ message: error.message });
    }
  }
}
