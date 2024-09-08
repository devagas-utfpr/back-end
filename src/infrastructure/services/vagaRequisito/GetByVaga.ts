import { VagaRequisito } from "@prisma/client";
import { prisma } from "../../prisma/PrismaClient";

export const getByVaga = async (
  uuidVaga: string
): Promise<VagaRequisito[] | Error> => {
  try {
    const requisitosByVaga = await prisma.vagaRequisito.findMany({
      where: {
        uuidVaga: uuidVaga,
      },
    });

    return requisitosByVaga
      ? requisitosByVaga
      : new Error("Os requisitos da vaga não foram encontradas.");
  } catch (error: any) {
    throw new Error(error.message);
  }
};
