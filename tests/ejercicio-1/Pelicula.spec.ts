import "mocha";
import { expect } from "chai";
import { Pelicula } from "../../src/ejercicio-1/Pelicula";

describe("Test de NumericPrintableCollection", () => {
  const pelicula = new Pelicula("", 2000, ["Shonen"], 5);
  it("Se instancia la clase correctamente", () => {
    expect(pelicula).to.be.instanceOf(Pelicula);
  });
  it("Getter/Setter del nombre", () => {
    pelicula.name = "Your Name";
    expect(pelicula.name).to.be.eql("Your Name");
  });
  it("Getter/Setter del año", () => {
    pelicula.year = 2018;
    expect(pelicula.year).to.be.eql(2018);
  });
  it("Getter/Setter de los generos", () => {
    pelicula.genres = ["Fantasy", "Romance"];
    expect(pelicula.genres).to.be.eql(["Fantasy", "Romance"]);
  });
  it("Getter/Setter de la duración de la pelicula", () => {
    pelicula.length = 120;
    expect(pelicula.length).to.be.eql(120);
  });
});
