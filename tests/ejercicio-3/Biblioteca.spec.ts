import "mocha";
import { expect } from "chai";
import { Discografia } from "../../src/ejercicio-3/Discografia";
import { Cancion } from "../../src/ejercicio-3/Cancion";
import { Disco } from "../../src/ejercicio-3/Disco";
import { Biblioteca } from "../../src/ejercicio-3/Biblioteca";
import { Grupo } from "../../src/ejercicio-3/Grupo";
import { Solista } from "../../src/ejercicio-3/Solista";

describe("Test de Biblioteca", () => {
  const discografia = new Discografia([
    new Disco("Wish you Where Here", 1975, [
      new Cancion(
        "Shine On You Crazy Diamond, pt 1-5",
        810,
        "Rock Progresivo",
        false,
        176637905
      ),
    ]),
    new Disco("The Wall", 1979, [
      new Cancion("Mother", 184, "Rock Progresivo", false, 24543245),
    ]),
  ]);
  const PinkFloyd = new Grupo("Pink Floyd", 999999999, discografia);
  const EricClapton = new Solista(
    "Eric Clapton",
    800000000,
    new Discografia([])
  );

  const Biblio = new Biblioteca([PinkFloyd]);

  it("La biblioteca se crea correctamente", () => {
    expect(Biblio).to.be.instanceOf(Biblioteca);
  });
  it("Se puede acceder a la lista de artistas correctamente", () => {
    expect(Biblio.listaArtistas).to.be.eql([PinkFloyd]);
  });
  it("Se puede cambiar la lista de artistas correctamente", () => {
    const Biblio2 = new Biblioteca([]);
    Biblio2.listaArtistas = [PinkFloyd];
    expect(Biblio2.listaArtistas).to.be.eql([PinkFloyd]);
  });
  it("Se pueden añadir artistas a la lista", () => {
    Biblio.addArtist(EricClapton);
    expect(Biblio).to.be.eql(new Biblioteca([PinkFloyd, EricClapton]));
  });
  it("Se pueden buscar artistas a la lista", () => {
    expect(Biblio.searchArtist("Eric")).to.be.eql([EricClapton]);
  });
  it("Se pueden imprimir la lista de artistas", () => {
    expect(Biblio.print()).to.be.eql("Pink Floyd, Eric Clapton");
  });
});
