import { string } from "yup";
import { Cargo } from "../../../domain/entities/Cargo";
import { prisma } from "../../prisma/PrismaClient";

export const getByUUID = async (uuid: string): Promise<Cargo | Error> => {
    try {
        const cargo = await prisma.cargo.findFirst({
            where: {
                uuid: uuid,
            },
        });

        return cargo ? cargo : new Error("O Cargo não foi encontrada.");
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
  