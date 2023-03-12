import { BasicStreamableCollection } from "./BasicStreamableCollection";
import { Documental } from "./Documental";

/**
 * Clase que maneja una colección de documentales
 */
export class DocumentariesStreamableCollection extends BasicStreamableCollection<Documental> {
  /**
   * Constructor de la clase DocumentariesStreamableCollection
   * @param collection Array de documentales
   */
  constructor(collection: Documental[]) {
    super(collection);
  }

  /**
   * Método que busca documentales según el nombre
   * @param name Nombre del documental
   * @returns documentales que tengan coincidencias
   */
  getItemByName(name: string): Documental[] {
    const array: Documental[] = [];
    for (let i = 0; i < this.collection.length; ++i) {
      if (
        this.collection[i].name.toLowerCase().includes(name.toLowerCase()) ===
        true
      ) {
        array.push(this.collection[i]);
      }
    }
    return array;
  }

  /**
   * Método que busca documentales según el año
   * @param year Año del documental
   * @returns documentales que coincidan en el año
   */
  getItemByYear(year: number): Documental[] {
    const array: Documental[] = [];
    for (let i = 0; i < this.collection.length; ++i) {
      if (this.collection[i].year === year) {
        array.push(this.collection[i]);
      }
    }
    return array;
  }

  /**
   * Método que permite imprimir los datos
   * @returns String con los datos de la colección
   */
  print(): string {
    let string = "";
    for (let i = 0; i < this.collection.length; ++i) {
      string += `${this.collection[i].name} (${this.collection[i].year}): ${this.collection[i].partNumber} partes de ${this.collection[i].partLength}m\n`;
    }
    return string;
  }
}
