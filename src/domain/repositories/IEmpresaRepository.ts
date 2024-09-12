import { Empresa } from "../entities/Empresa";

export interface IEmpresaRepository {
  create(empresa: Empresa): Promise<void>;
  getAll(): Promise<Empresa[]>;
  getByUuid(uuid: string): Promise<Empresa>;
  getByEmail(email: string): Promise<Empresa>;
  update(empresa: Empresa): Promise<void>;
  delete(uuid: string): Promise<void>;
}
