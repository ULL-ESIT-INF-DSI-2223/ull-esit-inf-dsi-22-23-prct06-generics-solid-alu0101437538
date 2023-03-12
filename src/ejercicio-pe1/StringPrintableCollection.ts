import { PrintableCollection } from "./PrintableCollection";

/**
 * Clase que permite manejar e imrpimir una colección de strings
 */
export class StringPrintableCollection extends PrintableCollection<string> {
  /**
   * Constructor de la colección
   * @param collection Colección
   */
  constructor(collection: string[]) {
    super(collection);
  }

  /**
   * Función que permite "imprimir" la colección de strings
   * @returns String que contiene los datos organizados de manera imprimible
   */
  print(): string {
    return this.collection.join();
  }
}
