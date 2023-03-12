import { Disco } from "./Disco";
import { Single } from "./Single";

/**
 * Clase que permite gestionar una lista de discos
 */
export class Discografia<T extends Disco | Single> {
  private _discografia: T[];

  /**
   * Constructor de la clase discografía
   * @param discografia Array de discos
   */
  constructor(discografia: T[]) {
    this._discografia = discografia;
  }

  /**
   * Getter de la discografía
   */
  get discografia() {
    return this._discografia;
  }

  /**
   * Setter de la discografía
   * @param discografia Nueva discografia
   */
  set discografia(discografia) {
    this._discografia = discografia;
  }

  /**
   * Función que busca discos o singles en la discografia
   * @param nombre Nombre del disco a buscar
   * @returns Lista de discos que coinciden con la busqueda
   */
  searchItem(nombre: string): T[] {
    const lista: T[] = [];
    for (let i = 0; i < this._discografia.length; ++i) {
      if (
        this._discografia[i].nombre
          .toLowerCase()
          .includes(nombre.toLowerCase()) === true
      ) {
        lista.push(this._discografia[i]);
      }
    }
    console.table(lista);
    return lista;
  }

  /**
   * Función que permite añadir discos/singles a la lista
   * @param disco Disco o single a añadir
   */
  addItem(item: T): void {
    this._discografia.push(item);
  }
}
