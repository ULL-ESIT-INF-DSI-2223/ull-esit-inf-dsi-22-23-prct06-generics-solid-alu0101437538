import { Cancion } from "./Cancion";

/**
 * Clase que representa un disco
 */
export class Single {
  private _nombre: string;
  private _año: number;
  private _canciones: Cancion[];

  /**
   * Constructor de la clase disco
   * @param nombre Nombre del disco
   * @param año Año de salida
   * @param canciones Canciones del single
   */
  constructor(nombre: string, año: number, canciones: Cancion[]) {
    this._nombre = nombre;
    this._año = año;
    for (let i = 0; i < canciones.length; ++i) {
      if (
        canciones[i].nombre.toLowerCase().includes(nombre.toLowerCase()) ===
          false ||
        canciones[i].single === false
      ) {
        throw new Error(
          "Existe una canción en el single que no es una version"
        );
      }
    }
    this._canciones = canciones;
  }

  /**
   * Getter del nombre del disco
   */
  get nombre() {
    return this._nombre;
  }

  /**
   * Setter del nombre del disco
   * @param nombre Nuevo nombre de disco
   */
  set nombre(nombre) {
    this._nombre = nombre;
  }

  /**
   * Getter del año del disco
   */
  get año() {
    return this._año;
  }

  /**
   * Setter del año del disco
   * @param año nuevo año
   */
  set año(año) {
    this._año = año;
  }

  /**
   * Getter de la lista de cancion
   */
  get canciones() {
    return this._canciones;
  }

  /**
   * Setter de la lista de canciones
   * @param canciones nueva lista de canciones
   */
  set canciones(canciones: Cancion[]) {
    this._canciones = canciones;
  }
}
