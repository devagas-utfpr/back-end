import { Usuario } from "../entities/Usuario";

export interface IUsuarioRepository {
  create(Usuario: Usuario): Promise<void>;
  getAll(): Promise<Usuario[]>;
  getByUuid(uuid: string): Promise<Usuario>;
  update(Usuario: Usuario, uuid: string): Promise<void>;
  delete(uuid: string): Promise<void>;
}