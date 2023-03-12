/**
 * Clase que representa una lista genérica de elementos
 */
export class Lista<T> {
  /**
   * Constructor de la clase
   * @param _list Array que almacena la lista genérica
   */
  constructor(private _list: T[]) {}

  /**
   * Getter de la lista
   */
  get list() {
    return this._list;
  }

  /**
   * Setter de la lista
   */
  set list(list: T[]) {
    this._list = list;
  }

  /**
   * Método que permite introducir la lista pasada por parámetros en la lista actual
   * @param lista Lista que se va a introducir
   */
  append(lista: Lista<T>): void {
    let i = 0;
    while (this._list[i] !== undefined) {
      ++i;
    }
    let j = 0;
    while (lista.list[j] !== undefined) {
      this._list[i + j] = lista.list[j];
      ++j;
    }
  }

  /**
   * Método que concatena listas genéricas
   * @param lista Listas que se van a concatenar
   * @returns Listas concatenadas
   */
  concatenate(lista: Lista<T>[]): Lista<T> {
    const newList = new Lista<T>([]);
    newList.list = [...this._list];
    let i = 0;
    while (lista[i] !== undefined) {
      newList.append(lista[i]);
      ++i;
    }
    return newList;
  }

  /**
   * Método que filtra los elementos de una lista
   * @param callback Función que filtra los elementos
   * @returns Lista filtrada
   */
  filter(callback: (i: T) => boolean): Lista<T> {
    const newList = new Lista<T>([]);
    let i = 0;
    let j = 0;
    while (this._list[i] !== undefined) {
      if (callback(this._list[i])) {
        newList.list[j] = this._list[i];
        j++;
      }
      ++i;
    }
    return newList;
  }

  /**
   * Método que devuelve el tamaño de la lista
   * @returns Tamaño de la lista
   */
  length(): number {
    let i = 0;
    while (this._list[i] !== undefined) {
      ++i;
    }
    return i;
  }

  /**
   * Método que devuelve una lista a cuyos elementos se le aplica el mapeo con la función pasada por parámetros
   * @param callback Función utilizada para mapear
   * @returns
   */
  map(callback: (i: T) => T): Lista<T> {
    const newList = new Lista<T>([]);
    let i = 0;
    while (this._list[i] !== undefined) {
      newList.list[i] = callback(this._list[i]);
      ++i;
    }
    return newList;
  }

  /**
   * Método que permite acumular en una varibale según cierta función
   * @param callback Función que dictamina lo que se va a acumular
   * @param accumulator Acumulador
   * @returns Acumulador
   */
  reduce(callback: (i: T, acc: T) => T, accumulator: T): T {
    let i = 0;
    while (this._list[i] !== undefined) {
      accumulator = callback(this._list[i], accumulator);
      ++i;
    }
    return accumulator;
  }

  /**
   * Método que invierte la lista
   */
  reverse(): void {
    const array = [...this._list];
    for (let i = 0; i < this.length(); ++i) {
      this._list[i] = array[this.length() - 1 - i];
    }
  }

  /**
   * Método que, para cada elemento de la lista, aplica una función
   * @param callback Función que se va a aplicar en cada elemento
   */
  forEach(callback: (i: T) => T): void {
    let i = 0;
    while (this._list[i] !== undefined) {
      this._list[i] = callback(this._list[i]);
      ++i;
    }
  }
}
