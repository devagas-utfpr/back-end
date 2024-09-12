import { prisma } from "../../prisma/PrismaClient";

export const deleteByUUID = async (uuid: string) => {
  try {
    return await prisma.vaga.update({
      where: {
        uuid: uuid,
      },
      data: {
        status: false,
      },
    });
  } catch (error: any) {
    throw new Error(error.message);
  }
};
