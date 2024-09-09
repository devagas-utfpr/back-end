import * as create from "./Create";
import * as getByUsuario from "./GetByUsuario";
import * as getByUUID from "./GetByUUID";
import * as updateByUUID from "./UpdateByUUID";
import * as deleteByUUID from "./DeleteByUUID";

export const UsuarioVagaController = {
  ...create,
  ...getByUsuario,
  ...getByUUID,
  ...updateByUUID,
  ...deleteByUUID,
};
