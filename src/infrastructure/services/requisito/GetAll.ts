import { Requisito } from "@prisma/client";
import { prisma } from "../../prisma/PrismaClient";

export const getAll = async (
    page: number,
    limit: number,
    nome?: string,
  ): Promise<Requisito[] | Error> => {
    try {
      const empresas = await prisma.requisito.findMany({
        skip: (page - 1) * limit,
        take: limit * 1,
        where: {
          nome: nome,
        },
      });
  
      return empresas ? empresas : new Error("Nenhum usuário foi encontrada.");
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
  