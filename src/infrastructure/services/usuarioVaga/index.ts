import * as create from "./Create";
import * as getByUUID from "./GetByUUID";
import * as getByUsuario from "./GetByUsuario";
import * as updateByUUID from "./UpdateByUUID";
import * as deleteByUUID from "./DeleteByUUID";

export const UsuarioVagaService = {
  ...create,
  ...getByUUID,
  ...getByUsuario,
  ...updateByUUID,
  ...deleteByUUID,
};
