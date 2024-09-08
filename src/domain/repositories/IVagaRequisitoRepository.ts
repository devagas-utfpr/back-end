import { VagaRequisito } from "../entities/VagaRequisito";

export interface IVagaRequisitoRepository {
  create(VagaRequisito: VagaRequisito): Promise<void>;
  getByVaga(uuid: string): Promise<VagaRequisito>;
  delete(uuid: string): Promise<void>;
}
 