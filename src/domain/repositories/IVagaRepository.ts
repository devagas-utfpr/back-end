import { Vaga } from "../entities/Vaga";

export interface IVagaRepository {
  create(Vaga: Vaga): Promise<void>;
  getAll(): Promise<Vaga[]>;
  getByUuid(uuid: string): Promise<Vaga>;
  update(Vaga: Vaga, uuid: string): Promise<void>;
  delete(uuid: string): Promise<void>;
}
