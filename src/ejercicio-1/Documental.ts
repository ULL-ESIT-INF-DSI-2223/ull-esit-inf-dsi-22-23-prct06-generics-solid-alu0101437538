/**
 * Clase que representa una documental
 */
export class Documental {
  /**
   * Constructor de la clase Documental
   * @param _name Nombre del documental
   * @param _year Año de salida del documental
   * @param _genres Géneros del documental
   * @param _partNumber Número de las partes en las que se divide el documental
   * @param _partLength Duración media de las partes del documental
   */
  constructor(
    private _name: string,
    private _year: number,
    private _partNumber: number,
    private _partLength: number
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
   * Getter del número de partes
   */
  get partNumber() {
    return this._partNumber;
  }

  /**
   * Setter del número de partes
   */
  set partNumber(partNumber) {
    this._partNumber = partNumber;
  }

  /**
   * Getter de la duración de cada parte
   */
  get partLength() {
    return this._partLength;
  }

  /**
   * Setter de la duración de cada parte
   */
  set partLength(partLength) {
    this._partLength = partLength;
  }
}
