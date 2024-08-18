import { Cargo } from "@prisma/client";
import { prisma } from "../../prisma/PrismaClient";

export const create = async (
    cargo: Omit<Cargo, "uuid" | "createdAt" | "updatedAt">
) => {
    try{
        const newCargo = await prisma.cargo.create({
            data: {
                nome: cargo.nome,
            },
        });

        return newCargo;
    } catch (error:any) {
        throw new Error(error.message);
    }
}