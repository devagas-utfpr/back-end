import { Empresa } from "../../../domain/entities/Empresa";
import { prisma } from "../../prisma/PrismaClient";

export const getByUUID = async (uuid: string): Promise<Empresa | Error> => {
  try {
    const empresa = await prisma.empresa.findFirst({
      where: {
        uuid: uuid,
      },
    });

    return empresa ? empresa : new Error("A empresa não foi encontrada.");
  } catch (error: any) {
    throw new Error(error.message);
  }
};
