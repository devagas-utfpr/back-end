import { prisma } from "../../prisma/PrismaClient";

export const deleteByUUID = async (uuid: string) => {
  try {
    const usuarioVaga = await prisma.usuarioVaga.update({
      where: {
        uuid: uuid,
      },
      data: {
        status: false,
      }
    });
    return usuarioVaga;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
