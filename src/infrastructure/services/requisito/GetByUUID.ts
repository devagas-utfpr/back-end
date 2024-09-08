import { Requisito } from "@prisma/client";
import { prisma } from "../../prisma/PrismaClient";

export const getByUUID = async (uuid: string): Promise<Requisito | Error> => {
    try {
        const requisito = await prisma.requisito.findFirst({
            where: {
                uuid: uuid,
            },
        });

        return requisito ? requisito : new Error("O Requisito não foi encontrada.");
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
  