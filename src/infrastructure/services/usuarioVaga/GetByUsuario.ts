import { prisma } from "../../prisma/PrismaClient";
import { UsuarioVaga } from "@prisma/client";

export const getByUsuario = async (
  uuidUsuario: string
): Promise<UsuarioVaga[] | Error> => {
  try {
    const usuarioVaga = await prisma.usuarioVaga.findMany({
      where: {
        uuidUsuario: uuidUsuario,
      },
      include: {
        vaga: {
          select: {
            empresa: {
              select: {
                nome: true,
              },
            },
            cargo: {
              select: {
                nome: true,
              },
            },
            dataInicio: true,
            dataFim: true,
          },
        },
      },
    });

    return usuarioVaga
      ? usuarioVaga
      : new Error("As vagas do usuário não foram encontradas.");
  } catch (error: any) {
    throw new Error(error.message);
  }
};
