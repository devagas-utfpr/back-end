import { UsuarioVaga } from "@prisma/client";
import { prisma } from "../../prisma/PrismaClient";

export const create = async (
  usuarioVaga: Omit<UsuarioVaga, "uuid" | "createdAt" | "updatedAt">
) => {
  try {
    const novoUsuarioVaga = await prisma.usuarioVaga.create({
      data: {
        dataEntrada: usuarioVaga.dataEntrada,
        status: usuarioVaga.status,
        uuidUsuario: usuarioVaga.uuidUsuario,
        uuidVaga: usuarioVaga.uuidVaga,
      },
    });

    return novoUsuarioVaga;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
