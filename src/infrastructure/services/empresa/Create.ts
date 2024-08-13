import { Empresa } from "@prisma/client";
import { prisma } from "../../prisma/PrismaClient";

export const create = async (
  empresa: Omit<Empresa, "uuid" | "createdAt" | "updatedAt">
) => {
  try {
    const newEmpresa = await prisma.empresa.create({
      data: {
        nome: empresa.nome,
        cnpj: empresa.cnpj,
        email: empresa.email,
        cidade: empresa.cidade,
        senha: empresa.senha,
      },
    });

    return newEmpresa;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
