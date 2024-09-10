import { Empresa } from "@prisma/client";
import { prisma } from "../../prisma/PrismaClient";
import { PasswordCrypto } from "../auth/PasswordCrypto";

export const create = async (
  empresa: Omit<Empresa, "uuid" | "createdAt" | "updatedAt">
) => {
  try {
    if (
      (await prisma.empresa.count({
        where: {
          email: empresa.email,
          cnpj: empresa.cnpj,
        },
      })) === 0
    ) {
      const hashPassword = await PasswordCrypto.hashPassword(empresa.senha);

      return await prisma.empresa.create({
        data: {
          nome: empresa.nome,
          cnpj: empresa.cnpj,
          email: empresa.email,
          cidade: empresa.cidade,
          senha: hashPassword,
        },
      });
    } else {
      throw new Error("Empresa já cadastrada");
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
};
