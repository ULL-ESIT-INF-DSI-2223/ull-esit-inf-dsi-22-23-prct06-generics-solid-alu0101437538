import "mocha";
import { expect } from "chai";
import { Discografia } from "../../src/ejercicio-3/Discografia";
import { Cancion } from "../../src/ejercicio-3/Cancion";
import { Disco } from "../../src/ejercicio-3/Disco";

describe("Test de Discografía", () => {
  const WishYouWhereHere = new Disco("Wish you Where Here", 1975, [
    new Cancion(
      "Shine On You Crazy Diamond, pt 1-5",
      810,
      "Rock Progresivo",
      false,
      176637905
    ),
  ]);
  const TheWall = new Disco("The Wall", 1979, [
    new Cancion("Mother", 184, "Rock Progresivo", false, 24543245),
  ]);
  const discografia = new Discografia([WishYouWhereHere]);

  it("La lista de discos se crea correctamente", () => {
    expect(discografia).to.be.instanceOf(Discografia);
  });
  it("Se puede acceder a la lista de discos correctamente", () => {
    expect(discografia.discografia).to.be.eql([WishYouWhereHere]);
  });
  it("Se puede modificar la lista de discos correctamente", () => {
    discografia.discografia = [];
    expect(discografia.discografia).to.be.eql([]);
    discografia.discografia = [WishYouWhereHere];
  });
  it("Se pueden añadir discos a la lista", () => {
    discografia.addItem(TheWall);
    expect(discografia).to.be.eql(new Discografia([WishYouWhereHere, TheWall]));
  });
  it("Se pueden buscar discos a la lista", () => {
    expect(discografia.searchItem("The Wall")).to.be.eql([TheWall]);
  });
});
