import * as create from "./Create";
import * as getAll from "./GetAll";
import * as getByUUID from "./GetByUUID";
import * as updateByUUID from "./UpdateByUUID";
import * as deleteByUUID from "./DeleteByUUID";

export const UsuarioController = {
  ...create,
  ...getAll,
  ...getByUUID,
  ...updateByUUID,
  ...deleteByUUID,
};
