import { Cancion } from "./Cancion";

/**
 * Clase que representa un disco
 */
export class Disco {
  private _nombre: string;
  private _año: number;
  private _canciones: Array<Cancion>;

  /**
   * Constructor de la clase disco
   * @param nombre Nombre del disco
   * @param año Año de salida
   * @param canciones Lista de canciones
   */
  constructor(nombre: string, año: number, canciones: Array<Cancion>) {
    this._nombre = nombre;
    this._año = año;
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
   * Getter de la lista de canciones
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

  /**
   * Función que permite buscar una canción en la lista
   * @param nombre Nombre de la canción a buscar
   * @returns Lista con las coincidencias de nombres
   */
  searchSong(nombre: string): Array<Cancion> {
    const lista: Array<Cancion> = [];
    for (let i = 0; i < this._canciones.length; ++i) {
      if (
        this._canciones[i].nombre
          .toLowerCase()
          .includes(nombre.toLowerCase()) === true
      ) {
        lista.push(this._canciones[i]);
      }
    }
    console.table(lista);
    return lista;
  }

  /**
   * Función que permite añadir canciones a la lista
   * @param cancion Canción a añadir
   */
  addSong(cancion: Cancion): void {
    this._canciones.push(cancion);
  }

  /**
   * Función que permite conocer el número de canciones de la lista
   * @returns Nº de canciones de la lista
   */
  numberOfSongs(): number {
    return this._canciones.length;
  }

  /**
   * Función que permite conocer la duración de la lista de canciones
   * @returns Duración total de la lista en segundos
   */
  totalDuration(): number {
    let duracion = 0;
    for (let i = 0; i < this._canciones.length; ++i) {
      duracion += this._canciones[i].duracion;
    }
    return duracion;
  }

  /**
   * Función que permite conocer la s reproducciones de la lista de canciones
   * @returns Reproducciones totales de la lista en segundos
   */
  totalReproductions(): number {
    let reproducciones = 0;
    for (let i = 0; i < this._canciones.length; ++i) {
      reproducciones += this._canciones[i].reproducciones;
    }
    return reproducciones;
  }
}
