import { Artista } from "./Artista";

/**
 * Clase que permite gestionar una lista de artistas
 */
export class Biblioteca {
  private _listaArtistas: Array<Artista>;

  /**
   * Constructor de la clase biblioteca
   * @param listaArtistas Array de artistas
   */
  constructor(listaArtistas: Array<Artista>) {
    this._listaArtistas = listaArtistas;
  }

  /**
   * Getter de la lista de artistas
   */
  get listaArtistas() {
    return this._listaArtistas;
  }

  /**
   * Setter de la lista de artistas
   * @param listaArtistas nueva lista de artistas
   */
  set listaArtistas(listaArtistas) {
    this._listaArtistas = listaArtistas;
  }

  /**
   * Función que busca artistas en la discografia
   * @param nombre Nombre del artista a buscar
   * @returns Lista de artistas que coinciden con la busqueda
   */
  searchArtist(nombre: string): Array<Artista> {
    const lista: Array<Artista> = [];
    for (let i = 0; i < this._listaArtistas.length; ++i) {
      if (
        this._listaArtistas[i].nombre
          .toLowerCase()
          .includes(nombre.toLowerCase()) === true
      ) {
        lista.push(this._listaArtistas[i]);
      }
    }
    console.table(lista);
    return lista;
  }

  /**
   * Función que permite añadir artistas a la lista
   * @param artista Artista a añadir
   */
  addArtist(artista: Artista): void {
    this._listaArtistas.push(artista);
  }

  /**
   * Método que imprime la lista de artistas
   */
  print() {
    console.table(this._listaArtistas);
    let print = "";
    for (let i = 0; i < this._listaArtistas.length; ++i) {
      if (i !== 0) {
        print += ", ";
      }
      print += `${this._listaArtistas[i].nombre}`;
    }
    return print;
  }
}
