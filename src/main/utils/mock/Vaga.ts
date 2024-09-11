import { v4 as uuidv4 } from "uuid";

export const mockVagaParams = {
    titulo: "any_titulo",
    descricao: "any_descricao",
    status: true,
    modalidade: 100,
    dataInicio: new Date(),
    dataFim: new Date(),
    uuidEmpresa: uuidv4(),
    uuidCargo: uuidv4()
};
  
export const mockVagaResponse = {
    ...mockVagaParams,
    uuid: uuidv4(),
    createdAt: new Date(),
    updatedAt: new Date(),
};
