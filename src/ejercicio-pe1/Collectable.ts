/**
 * Interfaz genérica que declara métodos de colección
 */
export interface Collectable<T> {
  addItem(item: T): void;
  getItem(index: number): T;
  removeItem(index: number): T;
  getNumberOfItems(): number;
}
