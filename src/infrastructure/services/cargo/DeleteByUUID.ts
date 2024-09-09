import { prisma } from "../../prisma/PrismaClient";

export const deleteByUUID = async (uuid: string) => {
    try {
        const cargo = await prisma.cargo.delete({
            where: {
                uuid: uuid,
            },
        });
        return cargo;
    } catch (error:any) {
        throw new Error(error.message);
    }
}