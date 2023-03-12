# ull-esit-inf-dsi-22-23-prct06-generics-solid-alu0101437538
ull-esit-inf-dsi-22-23-prct06-generics-solid-alu0101437538 created by GitHub Classroom

# Práctica 6 - Clases e Interfaces genéricas. Principios SOLID
#### Aday Chocho Aisa

## Índice

1. Introducción
2. Ejercicios
    - Ejercicio 1
    - Ejercicio 2
    - Ejercicio 3
    - Ejercicio PE-1
3. Conclusiones
4. Referencias bibliográficas

## 1. Introducción
Esta práctica consiste en realizar 3 ejercicios (más el ejercicio de la clase práctica) sobre la teoría correspondiente a la semana pasada en clase (Clases e Interfaces genéricas), teniendo que respetarse los principios SOLID durante el desarrollo.

Cada ejercicio se almacena en un directorio distinto, correspondiendo cada fichero .ts del directorio con una clase o interfaz del mismo. Se dispone también de ficheros de pruebas en la carpeta `/tests/ejercicio-x`. La práctica se ha realizado según la metodología TDD y todo está documentado con TypeDoc.

## 2. Ejercicios

### 2.1. Ejercicio 1
El ejercicio consiste en diseñar el modelo de datos de una plataforma de vídeo en streaming. Para ello, se ha seguido una estructura de diseño la cual es la siguiente:

#### Serie, Pelicula y Documental
```typescript
class Serie {
  constructor(
    private _name: string,
    private _year: number,
    private _genres: string[],
    private _episodeNumber: number,
    private _episodeLength: number
  ) {}

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  get year() {
    return this._year;
  }

  set year(year) {
    this._year = year;
  }

  get genres() {
    return this._genres;
  }

  set genres(genres) {
    this._genres = genres;
  }

  get episodeNumber() {
    return this._episodeNumber;
  }

  set episodeNumber(episodeNumber) {
    this._episodeNumber = episodeNumber;
  }

  get episodeLength() {
    return this._episodeLength;
  }

  set episodeLength(episodeLength) {
    this._episodeLength = episodeLength;
  }
}

class Pelicula {
  constructor(
    private _name: string,
    private _year: number,
    private _genres: string[],
    private _length: number
  ) {}

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  get year() {
    return this._year;
  }

  set year(year) {
    this._year = year;
  }

  get genres() {
    return this._genres;
  }

  set genres(genres) {
    this._genres = genres;
  }

  get length() {
    return this._length;
  }

  set length(length) {
    this._length = length;
  }
}

class Documental {
  constructor(
    private _name: string,
    private _year: number,
    private _partNumber: number,
    private _partLength: number
  ) {}

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  get year() {
    return this._year;
  }

  set year(year) {
    this._year = year;
  }

  get partNumber() {
    return this._partNumber;
  }

  set partNumber(partNumber) {
    this._partNumber = partNumber;
  }

  get partLength() {
    return this._partLength;
  }

  set partLength(partLength) {
    this._partLength = partLength;
  }
}
```
Como vamos a desarrollar un catálogo de Series, Películas y Documentales, lo primero es crear esas tres clases. Son clases que simplemente cuentan con una serie de datos según el tipo de contenido que sea, el constructor y los getters/setters correspondientes.

- Series: Nombre, año, generos, número de episodios y duración media de estos.
- Películas: Nombre, año, géneros y duración.
- Documental: Nombre, año, número de partes y duración media de estas.

#### Interfaces Streamable y Printable
```typescript
interface Streamable<T> {
  collection: T[];
  addItem(item: T): void;
  getItemByIndex(index: number): T;
  getItemByYear(year: number): T[];
  getItemByName(name: string): T[];
  removeItem(index: number): T;
  getNumberOfItems(): number;
}

interface Printable<T> {
  print(): string;
}
```

En el ejercicio se nos pide el desarrollo de la interfaz genérica `Streamable`, que contiene propiedades y métodos con los que debería contar la colección de emisiones. Entre ellos, observamos la propiedad collection que será una array del tipo indicado y métodos para añadir, eliminar o buscar (por índice, nombre o año) emisiones. También se pbserva un método que devuelve el tamaño de la colección.

También se observa la interfaz genérica `Printable`, que contiene el método print para poder imprimir las colecciones.

