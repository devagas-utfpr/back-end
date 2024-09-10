import { Empresa } from "@prisma/client";
import { prisma } from "../../prisma/PrismaClient";

export const getByEmail = async (email: string): Promise<Empresa | Error> => {
  try {
    const empresa = await prisma.empresa.findFirst({
      where: {
        email: email,
      },
    });

    return empresa ? empresa : new Error("A empresa não foi encontrada.");
  } catch (error: any) {
    throw new Error(error.message);
  }
};
