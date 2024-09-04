import { Usuario } from "../../../domain/entities/Usuario";
import { prisma } from "../../prisma/PrismaClient";

export const getByEmail = async (email: string): Promise<Usuario | Error> => {
    try {
        const usuario = await prisma.usuario.findFirst({
            where: {
                email: email,
            },
        });

        return usuario ? usuario : new Error("O usuario não foi encontrada.");
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
  