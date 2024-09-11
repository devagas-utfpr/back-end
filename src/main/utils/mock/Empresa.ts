import { v4 as uuidv4 } from "uuid";

export const mockEmpresaParams = {
    nome: "any_nome",
    cnpj: "any_cnpj",
    email: "any_email",
    cidade: 1011,
    senha: "any_senha"
};
  
export const mockEmpresaResponse = {
    ...mockEmpresaParams,
    uuid: uuidv4(),
    createdAt: new Date(),
    updatedAt: new Date(),
};
