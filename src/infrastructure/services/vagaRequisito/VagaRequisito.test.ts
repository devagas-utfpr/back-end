import { VagaRequisitoService } from ".";
import { mockVagaRequisitoResponse } from "../../../main/utils/mock/VagaRequisito";
import { prisma } from "../../prisma/PrismaClient";

describe("Teste", () => {
    describe("Create", () => {
        afterEach(() => {
            jest.clearAllMocks();
        });
    
        it("201 - Cadastrar requisito para esta vaga com sucesso", () => {
        jest
            .spyOn(prisma.vagaRequisito, "create")
            .mockResolvedValueOnce(mockVagaRequisitoResponse);
    
        jest
            .spyOn(VagaRequisitoService, "create")
            .mockResolvedValueOnce(mockVagaRequisitoResponse);
        });
    
        it("400 - Erro ao cadastrar requisito para esta vaga", () => {
        jest
            .spyOn(prisma.vagaRequisito, "create")
            .mockRejectedValueOnce(new Error());
    
        jest
            .spyOn(VagaRequisitoService, "create")
            .mockRejectedValueOnce(new Error());
        });
    });
});