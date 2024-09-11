import { v4 as uuidv4 } from "uuid";

export const mockCargoParams = {
    nome: "any_nome"
};

export const mockCargoResponse = {
    ...mockCargoParams,
    uuid: uuidv4(),
    createdAt: new Date(),
    updatedAt: new Date(),
};