import "mocha";
import { expect } from "chai";
import { Discografia } from "../../src/ejercicio-3/Discografia";
import { Cancion } from "../../src/ejercicio-3/Cancion";
import { Disco } from "../../src/ejercicio-3/Disco";
import { Solista } from "../../src/ejercicio-3/Solista";

describe("Test de Solista", () => {
  const discografia = new Discografia([
    new Disco("Unppluged", 1992, [
      new Cancion("Layla - Acoustic Live", 289, "Acústico", false, 260000000),
    ]),
  ]);
  const EricClapton = new Solista("Eric Clapton", 999999999, discografia);

  it("El Solista se crea correctamente", () => {
    expect(EricClapton).to.be.instanceOf(Solista);
  });
  it("Se puede acceder al nombre correctamente", () => {
    expect(EricClapton.nombre).to.be.eql("Eric Clapton");
  });
  it("Se puede cambiar el nombre correctamente", () => {
    const artist = new Solista("Eric", 999999999, discografia);
    artist.nombre = "Eric Clapton";
    expect(artist).to.be.eql(EricClapton);
  });
  it("Se puede acceder a los oyentess correctamente", () => {
    expect(EricClapton.oyentes).to.be.eql(999999999);
  });
  it("Se puede cambiar los oyentes correctamente", () => {
    const artist = new Solista("Eric Clapton", 77, discografia);
    artist.oyentes = 999999999;
    expect(artist).to.be.eql(EricClapton);
  });
  it("Se puede acceder a la discografia correctamente", () => {
    expect(EricClapton.discografia).to.be.eql(discografia);
  });
  it("Se puede cambiar la discografía correctamente", () => {
    const artist = new Solista("Eric Clapton", 999999999, new Discografia([]));
    artist.discografia = discografia;
    expect(artist).to.be.eql(EricClapton);
  });
  it("No se puede tener oyentes negativos", () => {
    expect(
      () => new Solista("Eric Clapton", -999999999, discografia)
    ).to.throw();
  });
});
