import { UsuarioVaga } from "../entities/UsuarioVaga";

export interface IUsuarioVagaRepository {
  create(UsuarioVaga: UsuarioVaga): Promise<void>;
  getByUuid(uuid: string): Promise<UsuarioVaga>;
  getByUsuario(): Promise<UsuarioVaga[]>;
  update(UsuarioVaga: UsuarioVaga, uuid: string): Promise<void>;
}
