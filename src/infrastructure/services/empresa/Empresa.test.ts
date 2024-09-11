import { EmpresaService } from '.';
import { mockEmpresaResponse } from '../../../main/utils/mock/Empresa';
import { prisma } from '../../prisma/PrismaClient';

describe("Teste", () => {
    describe("Create", () => {
      afterEach(() => {
        jest.clearAllMocks();
      });
  
      it("201 - Cadastrar inscrição de empresa com sucesso", () => {
        jest
          .spyOn(prisma.empresa, "create")
          .mockResolvedValueOnce(mockEmpresaResponse);
  
        jest
          .spyOn(EmpresaService, "create")
          .mockResolvedValueOnce(mockEmpresaResponse);
      });
  
      it("400 - Erro ao cadastrar inscrição de empresa", () => {
        jest
          .spyOn(prisma.empresa, "create")
          .mockRejectedValueOnce(new Error());
  
        jest
          .spyOn(EmpresaService, "create")
          .mockRejectedValueOnce(new Error());
      });
    });
});