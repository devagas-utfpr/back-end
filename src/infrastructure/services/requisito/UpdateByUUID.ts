import { Requisito } from "../../../domain/entities/Requisito";
import { prisma } from "../../prisma/PrismaClient";

export const updateByUUID = async (
    uuid: string,
    data: Omit<Requisito, "uuid" | "createdAt" | "updatedAt">
): Promise<string | Error> => {
    try {
        const requisito = await prisma.requisito.update({
            where: {
                uuid: uuid,
            },
            data: data,
        });
        
        return requisito.uuid;
    } catch (error:any) {
        throw new Error(error.message);
    }
    
}