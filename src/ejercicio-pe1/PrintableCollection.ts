import { Collectable } from "./Collectable";
import { Printable } from "./Printable";

/**
 * Clase abstracta de una colección que se puede imprimir
 */
export abstract class PrintableCollection<T> implements Collectable<T>, Printable<T>{
    /**
     * Constructor de la clase abstracta PrintableCollection
     * @param collection Colección de elementos
     */
    constructor(public collection: T[]) {
    }

    /**
     * Método que permite obtener un item de la conexión
     * @param index Posición del item
     * @returns El item buscado
     */
    getItem(index: number): T {
        if (index < 0 || index >= this.collection.length) {
            return undefined
        }
        return this.collection[index]
    }

    /**
     * Función que añade un item a la conexión
     * @param item Item a añadir
     */
    addItem(item: T): void {
        this.collection.push(item)
    }

    /**
     * Función que elimina un item de la colección
     * @param index Posición del item a eliminar
     * @returns El item eliminado
     */
    removeItem(index: number): T {
        if (index < 0 || index >= this.collection.length) {
            return undefined
        }
        return this.collection.splice(index, 1)[0]
    }

    /**
     * Función que devuelve el tamaño de la colección
     * @returns El tamaño de la colección
     */
    getNumberOfItems(): number {
        return this.collection.length
    }

    /**
     * Función abstracta que permite imprimir la colección
     */
    abstract print(): string;
}