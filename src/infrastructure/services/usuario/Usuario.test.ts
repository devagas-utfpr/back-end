import { UsuarioService } from ".";
import { mockUsuarioResponse } from "../../../main/utils/mock/Usuario";
import { prisma } from "../../prisma/PrismaClient";

describe("Teste", () => {
    describe("Create", () => {
        afterEach(() => {
            jest.clearAllMocks();
        });
    
        it("201 - Cadastrar usuario com sucesso", () => {
        jest
            .spyOn(prisma.usuario, "create")
            .mockResolvedValueOnce(mockUsuarioResponse);
    
        jest
            .spyOn(UsuarioService, "create")
            .mockResolvedValueOnce(mockUsuarioResponse);
        });
    
        it("400 - Erro ao cadastrar usuario", () => {
        jest
            .spyOn(prisma.usuario, "create")
            .mockRejectedValueOnce(new Error());
    
        jest
            .spyOn(UsuarioService, "create")
            .mockRejectedValueOnce(new Error());
        });
    });
});