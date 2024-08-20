import { Usuario } from "@prisma/client";
import { prisma } from "../../prisma/PrismaClient";

export const getAll = async (
    page: number,
    limit: number,
    cpf?: string,
  ): Promise<Usuario[] | Error> => {
    try {
      const empresas = await prisma.usuario.findMany({
        skip: (page - 1) * limit,
        take: limit * 1,
        where: {
          cpf: cpf,
        },
      });
  
      return empresas ? empresas : new Error("Nenhum usuário foi encontrada.");
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
  