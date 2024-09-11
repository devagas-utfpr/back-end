import { VagaService } from ".";
import { mockVagaResponse } from "../../../main/utils/mock/Vaga";
import { prisma } from "../../prisma/PrismaClient";

describe("Teste", () => {
    describe("Create", () => {
        afterEach(() => {
            jest.clearAllMocks();
        });
    
        it("201 - Cadastrar vaga com sucesso", () => {
        jest
            .spyOn(prisma.vaga, "create")
            .mockResolvedValueOnce(mockVagaResponse);
    
        jest
            .spyOn(VagaService, "create")
            .mockResolvedValueOnce(mockVagaResponse);
        });
    
        it("400 - Erro ao cadastrar vaga", () => {
        jest
            .spyOn(prisma.vaga, "create")
            .mockRejectedValueOnce(new Error());
    
        jest
            .spyOn(VagaService, "create")
            .mockRejectedValueOnce(new Error());
        });
    });
});