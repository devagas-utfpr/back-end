import * as create from "./Create";
import * as getAll from "./GetAll";
import * as getByUUID from "./GetByUUID";
import * as getByEmpresa from "./GetByEmpresa";
import * as updateByUUID from "./UpdateByUUID";
import * as deleteByUUID from "./DeleteByUUID";

export const VagaService = {
  ...create,
  ...getAll,
  ...getByUUID,
  ...getByEmpresa,
  ...updateByUUID,
  ...deleteByUUID,
};
