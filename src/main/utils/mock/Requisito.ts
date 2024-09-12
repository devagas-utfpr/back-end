import { v4 as uuidv4 } from "uuid";

export const mockRequisitoParams = {
    nome: "any_nome",
};

export const mockRequisitoResponse = {
    ...mockRequisitoParams,
    uuid: uuidv4(),
    createdAt: new Date(),
    updatedAt: new Date(),
};