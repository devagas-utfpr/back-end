import * as create from "./Create";
import * as getAll from "./GetAll";
import * as getByUUID from "./GetByUUID";
import * as updateByUUID from "./UpdateByUUID";
import * as deleteByUUID from "./DeleteByUUID";
import * as getByEmpresa from "./GetByEmpresa";

export const VagaController = {
  ...create,
  ...getAll,
  ...getByUUID,
  ...getByEmpresa,
  ...updateByUUID,
  ...deleteByUUID,
};
