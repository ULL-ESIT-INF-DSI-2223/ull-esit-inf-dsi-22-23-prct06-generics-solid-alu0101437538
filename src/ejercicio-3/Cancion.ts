/**
 * Clase que representa una canción
 */
export class Cancion {
  private _nombre: string;
  private _duracion: number;
  private _genero: string;
  private _single: boolean;
  private _reproducciones: number;

  /**
   * Constructor de la clase Canción
   * @param nombre Nombre de la canción
   * @param duracion Duración en segundos
   * @param genero Género musical
   * @param single Si fue lanzada como single
   * @param reproducciones Número de reproducciones
   */
  constructor(
    nombre: string,
    duracion: number,
    genero: string,
    single: boolean,
    reproducciones: number
  ) {
    if (duracion < 0) {
      throw new TypeError("La duración no puede ser negativa");
    }
    if (/\.|-/.test(reproducciones.toString()) === true) {
      throw new TypeError(
        "La cantidad de reproducciones debe de ser un valor entero positivo"
      );
    }
    this._nombre = nombre;
    this._duracion = duracion;
    this._genero = genero;
    this._single = single;
    this._reproducciones = reproducciones;
  }

  /**
   * Getter del nombre
   */
  get nombre() {
    return this._nombre;
  }

  /**
   * Setter del nombre
   * @param nombre nombre de la canción
   */
  set nombre(nombre) {
    this._nombre = nombre;
  }

  /**
   * Getter de la duración
   */
  get duracion() {
    return this._duracion;
  }

  /**
   * Setter de la duración
   * @param duarcion Duración de la cación
   */
  set duracion(duracion) {
    this._duracion = duracion;
  }

  /**
   * Getter del género
   */
  get genero() {
    return this._genero;
  }

  /**
   * Setter del género
   * @param genero Nuevo genero musical
   */
  set genero(genero) {
    this._genero = genero;
  }

  /**
   * Getter de si es un single
   */
  get single() {
    return this._single;
  }

  /**
   * Setter de si es un single o no
   * @param single nuevo indicador de single
   */
  set single(single) {
    this._single = single;
  }

  /**
   * Getter del número de reproducciones
   */
  get reproducciones() {
    return this._reproducciones;
  }

  /**
   * Setter del número de reproducciones
   * @param Reproducciones nuevo número de reproducciones
   */
  set reproducciones(reproducciones) {
    this._reproducciones = reproducciones;
  }
}
