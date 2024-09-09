import { v4 as uuidv4 } from "uuid";

export const mockUsuarioVagaParams = {
  dataEntrada: new Date(),
  status: true,
  uuidUsuario: uuidv4(),
  uuidVaga: uuidv4(),
};

export const mockUsuarioVagaResponse = {
  ...mockUsuarioVagaParams,
  uuid: uuidv4(),
  createdAt: new Date(),
  updatedAt: new Date(),
};