#### BasicStreamableCollection
```typescript
abstract class BasicStreamableCollection<T>
  implements Streamable<T>, Printable<T>
{
  constructor(public collection: T[]) {}

  getItemByIndex(index: number): T {
    if (index < 0 || index >= this.collection.length) {
      return undefined;
    }
    return this.collection[index];
  }

  addItem(item: T): void {
    this.collection.push(item);
  }

  removeItem(index: number): T {
    if (index < 0 || index >= this.collection.length) {
      return undefined;
    }
    return this.collection.splice(index, 1)[0];
  }

  getNumberOfItems(): number {
    return this.collection.length;
  }

  abstract getItemByName(name: string): T[];
  abstract getItemByYear(year: number): T[];
  abstract print(): string;
}
```
La clase genérica abstracta `BasicStreamableCollection` servirá como base para tres clases futuras (relacionadas con los tipos de emisión). ESta implementa parte de los métodos de las dos interfaces anteriores, además de un constructor. Los métodos implementados fueron:
- `getItemByIndex()`: Devuelve la posición del array pasada por parámetros (en caso de estar fuera de rango, devuelve undefined).
- `gaddItem()`: Añade un item al array.
- `removeItem()`Elimina la posición del array pasada por parámetros (en caso de estar fuera de rango, devuelve undefined). La función devuelve el dato eliminado.
- `getNumberOfItems()`: DEvuelve el tamaño del array de la colección.

#### SeriesStreamableCollection, MoviesStreamableCollection y DocumentariesStreamableCollection
```typescript
class SeriesStreamableCollection extends BasicStreamableCollection<Serie> {
  constructor(collection: Serie[]) {
    super(collection);
  }

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

  getItemByYear(year: number): Serie[] {
    const array: Serie[] = [];
    for (let i = 0; i < this.collection.length; ++i) {
      if (this.collection[i].year === year) {
        array.push(this.collection[i]);
      }
    }
    return array;
  }

  print(): string {
    let string = "";
    for (let i = 0; i < this.collection.length; ++i) {
      string += `${this.collection[i].name} (${this.collection[i].genres}): ${this.collection[i].year}, ${this.collection[i].episodeNumber} episodios de ${this.collection[i].episodeLength}m\n`;
    }
    return string;
  }
}

class MoviesStreamableCollection extends BasicStreamableCollection<Pelicula> {
  constructor(collection: Pelicula[]) {
    super(collection);
  }

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

  getItemByYear(year: number): Pelicula[] {
    const array: Pelicula[] = [];
    for (let i = 0; i < this.collection.length; ++i) {
      if (this.collection[i].year === year) {
        array.push(this.collection[i]);
      }
    }
    return array;
  }

  print(): string {
    let string = "";
    for (let i = 0; i < this.collection.length; ++i) {
      string += `${this.collection[i].name} (${this.collection[i].genres}): ${this.collection[i].year}, ${this.collection[i].length}m\n`;
    }
    return string;
  }
}

class DocumentariesStreamableCollection extends BasicStreamableCollection<Documental> {
  constructor(collection: Documental[]) {
    super(collection);
  }

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

  getItemByYear(year: number): Documental[] {
    const array: Documental[] = [];
    for (let i = 0; i < this.collection.length; ++i) {
      if (this.collection[i].year === year) {
        array.push(this.collection[i]);
      }
    }
    return array;
  }

  print(): string {
    let string = "";
    for (let i = 0; i < this.collection.length; ++i) {
      string += `${this.collection[i].name} (${this.collection[i].year}): ${this.collection[i].partNumber} partes de ${this.collection[i].partLength}m\n`;
    }
    return string;
  }
}
```
Finalmente, extendiendo la clase anterior obtenemos `SeriesStreamableCollection`, `MoviesStreamableCollection` y `DocumentarisStreamableCollection`, que modelan cada una de las tres primeras clases diseñadas. Estas especifican los siguientes métodos:

- `getItemByName()`: Busca en la colección alguna coincidencia con el nombre, utilizando `.toLowerCase()` para que no importen las mays/mins y `.includes` para que no deba de ser el nombre exacto. Devuelve un array con las coincidencias.
- `getItemByYear()`: Busca en la colección las coincidencias con el año. Devuelve un array con las coincidencias.
- `print()`: Permite imprimir la colección de datos.

### 2.2. Ejercicio 2
En este ejercicio se debe implementar una clase genérica que modele una lista de elementos y sus operaciones sin hacer uso de ninguna de las funcionlidades de Array.prototype.
```typescript
class Lista<T> {
  constructor(private _list: T[]) {}

  get list() {
    return this._list;
  }

  set list(list: T[]) {
    this._list = list;
  }

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

  length(): number {
    let i = 0;
    while (this._list[i] !== undefined) {
      ++i;
    }
    return i;
  }

  map(callback: (i: T) => T): Lista<T> {
    const newList = new Lista<T>([]);
    let i = 0;
    while (this._list[i] !== undefined) {
      newList.list[i] = callback(this._list[i]);
      ++i;
    }
    return newList;
  }

  reduce(callback: (i: T, acc: T) => T, accumulator: T): T {
    let i = 0;
    while (this._list[i] !== undefined) {
      accumulator = callback(this._list[i], accumulator);
      ++i;
    }
    return accumulator;
  }

  reverse(): void {
    const array = [...this._list];
    for (let i = 0; i < this.length(); ++i) {
      this._list[i] = array[this.length() - 1 - i];
    }
  }

  forEach(callback: (i: T) => T): void {
    let i = 0;
    while (this._list[i] !== undefined) {
      this._list[i] = callback(this._list[i]);
      ++i;
    }
  }
}
```
En la clase podemos observar tanto el constructor, como el getter/setter de la lista y los distintos métodos. Para no usar las propiedades de array, los métodos se han desarrollado de la siguiente manera:

