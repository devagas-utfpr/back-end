import { Requisito } from "../entities/Requisito";

export interface IRequisitoRepository {
    create(Requisito: Requisito): Promise<void>;
    getAll(): Promise<Requisito[]>;
    getByUuid(uuid: string): Promise<Requisito>;
    update(Requisito: Requisito, uuid: string): Promise<void>;
    delete(uuid: string): Promise<void>;

}