import { PrintableCollection } from "./PrintableCollection";

/**
 * Clase que permite manejar e imrpimir una colección de números
 */
export class NumericPrintableCollection extends PrintableCollection<number> {
  /**
   * Constructor de la colección
   * @param collection Colección
   */
  constructor(collection: number[]) {
    super(collection);
  }

  /**
   * Función que permite "imprimir" la colección de números
   * @returns String que contiene los datos organizados de manera imprimible
   */
  print(): string {
    return this.collection.toString();
  }
}
