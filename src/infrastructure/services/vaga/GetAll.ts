import { Vaga } from "@prisma/client";
import { prisma } from "../../prisma/PrismaClient";

export const getAll = async (
  page: number,
  limit: number,
  titulo?: string,
  modalidade?: number
): Promise<Vaga[] | Error> => {
  try {
    const vagas = await prisma.vaga.findMany({
      skip: (page - 1) * limit,
      take: limit * 1,
      where: {
        titulo: titulo,
        status: true,
        modalidade: modalidade,
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

    return vagas ? vagas : new Error("Nenhuma vaga foi encontrada.");
  } catch (error: any) {
    throw new Error(error.message);
  }
};
