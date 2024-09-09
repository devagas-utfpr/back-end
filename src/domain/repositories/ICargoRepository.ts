import { Cargo } from "../entities/Cargo";

export interface ICargoRepository {
    create(Cargo: Cargo): Promise<void>;
    getAll(): Promise<Cargo[]>;
    getByUuid(uuid: string): Promise<Cargo>;
    update(Cargo: Cargo, uuid: string): Promise<void>;
    delete(uuid: string): Promise<void>;

}