- `append()`: A partir de un bucle y un iterador `i` inicializado a 0, va sumando hasta que la posición sea undefined (`i` será la longitud de la lista). Entonces, se inicializa la varriable `j` a 0 y en otro bucle, se inserta en la posición `i+j` de la lista actual la posición `j` de la que se va a anexar.
- `concatenate()`: Se crea una lista que copia a la actual y se inicia un iterador `i` a 0. Entonces, hasta que la posición `i` del array de listas no sea undefined, irá concatenando cada lista a `newList` con el método anterior. Se devolverá la variable `newList`.
- `filter()`: A partir del callback, una lista vacia `newList` y dos iteradores `i` y `j` a 0, se entra en un bucle que recorre la lista actual. En caso de que se satisfaga la condición del callback, se introducirá el valor la posición `j` de `newList`, avanzando el iterador. Se devolverá la variable `newList`.
- `length()`: Recorre la lista hasta que la posición `i` sea undefined. Entonces, `i` será el tamaño de la lista.
- `map()`: A partir de un bucle, una lista vacia `newList` y un iterador `i` inicializado a 0, va sumando hasta que la posición sea undefined. Entonces, en la posición `i` de `newList` se introduce el resultado del callback de la posición `i` de la lista actual. Se devolverá la variable `newList`.
- `reduce()`: A partir de un bucle, una acumulador y un iterador `i` inicializado a 0, va sumando hasta que la posición sea undefined. Entonces, en cada iteracción se suma al acumulador el resultado del callback de la posición `i` de la lista actual. Se devolverá el acumulador.
- `reverse()`: Con la ayuda de la función `length()`, una copia de la lista actual y un bucle for, se introducen los valores de la copia a la lista en orden inverso.
- `forEach()`: A partir de un bucle y un iterador `i` inicializado a 0, va sumando hasta que la posición sea undefined. Entonces, en la posición `i` de la lista actual se introduce el resultado del callback con la posición `i` de la propi lista.

### 2.3. Ejercicio 3
Este ejercicio se basa en modificar el ejercicio de la biblioteca musical de la práctica anterior, creando una nueva clase y transformando Discografía a una clase genérica. Antes de empezar con el ejercico, se corrigieron todos los errores que tenía este de la semana pasada:
- Ahora existen las clases Grupo y Solista, que heredan de artista.
- Se eliminó la clase ListaCanciones.
- Se reubicaron métodos a la clase Disco.

#### Clase Single
```typescript
class Single {
  private _nombre: string;
  private _año: number;
  private _canciones: Cancion[];

  /**
   * Constructor de la clase disco
   * @param nombre Nombre del disco
   * @param año Año de salida
   * @param canciones Canciones del single
   */
  constructor(nombre: string, año: number, canciones: Cancion[]) {
    this._nombre = nombre;
    this._año = año;
    for (let i = 0; i < canciones.length; ++i) {
      if (
        canciones[i].nombre.toLowerCase().includes(nombre.toLowerCase()) ===
          false ||
        canciones[i].single === false
      ) {
        throw new Error(
          "Existe una canción en el single que no es una version"
        );
      }
    }
    this._canciones = canciones;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(nombre) {
    this._nombre = nombre;
  }

  get año() {
    return this._año;
  }

  set año(año) {
    this._año = año;
  }

  get canciones() {
    return this._canciones;
  }

  set canciones(canciones: Cancion[]) {
    this._canciones = canciones;
  }
}
```
La clase Single es muy parecida a la clase Disco, ya que tiene las mismas propiedades, getters y setters que la cláse Disco. La principal diferencia es que un single solo puede contener una canción o varias versiones de la misma canción, por lo que se han puesto limitaciones en el constructor.

A la hora de instanciar un Single, se tiene que dar 2 situaciones: Que todas las canciones tengan el mismo nombre que el nombre del single y que todas las canciones tengan el parámetro de sigle en verdadero. En caso de que no se cumpla, se lanzará un error desde el constructor.

