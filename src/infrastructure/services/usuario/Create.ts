import { Usuario } from "@prisma/client";
import { prisma } from "../../prisma/PrismaClient";

export const create = async (
    usuario: Omit<Usuario, "uuid" | "createdAt" | "updatedAt">
) => {
    try{
        const newUsuario = await prisma.usuario.create({
            data: {
                nome: usuario.nome,
                cpf: usuario.cpf,
                email: usuario.email,
                dataNascimento: usuario.dataNascimento,
                senha: usuario.senha                    
            },
        });

        return newUsuario;
    } catch (error:any) {
        throw new Error(error.message);
    }
}