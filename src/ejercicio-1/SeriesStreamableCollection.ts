import { BasicStreamableCollection } from "./BasicStreamableCollection";
import { Serie } from "./Serie";

/**
 * Clase que maneja una colección de series
 */
export class SeriesStreamableCollection extends BasicStreamableCollection<Serie> {
  /**
   * Constructor de la clase SeriesStreamableCollection
   * @param collection Array de series
   */
  constructor(collection: Serie[]) {
    super(collection);
  }

  /**
   * Método que busca series según el nombre
   * @param name Nombre de la serie
   * @returns Series que tengan coincidencias
   */
  getItemByName(name: string): Serie[] {
    const array: Serie[] = [];
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
   * Método que busca series según el año
   * @param year Año de la serie
   * @returns Series que coincidan en el año
   */
  getItemByYear(year: number): Serie[] {
    const array: Serie[] = [];
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
      string += `${this.collection[i].name} (${this.collection[i].genres}): ${this.collection[i].year}, ${this.collection[i].episodeNumber} episodios de ${this.collection[i].episodeLength}m\n`;
    }
    return string;
  }
}
