import { Usuario } from "../../../domain/entities/Usuario";
import { prisma } from "../../prisma/PrismaClient";

export const updateByUUID = async (
    uuid: string,
    data: Omit<Usuario, "uuid" | "createdAt" | "updatedAt">
): Promise<string | Error> => {
    try {
        const usuario = await prisma.cargo.update({
            where: {
                uuid: uuid,
            },
            data: data,
        });
        
        return usuario.uuid;
    } catch (error:any) {
        throw new Error(error.message);
    }
    
}