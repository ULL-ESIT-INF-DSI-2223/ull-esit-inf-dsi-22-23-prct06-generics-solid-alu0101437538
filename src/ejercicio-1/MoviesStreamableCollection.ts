import { BasicStreamableCollection } from "./BasicStreamableCollection";
import { Pelicula } from "./Pelicula";

/**
 * Clase que maneja una colección de películas
 */
export class MoviesStreamableCollection extends BasicStreamableCollection<Pelicula> {
  /**
   * Constructor de la clase MoviesStreamableCollection
   * @param collection Array de peliculas
   */
  constructor(collection: Pelicula[]) {
    super(collection);
  }

  /**
   * Método que busca películas según el nombre
   * @param name Nombre de la película
   * @returns películas que tengan coincidencias
   */
  getItemByName(name: string): Pelicula[] {
    const array: Pelicula[] = [];
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
   * Método que busca películas según el año
   * @param year Año de la película
   * @returns películas que coincidan en el año
   */
  getItemByYear(year: number): Pelicula[] {
    const array: Pelicula[] = [];
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
      string += `${this.collection[i].name} (${this.collection[i].genres}): ${this.collection[i].year}, ${this.collection[i].length}m\n`;
    }
    return string;
  }
}
