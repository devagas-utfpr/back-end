import { v4 as uuidv4 } from "uuid";

export const mockVagaRequisitoParams = {
  dataEntrada: new Date(),
  uuidRequisito: uuidv4(),
  uuidVaga: uuidv4(),
};

export const mockVagaRequisitoResponse = {
  ...mockVagaRequisitoParams,
  uuid: uuidv4(),
  createdAt: new Date(),
  updatedAt: new Date(),
};
