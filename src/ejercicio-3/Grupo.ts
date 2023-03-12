import { Artista } from "./Artista";
import { Disco } from "./Disco";
import { Discografia } from "./Discografia";
import { Single } from "./Single";

/**
 * Clase que representa a un grupo
 */
export class Grupo extends Artista {
  /**
   * Constructor de la clase Grupo
   * @param nombre Nombre del Grupo
   * @param oyentes Nº de oyentes mensuales
   * @param discografia Discografía del Grupo
   */
  constructor(
    nombre: string,
    oyentes: number,
    discografia: Discografia<Disco | Single>
  ) {
    super(nombre, oyentes, discografia);
  }
}
