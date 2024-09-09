import { UsuarioVagaService } from ".";
import { mockUsuarioVagaResponse } from "../../../main/utils/mock/UsuarioVaga";
import { prisma } from "../../prisma/PrismaClient";

describe("Teste", () => {
  describe("Create", () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    it("201 - Cadastrar inscrição de usuário com sucesso", () => {
      jest
        .spyOn(prisma.usuarioVaga, "create")
        .mockResolvedValueOnce(mockUsuarioVagaResponse);

      jest
        .spyOn(UsuarioVagaService, "create")
        .mockResolvedValueOnce(mockUsuarioVagaResponse);
    });

    it("400 - Erro ao cadastrar inscrição de usuário", () => {
      jest
        .spyOn(prisma.usuarioVaga, "create")
        .mockRejectedValueOnce(new Error());

      jest
        .spyOn(UsuarioVagaService, "create")
        .mockRejectedValueOnce(new Error());
    });
  });
});
