import { UsuarioVaga } from "@prisma/client";
import { prisma } from "../../prisma/PrismaClient";

export const updateByUUID = async (
  uuid: string,
  data: Omit<UsuarioVaga, "uuid" | "createdAt" | "updatedAt">
): Promise<string | Error> => {
  try {
    const usuarioVaga = await prisma.usuarioVaga.update({
      where: {
        uuid: uuid,
      },
      data: data,
    });

    return usuarioVaga.uuid;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
