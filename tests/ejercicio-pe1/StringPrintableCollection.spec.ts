import "mocha";
import { expect } from "chai";
import { StringPrintableCollection } from "../../src/ejercicio-pe1/StringPrintableCollection";

describe("Test de StringPrintableCollection", () => {
  const stringCollection = new StringPrintableCollection(["hola", "adios"]);
  it("Se instancia la clase correctamente", () => {
    expect(stringCollection).to.be.instanceOf(StringPrintableCollection);
  });
  it("Se pueden obtener items de la colección", () => {
    expect(stringCollection.getItem(1)).to.be.eql("adios");
    expect(stringCollection.getItem(-1)).to.be.eql(undefined);
  });
  it("Se pueden añadir items a la colección", () => {
    stringCollection.addItem("hola2");
    expect(stringCollection).to.be.eql(
      new StringPrintableCollection(["hola", "adios", "hola2"])
    );
  });
  it("Se pueden eliminar items de la colección", () => {
    expect(stringCollection.removeItem(2)).to.be.eql("hola2");
    expect(stringCollection.removeItem(5)).to.be.eql(undefined);
  });
  it("Se puede saber el número de items de la colección", () => {
    expect(stringCollection.getNumberOfItems()).to.be.eql(2);
  });
  it("Se puede obtener un string imprimible de la colección", () => {
    expect(stringCollection.print()).to.be.eql("hola,adios");
  });
});