#### Clase Discografía genérica
```typescript
class Discografia<T extends Disco | Single> {
  private _discografia: T[];

  constructor(discografia: T[]) {
    this._discografia = discografia;
  }

  get discografia() {
    return this._discografia;
  }

  set discografia(discografia) {
    this._discografia = discografia;
  }

  searchItem(nombre: string): T[] {
    const lista: T[] = [];
    for (let i = 0; i < this._discografia.length; ++i) {
      if (
        this._discografia[i].nombre
          .toLowerCase()
          .includes(nombre.toLowerCase()) === true
      ) {
        lista.push(this._discografia[i]);
      }
    }
    console.table(lista);
    return lista;
  }

  addItem(item: T): void {
    this._discografia.push(item);
  }
}
```
La clase Discografía ahora es genérica, por lo que los métodos donde usaba el disco ahora usa el tipo genético `T`. Como este tipo va a ser `Disco`, `Single` o ambos, se extiende el tipo `T` a los dos tipos anteriores. Por último, cabe destacar que para el correcto funcionamiento de los test y de la clase Artista, se han hecho cambios, concretando que el tipo de la clase Discografía puede ser `Disco`, `Single` o ambos.

### 2.3. Ejercicio PE-1
En este ejercicio se debre crear una clase que permita manejar colecciones e imprimirlas.

#### Interfaces Printable y Collectable
```typescript
interface Collectable<T> {
  addItem(item: T): void;
  getItem(index: number): T;
  removeItem(index: number): T;
  getNumberOfItems(): number;
}

interface Printable<T> {
  print(): string;
}
```
Primero se crean dos interfaces, cada una con un objetivo:
- `Collectable`: Interfaz que incluye métodos para añadir, obtener y eliminar objetos, así como un método que devuelve el tamaño de la colección.
- `Printable`: Interfaz que contiene un método para imprimir.

#### Clase PrintableCollection
```typescript
abstract class PrintableCollection<T>
  implements Collectable<T>, Printable<T>
{
  constructor(public collection: T[]) {}

  getItem(index: number): T {
    if (index < 0 || index >= this.collection.length) {
      return undefined;
    }
    return this.collection[index];
  }

  addItem(item: T): void {
    this.collection.push(item);
  }

  removeItem(index: number): T {
    if (index < 0 || index >= this.collection.length) {
      return undefined;
    }
    return this.collection.splice(index, 1)[0];
  }

  getNumberOfItems(): number {
    return this.collection.length;
  }

  abstract print(): string;
}
```
La clase abstracta genérica `PrintableCollection<T>` servirá para poder crear clases hija más especificas. Esta implementa las interfaces anteriores y contiene un constructor que instancia la propiedad `T[]` e instancia los métodos de la `Collectable`, los cuales son comunes independiente del tipo. El método `print()` de `Printable` se especificará en las clases hijas, por lo que se marca como abstracto.

#### Clases NumberPrintableCollection y StringPrintableCollection
```typescript
class StringPrintableCollection extends PrintableCollection<string> {
  constructor(collection: string[]) {
    super(collection);
  }

  print(): string {
    return this.collection.join();
  }
}

class NumericPrintableCollection extends PrintableCollection<number> {
  constructor(collection: number[]) {
    super(collection);
  }

  print(): string {
    return this.collection.toString();
  }
}
```
De la clase anterior heredan dos clases: `StringPrintableCollection` y `NumericPrintableCollection`, las cuales son especificaciones del tipo genérico para los tipos `String` y `Number`. En ellas, el constructor manda a la clase padre a construir el objeto con `super()` y se instancia el método print, el cual depende del tipo de dato con el que trabajamos.

## 3. Conclusiones
En cuanto a los ejercicios realizados y el temario, quiero resaltar el hecho de que a veces trabajar con la herencia e interfaces sigue siendo confuso. Aunque comparado con la semana pasada entiendo mejor las Interfaces, muchas veces sigue sin quedame clara que elección debo de hacer a la hora de pensar como resolver un ejercicio ya que se pueden recurrir a muchas opciones. Y como las interfaces genéricas aportas más opciones aun, pues sigo confuso en ciertos momentos.

Pero aunque tenga confusión a la hora de resolver los ejercicios en temas de estructurar el ejercicio, el tema de las interfaces genéricas me ha quedado bastante claro. A la hora del desarrollo de código en TypeScript, uno tiene muchas opciones pero esta hay que destacarla, ya que puede ser muy util en ciertas situaciones.

## 4. Referencias bibliográficas
- [Guión de la práctica](https://ull-esit-inf-dsi-2223.github.io/prct06-generics-solid/)
- [Apuntes de la asignatura sobre objetos, clases e interfaces](https://ull-esit-inf-dsi-2223.github.io/typescript-theory/typescript-generics.html)
- [Principios Solid](https://ull-esit-inf-dsi-2223.github.io/typescript-theory/typescript-solid.html)
