import { Empresa } from "../../../domain/entities/Empresa";
import { IEmpresaRepository } from "../../../domain/repositories/IEmpresaRepository";
import { prisma } from "../../prisma/PrismaClient";

export const updateByUUID = async (
  uuid: string,
  data: Omit<Empresa, "uuid" | "createdAt" | "updatedAt">
): Promise<string | Error> => {
  try {
    const empresa = await prisma.empresa.update({
      where: {
        uuid: uuid,
      },
      data: data,
    });

    return empresa.uuid;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
