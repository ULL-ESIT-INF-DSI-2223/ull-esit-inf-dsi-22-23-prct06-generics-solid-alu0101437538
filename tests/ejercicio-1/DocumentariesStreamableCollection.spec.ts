import "mocha";
import { expect } from "chai";
import { DocumentariesStreamableCollection } from "../../src/ejercicio-1/DocumentariesStreamableCollection";
import { Documental } from "../../src/ejercicio-1/Documental";

describe("Test de DocumentariesStreamableCollection", () => {
  const lastDance = new Documental("The Last Dance", 2015, 3, 60);
  const docCollection = new DocumentariesStreamableCollection([lastDance]);
  it("Se instancia la clase correctamente", () => {
    expect(docCollection).to.be.instanceOf(DocumentariesStreamableCollection);
  });
  it("Se pueden obtener items de la colección por el indice", () => {
    expect(docCollection.getItemByIndex(0)).to.be.eql(lastDance);
    expect(docCollection.getItemByIndex(-1)).to.be.eql(undefined);
  });
  it("Se pueden eliminar items de la colección", () => {
    expect(docCollection.removeItem(0)).to.be.eql(lastDance);
    expect(docCollection.removeItem(5)).to.be.eql(undefined);
  });
  it("Se pueden añadir items a la colección", () => {
    docCollection.addItem(lastDance);
    expect(docCollection).to.be.eql(
      new DocumentariesStreamableCollection([lastDance])
    );
  });
  it("Se pueden obtener items de la colección por el nombre", () => {
    expect(docCollection.getItemByName("Dance")).to.be.eql([lastDance]);
    expect(docCollection.getItemByName("Cristiano")).to.be.eql([]);
  });
  it("Se pueden obtener items de la colección por el año", () => {
    expect(docCollection.getItemByYear(2015)).to.be.eql([lastDance]);
    expect(docCollection.getItemByYear(2002)).to.be.eql([]);
  });
  it("Se pueden imprimir la colección", () => {
    expect(docCollection.print()).to.be.eql(
      "The Last Dance (2015): 3 partes de 60m\n"
    );
  });
});
