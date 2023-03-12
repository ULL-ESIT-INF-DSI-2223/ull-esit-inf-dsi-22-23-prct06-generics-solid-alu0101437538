import "mocha";
import { expect } from "chai";
import { Documental } from "../../src/ejercicio-1/Documental";

describe("Test de NumericPrintableCollection", () => {
  const doc = new Documental("", 2000, 5, 40);
  it("Se instancia la clase correctamente", () => {
    expect(doc).to.be.instanceOf(Documental);
  });
  it("Getter/Setter del nombre", () => {
    doc.name = "The Dark Side of Pink Floyd";
    expect(doc.name).to.be.eql("The Dark Side of Pink Floyd");
  });
  it("Getter/Setter del año", () => {
    doc.year = 2018;
    expect(doc.year).to.be.eql(2018);
  });
  it("Getter/Setter del número de episodios", () => {
    doc.partNumber = 3;
    expect(doc.partNumber).to.be.eql(3);
  });
  it("Getter/Setter de la duración de los episodios", () => {
    doc.partLength = 70;
    expect(doc.partLength).to.be.eql(70);
  });
});
