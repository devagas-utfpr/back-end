import { Vaga } from "@prisma/client";
import { prisma } from "../../prisma/PrismaClient";

export const getByEmpresa = async (
  uuidEmpresa: string
): Promise<Vaga[] | Error> => {
  try {
    const vaga = await prisma.vaga.findMany({
      where: {
        uuidEmpresa: uuidEmpresa,
      },
      include: {
        empresa: {
          select: {
            nome: true,
            cidade: true,
          },
        },
        cargo: {
          select: {
            nome: true,
          },
        },
      },
    });

    return vaga ? vaga : new Error("A vaga não foi encontrada.");
  } catch (error: any) {
    throw new Error(error.message);
  }
};
