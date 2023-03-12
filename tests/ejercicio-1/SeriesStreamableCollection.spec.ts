import "mocha";
import { expect } from "chai";
import { SeriesStreamableCollection } from "../../src/ejercicio-1/SeriesStreamableCollection";
import { Serie } from "../../src/ejercicio-1/Serie";

describe("Test de SeriesStreamableCollection", () => {
  const bnha = new Serie(
    "My Hero Academia",
    2016,
    ["Shonen", "Battle", "Superheroes"],
    13,
    23
  );
  const serieCollection = new SeriesStreamableCollection([bnha]);
  it("Se instancia la clase correctamente", () => {
    expect(serieCollection).to.be.instanceOf(SeriesStreamableCollection);
  });
  it("Se pueden obtener el numero de elementos de la colección", () => {
    expect(serieCollection.getNumberOfItems()).to.be.eql(1);
  });
  it("Se pueden obtener items de la colección por el indice", () => {
    expect(serieCollection.getItemByIndex(0)).to.be.eql(bnha);
    expect(serieCollection.getItemByIndex(-1)).to.be.eql(undefined);
  });
  it("Se pueden eliminar items de la colección", () => {
    expect(serieCollection.removeItem(0)).to.be.eql(bnha);
    expect(serieCollection.removeItem(5)).to.be.eql(undefined);
  });
  it("Se pueden añadir items a la colección", () => {
    serieCollection.addItem(bnha);
    expect(serieCollection).to.be.eql(new SeriesStreamableCollection([bnha]));
  });
  it("Se pueden obtener items de la colección por el nombre", () => {
    expect(serieCollection.getItemByName("Hero")).to.be.eql([bnha]);
    expect(serieCollection.getItemByName("Dragon")).to.be.eql([]);
  });
  it("Se pueden obtener items de la colección por el año", () => {
    expect(serieCollection.getItemByYear(2016)).to.be.eql([bnha]);
    expect(serieCollection.getItemByYear(3000)).to.be.eql([]);
  });
  it("Se pueden imprimir la colección", () => {
    expect(serieCollection.print()).to.be.eql(
      "My Hero Academia (Shonen,Battle,Superheroes): 2016, 13 episodios de 23m\n"
    );
  });
});
