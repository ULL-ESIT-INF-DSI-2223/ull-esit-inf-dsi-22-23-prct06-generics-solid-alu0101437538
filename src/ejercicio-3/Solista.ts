import { Artista } from "./Artista";
import { Discografia } from "./Discografia";
import { Disco } from "./Disco";
import { Single } from "./Single";

/**
 * Clase que representa a un Solista
 */
export class Solista extends Artista {
  /**
   * Constructor de la clase Solista
   * @param nombre Nombre del Solista
   * @param oyentes Nº de oyentes mensuales
   * @param discografia Discografía del Solista
   */
  constructor(
    nombre: string,
    oyentes: number,
    discografia: Discografia<Disco | Single>
  ) {
    super(nombre, oyentes, discografia);
  }
}
