import { prisma } from "../../prisma/PrismaClient";

export const deleteByUUID = async (uuid: string) => {
  try {
    const usuarioVaga = await prisma.usuarioVaga.delete({
      where: {
        uuid: uuid,
      },
    });
    return usuarioVaga;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
