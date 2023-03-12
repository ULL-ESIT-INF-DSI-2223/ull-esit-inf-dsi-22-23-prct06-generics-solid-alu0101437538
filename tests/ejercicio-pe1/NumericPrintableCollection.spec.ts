import "mocha";
import { expect } from "chai";
import { NumericPrintableCollection } from "../../src/ejercicio-pe1/NumericPrintableCollection";

describe("Test de NumericPrintableCollection", () => {
  const numCollection = new NumericPrintableCollection([1, 3, 4, 6]);
  it("Se instancia la clase correctamente", () => {
    expect(numCollection).to.be.instanceOf(NumericPrintableCollection);
  });
  it("Se pueden obtener items de la colección", () => {
    expect(numCollection.getItem(1)).to.be.eql(3);
    expect(numCollection.getItem(-1)).to.be.eql(undefined);
  });
  it("Se pueden añadir items a la colección", () => {
    numCollection.addItem(8);
    expect(numCollection).to.be.eql(
      new NumericPrintableCollection([1, 3, 4, 6, 8])
    );
  });
  it("Se pueden eliminar items de la colección", () => {
    expect(numCollection.removeItem(3)).to.be.eql(6);
    expect(numCollection.removeItem(5)).to.be.eql(undefined);
  });
  it("Se puede saber el número de items de la colección", () => {
    expect(numCollection.getNumberOfItems()).to.be.eql(4);
  });
  it("Se puede obtener un string imprimible de la colección", () => {
    expect(numCollection.print()).to.be.eql([1, 3, 4, 8].toString());
  });
});
