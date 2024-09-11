import { v4 as uuidv4 } from "uuid";

export const mockUsuarioParams = {
    nome: "any_nome",
    cpf: "any_cpf",
    email: "any_email",
    dataNascimento: new Date(),
    senha: "any_senha"
};
  
export const mockUsuarioResponse = {
    ...mockUsuarioParams,
    uuid: uuidv4(),
    createdAt: new Date(),
    updatedAt: new Date(),
  };
