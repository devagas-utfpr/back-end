import { prisma } from "../../prisma/PrismaClient";
import { UsuarioVaga } from "@prisma/client";

export const getByUUID = async (uuid: string): Promise<UsuarioVaga | Error> => {
  try {
    const usuarioVaga = await prisma.usuarioVaga.findFirst({
      where: {
        uuid: uuid,
      },
    });

    return usuarioVaga
      ? usuarioVaga
      : new Error("A vaga do usuário não foi encontrada.");
  } catch (error: any) {
    throw new Error(error.message);
  }
};
