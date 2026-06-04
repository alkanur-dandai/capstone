import { IOES } from "../buildings/ioes"
import { NewAcad } from "../buildings/newacad"
import { StudenCenter } from "../buildings/studentcenter"
import { SHS } from "../buildings/shsbuilding"
import { CASS } from "../buildings/cas"
import { FIC } from "../buildings/fic"
import { COED } from "../buildings/coed"
import { NewRegistrar } from "../buildings/newregistrar"

export const modelRegistry: Record<string, any> = {
  IOES,
  NEWACAD: NewAcad,
  STUDENCENTER: StudenCenter,
  SHS,
  CASS,
  FIC,
  COED,
  NewRegistrar
}