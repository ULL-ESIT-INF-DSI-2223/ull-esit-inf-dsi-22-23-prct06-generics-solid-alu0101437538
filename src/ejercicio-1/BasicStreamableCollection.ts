import { Printable } from "./Printable";
import { Streamable } from "./Streamable";
/**
 * Clase abstracta de una colección de emisiones
 */
export abstract class BasicStreamableCollection<T>
  implements Streamable<T>, Printable<T>
{
  /**
   * Constructor de la clase abstracta BasicStreamableCollection
   * @param collection Colección de emisiones
   */
  constructor(public collection: T[]) {}

  /**
   * Método que permite obtener un item de la colección de emisiones a partir de su índice
   * @param index Posición del item
   * @returns El item buscado
   */
  getItemByIndex(index: number): T {
    if (index < 0 || index >= this.collection.length) {
      return undefined;
    }
    return this.collection[index];
  }

  /**
   * Función que añade un item a la colección de emisiones
   * @param item Item a añadir
   */
  addItem(item: T): void {
    this.collection.push(item);
  }

  /**
   * Función que elimina un item de la colección de emisiones
   * @param index Posición del item a eliminar
   * @returns El item eliminado
   */
  removeItem(index: number): T {
    if (index < 0 || index >= this.collection.length) {
      return undefined;
    }
    return this.collection.splice(index, 1)[0];
  }

  /**
   * Función que devuelve el tamaño de la colección de emisiones
   * @returns El tamaño de la colección de emisiones
   */
  getNumberOfItems(): number {
    return this.collection.length;
  }

  abstract getItemByName(name: string): T[];
  abstract getItemByYear(year: number): T[];
  abstract print(): string;
}
