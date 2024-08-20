import { Cargo } from "@prisma/client";
import { prisma } from "../../prisma/PrismaClient";

export const getAll = async (
    page: number,
    limit: number,
    nome?: string,
  ): Promise<Cargo[] | Error> => {
    try {
      const empresas = await prisma.cargo.findMany({
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
  