import { IOES } from "../buildings/ioes"
import { NewAcad } from "../buildings/newacad"
import { STUDENTCENTER } from "../buildings/studentcenter"
import { SHSBUILDING } from "../buildings/shsbuilding"
import { CASS } from "../buildings/cas"
import { FIC } from "../buildings/fic"
import { COED } from "../buildings/coed"
import { NewRegistrar } from "../buildings/newregistrar"

export const modelRegistry: Record<string, any> = {
  IOES,
  NEWACAD: NewAcad,
  STUDENTCENTER: STUDENTCENTER,
  SHSBUILDING: SHSBUILDING,
  CASS,
  FIC,
  COED,
  NewRegistrar
}