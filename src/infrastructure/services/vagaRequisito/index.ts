import * as create from "./Create";
import * as getByVaga from "./GetByVaga";
import * as deleteByUUID from "./DeleteByUUID";

export const VagaRequisitoService = {
  ...create,
  ...getByVaga,
  ...deleteByUUID,
  };
  