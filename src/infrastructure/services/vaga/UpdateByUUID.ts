import { Vaga } from "@prisma/client";
import { prisma } from "../../prisma/PrismaClient";

export const updateByUUID = async (
  uuid: string,
  data: Omit<Vaga, "uuid" | "uuidEmpresa" | "createdAt" | "updatedAt">
): Promise<string | Error> => {
  try {
    const vaga = await prisma.vaga.update({
      where: {
        uuid: uuid,
      },
      data: data,
    });

    return vaga.uuid;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
