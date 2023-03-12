import { Disco } from "./Disco";
import { Discografia } from "./Discografia";
import { Single } from "./Single";

/**
 * Clase para representar un artista
 */
export abstract class Artista {
  private _nombre: string;
  private _oyentes: number;
  private _discografia: Discografia<Disco | Single>;

  /**
   * Constructor de la clase artista
   * @param nombre Nombre del artista
   * @param oyentes Nº de oyentes mensuales
   * @param discografia Discografía del artista
   */
  constructor(
    nombre: string,
    oyentes: number,
    discografia: Discografia<Disco | Single>
  ) {
    if (/\.|-/.test(oyentes.toString()) === true) {
      throw new TypeError(
        "La cantidad de oyentes mensuales debe de ser un valor entero positivo"
      );
    }
    this._nombre = nombre;
    this._oyentes = oyentes;
    this._discografia = discografia;
  }

  /**
   * Getter del nombre del artista
   */
  get nombre(): string {
    return this._nombre;
  }

  /**
   * Setter del nombre del artista
   * @param nombre Nuevo nombre de artista
   */
  set nombre(nombre) {
    this._nombre = nombre;
  }

  /**
   * Getter del número de oyentes mensuales
   */
  get oyentes(): number {
    return this._oyentes;
  }

  /**
   * Setter del número de oyentes mensuales
   * @param oyentes Nuevo número de oyentes
   */
  set oyentes(oyentes) {
    this._oyentes = oyentes;
  }

  /**
   * Getter de la discografía del artista
   */
  get discografia() {
    return this._discografia;
  }

  /**
   * Setter de la discografía del artista
   * @param discografia Nueva Discografia
   */
  set discografia(discografia) {
    this._discografia = discografia;
  }

  print() {
    console.table([this._nombre, this._oyentes, this._discografia]);
    let print = `${this._nombre} (${this._oyentes} oyentes mensuales):`;
    for (let i = 0; i < this._discografia.discografia.length; ++i) {
      print += `\n${this._discografia.discografia[i].nombre}`;
    }
    return print;
  }
}
