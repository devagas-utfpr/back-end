import { Vaga } from "@prisma/client";
import { prisma } from "../../prisma/PrismaClient";

export const create = async (
  vaga: Omit<Vaga, "uuid" | "createdAt" | "updatedAt">
) => {
  try {
    return await prisma.vaga.create({
      data: {
        titulo: vaga.titulo,
        descricao: vaga.descricao,
        status: vaga.status,
        modalidade: vaga.modalidade,
        dataInicio: vaga.dataInicio,
        dataFim: vaga.dataFim,
        uuidEmpresa: vaga.uuidEmpresa,
        uuidCargo: vaga.uuidCargo,
      },
    });
  } catch (error: any) {
    throw new Error(error.message);
  }
};
