import { prisma } from "../../prisma/PrismaClient";

export const deleteByUUID = async (uuid: string) => {
    try {
        return await prisma.vaga.delete({
            where: {
                uuid: uuid,
            },
        });
    } catch (error:any) {
        throw new Error(error.message);
    }
}
