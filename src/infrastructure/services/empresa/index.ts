import * as create from "./Create";
import * as getAll from "./GetAll";
import * as getByUUID from "./GetByUUID";
import * as updateByUUID from "./UpdateByUUID";
import * as deleteByUUID from "./DeleteByUUID";
import * as getByEmail from "./GetByEmail";

export const EmpresaService = {
  ...create,
  ...getAll,
  ...getByUUID,
  ...getByEmail,
  ...updateByUUID,
  ...deleteByUUID,
};
