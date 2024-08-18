import { string } from "yup";
import { Usuario } from "../../../domain/entities/Usuario";
import { prisma } from "../../prisma/PrismaClient";

export const getByUUID = async (uuid: string): Promise<Usuario | Error> => {
    try {
        const usuario = await prisma.usuario.findFirst({
            where: {
                uuid: uuid,
            },
        });

        return usuario ? usuario : new Error("O usuario não foi encontrada.");
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
  