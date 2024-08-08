import { IEmpresaRepository } from "../../domain/repositories/IEmpresaRepository";
import { Empresa } from "../../domain/entities/Empresa";
import { prisma } from "../prisma/PrismaClient";

export class PrismaEmpresaRepository implements IEmpresaRepository {
  async getAll(): Promise<Empresa[]> {
    const empresas = await prisma.empresa.findMany();

    if (!empresas) throw new Error("Nenhuma empresa foi encontrada.");

    return empresas.map(
      (empresa) =>
        new Empresa(
          empresa.uuid,
          empresa.nome,
          empresa.cnpj,
          empresa.email,
          empresa.cidade,
          empresa.senha,
          empresa.createdAt,
          empresa.updatedAt
        )
    );
  }

  // Outros métodos de repositório...
}
