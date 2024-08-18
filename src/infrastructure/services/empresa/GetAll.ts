import { Empresa } from "@prisma/client";
import { prisma } from "../../prisma/PrismaClient";

export const getAll = async (
  page: number,
  limit: number,
  cidade?: number,
  nomeCidade?: string
): Promise<Empresa[] | Error> => {
  try {
    const empresas = await prisma.empresa.findMany({
      skip: (page - 1) * limit,
      take: limit * 1,
      where: {
        cidade: cidade,
        nome: {
          contains: nomeCidade,
        },
      },
    });

    return empresas ? empresas : new Error("Nenhuma empresa foi encontrada.");
  } catch (error: any) {
    throw new Error(error.message);
  }
};
