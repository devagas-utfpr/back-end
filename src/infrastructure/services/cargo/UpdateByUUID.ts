import { Cargo } from "../../../domain/entities/Cargo";
import { prisma } from "../../prisma/PrismaClient";

export const updateByUUID = async (
    uuid: string,
    data: Omit<Cargo, "uuid" | "createdAt" | "updatedAt">
): Promise<string | Error> => {
    try {
        const cargo = await prisma.cargo.update({
            where: {
                uuid: uuid,
            },
            data: data,
        });
        
        return cargo.uuid;
    } catch (error:any) {
        throw new Error(error.message);
    }
    
}