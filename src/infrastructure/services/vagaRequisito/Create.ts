import { VagaRequisito } from "@prisma/client";
import { prisma } from "../../prisma/PrismaClient";

export const create = async (
  vagaRequisito: Omit<VagaRequisito, "uuid" | "createdAt" | "updatedAt">
) => {
  try {
    return await prisma.vagaRequisito.create({
      data: {
        uuidVaga: vagaRequisito.uuidVaga,
        uuidRequisito: vagaRequisito.uuidRequisito,
      },
    });
  } catch (error: any) {
    throw new Error(error.message);
  }
};
