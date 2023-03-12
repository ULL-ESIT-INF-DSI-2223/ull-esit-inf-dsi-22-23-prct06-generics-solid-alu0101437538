/**
 * Clase que representa una serie
 */
export class Serie {
  /**
   * Constructor de la clase Serie
   * @param _name Nombre de la serie
   * @param _year Año de salida de la serie
   * @param _genres Géneros de la serie
   * @param _episodeNumber Número de episodios
   * @param _episodeLength Duración media de los episodios
   */
  constructor(
    private _name: string,
    private _year: number,
    private _genres: string[],
    private _episodeNumber: number,
    private _episodeLength: number
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
   * Getter del número de episodios
   */
  get episodeNumber() {
    return this._episodeNumber;
  }

  /**
   * Setter del número de episodios
   */
  set episodeNumber(episodeNumber) {
    this._episodeNumber = episodeNumber;
  }

  /**
   * Getter de la duración de cada episodio
   */
  get episodeLength() {
    return this._episodeLength;
  }

  /**
   * Setter de la duración de cada episodio
   */
  set episodeLength(episodeLength) {
    this._episodeLength = episodeLength;
  }
}
