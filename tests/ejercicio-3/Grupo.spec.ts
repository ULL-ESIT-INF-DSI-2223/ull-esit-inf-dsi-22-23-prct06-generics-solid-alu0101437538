import "mocha";
import { expect } from "chai";
import { Discografia } from "../../src/ejercicio-3/Discografia";
import { Cancion } from "../../src/ejercicio-3/Cancion";
import { Disco } from "../../src/ejercicio-3/Disco";
import { Grupo } from "../../src/ejercicio-3/Grupo";

describe("Test de Grupo", () => {
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

  it("El Grupo se crea correctamente", () => {
    expect(PinkFloyd).to.be.instanceOf(Grupo);
  });
  it("Se puede acceder al nombre correctamente", () => {
    expect(PinkFloyd.nombre).to.be.eql("Pink Floyd");
  });
  it("Se puede acceder a los oyentess correctamente", () => {
    expect(PinkFloyd.oyentes).to.be.eql(999999999);
  });
  it("Se puede acceder a la discografia correctamente", () => {
    expect(PinkFloyd.discografia).to.be.eql(discografia);
  });
  it("No se puede tener oyentes negativos", () => {
    expect(() => new Grupo("Pink Floyd", -999999999, discografia)).to.throw();
  });
  it("Se puede imprimir la información", () => {
    expect(PinkFloyd.print()).to.be.eql(
      "Pink Floyd (999999999 oyentes mensuales):\nWish you Where Here\nThe Wall"
    );
  });
});
