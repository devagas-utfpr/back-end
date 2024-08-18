import { Requisito } from "@prisma/client";
import { prisma } from "../../prisma/PrismaClient";

export const create = async (
    requisito: Omit<Requisito, "uuid" | "createdAt" | "updatedAt">
) => {
    try{
        const newRequisito = await prisma.requisito.create({
            data: {
                nome: requisito.nome,
            },
        });

        return newRequisito;
    } catch (error:any) {
        throw new Error(error.message);
    }
}