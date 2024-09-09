import { prisma } from "../../prisma/PrismaClient";

export const deleteByUUID = async (uuid: string) => {
  try {
    const empresa = await prisma.empresa.delete({
      where: {
        uuid: uuid,
      },
    });

    return empresa.uuid;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
