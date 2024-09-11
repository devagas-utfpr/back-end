import { CargoService } from ".";
import { mockCargoResponse } from "../../../main/utils/mock/Cargo";
import { prisma } from "../../prisma/PrismaClient";

describe("Teste", () => {
    describe("Create", () => {
        afterEach(() => {
            jest.clearAllMocks();
        });
    
        it("201 - Cadastrar cargo com sucesso", () => {
        jest
            .spyOn(prisma.cargo, "create")
            .mockResolvedValueOnce(mockCargoResponse);
    
        jest
            .spyOn(CargoService, "create")
            .mockResolvedValueOnce(mockCargoResponse);
        });
    
        it("400 - Erro ao cadastrar cargo", () => {
        jest
            .spyOn(prisma.cargo, "create")
            .mockRejectedValueOnce(new Error());
    
        jest
            .spyOn(CargoService, "create")
            .mockRejectedValueOnce(new Error());
        });
    });
});