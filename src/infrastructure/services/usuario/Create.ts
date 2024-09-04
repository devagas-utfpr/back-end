import { Usuario } from "@prisma/client";
import { prisma } from "../../prisma/PrismaClient";
import { PasswordCrypto } from "../auth/PasswordCrypto";

export const create = async (
  usuario: Omit<Usuario, "uuid" | "createdAt" | "updatedAt">
) => {
  try {
    if (
      (await prisma.usuario.count({
        where: {
          email: usuario.email,
          cpf: usuario.cpf,
        },
      })) === 0
    ) {
      const hashPassword = await PasswordCrypto.hashPassword(usuario.senha);

      return await prisma.usuario.create({
        data: {
          nome: usuario.nome,
          cpf: usuario.cpf,
          email: usuario.email,
          dataNascimento: usuario.dataNascimento,
          senha: hashPassword,
        },
        select: {
          uuid: true,
        },
      });
    } else {
      throw new Error("Usuário já cadastrado");
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
};
