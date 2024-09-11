import { RequisitoService } from ".";
import { mockRequisitoResponse } from "../../../main/utils/mock/Requisito";
import { prisma } from "../../prisma/PrismaClient";

describe("Teste", () => {
    describe("Create", () => {
        afterEach(() => {
            jest.clearAllMocks();
        });
    
        it("201 - Cadastrar requisito com sucesso", () => {
        jest
            .spyOn(prisma.requisito, "create")
            .mockResolvedValueOnce(mockRequisitoResponse);
    
        jest
            .spyOn(RequisitoService, "create")
            .mockResolvedValueOnce(mockRequisitoResponse);
        });
    
        it("400 - Erro ao cadastrar requisito", () => {
        jest
            .spyOn(prisma.requisito, "create")
            .mockRejectedValueOnce(new Error());
    
        jest
            .spyOn(RequisitoService, "create")
            .mockRejectedValueOnce(new Error());
        });
    });
});