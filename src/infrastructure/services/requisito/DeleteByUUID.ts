import { prisma } from "../../prisma/PrismaClient";

export const deleteByUUID = async (uuid: string) => {
    try {
        const requisito = await prisma.requisito.delete({
            where: {
                uuid: uuid,
            },
        });
        return requisito;
    } catch (error:any) {
        throw new Error(error.message);
    }
}