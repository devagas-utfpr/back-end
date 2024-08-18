import { prisma } from "../../prisma/PrismaClient";

export const deleteByUUID = async (uuid: string) => {
    try {
        const usuario = await prisma.usuario.delete({
            where: {
                uuid: uuid,
            },
        });
        return usuario;
    } catch (error:any) {
        throw new Error(error.message);
    }
}