/**
 * Clase que representa una pelicula
 */
export class Pelicula {
  /**
   * Constructor de la clase Pelicula
   * @param _name Nombre de la pelicula
   * @param _year Año de salida de la pelicula
   * @param _genres Géneros de la pelicula
   * @param _length Duración de la película en minutos
   */
  constructor(
    private _name: string,
    private _year: number,
    private _genres: string[],
    private _length: number
  ) {}

  /**
   * Getter del nombre
   */
  get name() {
    return this._name;
  }

  /**
   * Setter del nombre
   */
  set name(name) {
    this._name = name;
  }

  /**
   * Getter del año
   */
  get year() {
    return this._year;
  }

  /**
   * Setter del año
   */
  set year(year) {
    this._year = year;
  }

  /**
   * Getter de la lista de generos
   */
  get genres() {
    return this._genres;
  }

  /**
   * Setter de la lista de generos
   */
  set genres(genres) {
    this._genres = genres;
  }

  /**
   * Getter de la duración de la película
   */
  get length() {
    return this._length;
  }

  /**
   * Setter de la duración de la película
   */
  set length(length) {
    this._length = length;
  }
}
