/**
 * Interfaz quecontiene propiedades y métodos para las colecciones de emisiones
 */
export interface Streamable<T> {
  collection: T[];
  addItem(item: T): void;
  getItemByIndex(index: number): T;
  getItemByYear(year: number): T[];
  getItemByName(name: string): T[];
  removeItem(index: number): T;
  getNumberOfItems(): number;
}
