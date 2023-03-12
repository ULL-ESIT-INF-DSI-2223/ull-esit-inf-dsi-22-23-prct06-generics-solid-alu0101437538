import "mocha";
import { expect } from "chai";
import { MoviesStreamableCollection } from "../../src/ejercicio-1/MoviesStreamableCollection";
import { Pelicula } from "../../src/ejercicio-1/Pelicula";

describe("Test de MoviesStreamableCollection", () => {
  const yourName = new Pelicula(
    "Your Name",
    2018,
    ["Fantasia", "Romance"],
    120
  );
  const movieCollection = new MoviesStreamableCollection([yourName]);
  it("Se instancia la clase correctamente", () => {
    expect(movieCollection).to.be.instanceOf(MoviesStreamableCollection);
  });
  it("Se pueden obtener items de la colección por el indice", () => {
    expect(movieCollection.getItemByIndex(0)).to.be.eql(yourName);
    expect(movieCollection.getItemByIndex(-1)).to.be.eql(undefined);
  });
  it("Se pueden eliminar items de la colección", () => {
    expect(movieCollection.removeItem(0)).to.be.eql(yourName);
    expect(movieCollection.removeItem(5)).to.be.eql(undefined);
  });
  it("Se pueden añadir items a la colección", () => {
    movieCollection.addItem(yourName);
    expect(movieCollection).to.be.eql(
      new MoviesStreamableCollection([yourName])
    );
  });
  it("Se pueden obtener items de la colección por el nombre", () => {
    expect(movieCollection.getItemByName("Name")).to.be.eql([yourName]);
    expect(movieCollection.getItemByName("Hero")).to.be.eql([]);
  });
  it("Se pueden obtener items de la colección por el año", () => {
    expect(movieCollection.getItemByYear(2018)).to.be.eql([yourName]);
    expect(movieCollection.getItemByYear(3432)).to.be.eql([]);
  });
  it("Se pueden imprimir la colección", () => {
    expect(movieCollection.print()).to.be.eql(
      "Your Name (Fantasia,Romance): 2018, 120m\n"
    );
  });
});
