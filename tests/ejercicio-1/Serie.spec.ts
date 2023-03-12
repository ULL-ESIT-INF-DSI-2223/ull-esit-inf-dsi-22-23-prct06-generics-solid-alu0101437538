import "mocha";
import { expect } from "chai";
import { Serie } from "../../src/ejercicio-1/Serie";

describe("Test de NumericPrintableCollection", () => {
  const serie = new Serie("", 2000, ["Romance"], 5, 40);
  it("Se instancia la clase correctamente", () => {
    expect(serie).to.be.instanceOf(Serie);
  });
  it("Getter/Setter del nombre", () => {
    serie.name = "My Hero Academy";
    expect(serie.name).to.be.eql("My Hero Academy");
  });
  it("Getter/Setter del año", () => {
    serie.year = 2016;
    expect(serie.year).to.be.eql(2016);
  });
  it("Getter/Setter de los generos", () => {
    serie.genres = ["Shonen", "Battle", "Superheros"];
    expect(serie.genres).to.be.eql(["Shonen", "Battle", "Superheros"]);
  });
  it("Getter/Setter del número de episodios", () => {
    serie.episodeNumber = 13;
    expect(serie.episodeNumber).to.be.eql(13);
  });
  it("Getter/Setter de la duración de los episodios", () => {
    serie.episodeLength = 23;
    expect(serie.episodeLength).to.be.eql(23);
  });
});
