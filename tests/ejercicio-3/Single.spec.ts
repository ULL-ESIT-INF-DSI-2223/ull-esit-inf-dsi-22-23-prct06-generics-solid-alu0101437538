import "mocha";
import { expect } from "chai";
import { Cancion } from "../../src/ejercicio-3/Cancion";
import { Single } from "../../src/ejercicio-3/Single";

describe("Test de Single", () => {
  const WishYouWhereHere = new Single("Wish you Where Here", 1975, [
    new Cancion("Wish you Where Here", 427, "Rock Progresivo", true, 164593603),
  ]);
  it("El Single se crea correctamente", () => {
    expect(WishYouWhereHere).to.be.instanceOf(Single);
  });
  it("Se puede acceder al atributo del nombre del Single", () => {
    expect(WishYouWhereHere.nombre).to.be.eql("Wish you Where Here");
  });
  it("Se puede cambiar el atributo del nombre del Single", () => {
    WishYouWhereHere.nombre = "Manchester";
    expect(WishYouWhereHere.nombre).to.be.eql("Manchester");
    WishYouWhereHere.nombre = "Wish you Where Here";
  });
  it("Se puede acceder al atributo del año", () => {
    expect(WishYouWhereHere.año).to.be.eql(1975);
  });
  it("Se puede cambiar el atributo del año del Single", () => {
    WishYouWhereHere.año = 2006;
    expect(WishYouWhereHere.año).to.be.eql(2006);
    WishYouWhereHere.año = 1975;
  });
  it("Se puede acceder al atributo de la lista de canciones", () => {
    expect(WishYouWhereHere.canciones).to.be.eql([
      new Cancion(
        "Wish you Where Here",
        427,
        "Rock Progresivo",
        true,
        164593603
      ),
    ]);
  });
  it("Se puede cambiar el atributo de la lista de canciones del Single", () => {
    WishYouWhereHere.canciones = [];
    expect(WishYouWhereHere.canciones).to.be.eql([]);
    WishYouWhereHere.canciones = [
      new Cancion(
        "Wish you Where Here",
        427,
        "Rock Progresivo",
        true,
        164593603
      ),
    ];
  });
  it("Detección de errores", () => {
    expect(
      () =>
        new Single("Have a Cigar", 1975, [
          new Cancion(
            "Wish you Were Here",
            427,
            "Rock Progresivo",
            true,
            164593603
          ),
        ])
    ).to.throw();
    expect(
      () =>
        new Single("Have a Cigar", 1975, [
          new Cancion("Have a Cigar", 427, "Rock Progresivo", false, 164593603),
        ])
    ).to.throw();
  });
});
