import { Usuario } from "@prisma/client";
import { prisma } from "../../prisma/PrismaClient";

export const getAll = async (
  page: number,
  limit: number,
  nome?: string,
  email?: string,
  cpf?: string
): Promise<Omit<Usuario, "senha">[] | Error> => {
  try {
    const usuarios = await prisma.usuario.findMany({
      select: {
        uuid: true,
        nome: true,
        email: true,
        cpf: true,
        dataNascimento: true,
        createdAt: true,
        updatedAt: true,
      },
      skip: (page - 1) * limit,
      take: limit * 1,
      where: {
        nome: nome,
        email: email,
        cpf: cpf,
      },
    });

    return usuarios ? usuarios : new Error("Nenhum usuário foi encontrado.");
  } catch (error: any) {
    throw new Error(error.message);
  }
};
