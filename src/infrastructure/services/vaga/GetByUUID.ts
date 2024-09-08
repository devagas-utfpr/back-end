import { Vaga } from "@prisma/client";
import { prisma } from "../../prisma/PrismaClient";

export const getByUUID = async (uuid: string): Promise<Vaga | Error> => {
  try {
    const vaga = await prisma.vaga.findFirst({
      where: {
        uuid: uuid,
      },
    });

    return vaga ? vaga : new Error("A vaga não foi encontrada.");
  } catch (error: any) {
    throw new Error(error.message);
  }
};
