import "mocha";
import { expect } from "chai";
import { Lista } from "../../src/ejercicio-2/Lista";

describe("Test de Lista sobre number", () => {
  it("Se instancia la clase correctamente", () => {
    expect(new Lista<number>([1, 3, 4, 6])).to.be.instanceOf(Lista);
  });
  it("Se pueden obtener la lista como array", () => {
    const list = new Lista<number>([1, 3, 4, 6]);
    expect(list.list).to.be.eql([1, 3, 4, 6]);
  });
  it("Se pueden añadir elementos mediante append()", () => {
    const list = new Lista<number>([1, 3, 4, 6]);
    list.append(new Lista<number>([7, 9]));
    expect(list).to.be.eql(new Lista<number>([1, 3, 4, 6, 7, 9]));
  });
  it("Se pueden concatenar elementos mediante concatenate()", () => {
    const list = new Lista<number>([1, 3, 4, 6]);
    expect(list.concatenate([new Lista<number>([7, 9])])).to.be.eql(
      new Lista<number>([1, 3, 4, 6, 7, 9])
    );
    expect(list).to.be.eql(new Lista<number>([1, 3, 4, 6]));
  });
  it("Se pueden filtrar elementos mediante filter()", () => {
    const list = new Lista<number>([1, 3, 4, 6]);
    expect(list.filter((number) => number % 2 === 0)).to.be.eql(
      new Lista<number>([4, 6])
    );
  });
  it("Se pueden obtener el número de elementos mediante length()", () => {
    const list = new Lista<number>([1, 3, 4, 6]);
    expect(list.length()).to.be.eql(4);
  });
  it("Se pueden mapear mediante map()", () => {
    const list = new Lista<number>([1, 3, 4, 6]);
    expect(list.map((number) => number * 2)).to.be.eql(
      new Lista<number>([2, 6, 8, 12])
    );
    expect(list).to.be.eql(new Lista<number>([1, 3, 4, 6]));
  });
  it("Los elementos de la lista se pueden reducir", () => {
    const list = new Lista<number>([1, 3, 4, 6]);
    expect(
      list.reduce((number, acumulador) => number + acumulador, 0)
    ).to.be.eql(14);
  });
  it("Se puede obtener la lista inversa a travez de reverse()", () => {
    const list = new Lista<number>([1, 3, 4, 6]);
    list.reverse();
    expect(list).to.be.eql(new Lista<number>([6, 4, 3, 1]));
  });
  it("Se pueden aplicar funciones con forEach()", () => {
    const list = new Lista<number>([1, 3, 4, 6]);
    list.forEach((number) => number * 2);
    expect(list).to.be.eql(new Lista<number>([2, 6, 8, 12]));
  });
});

describe("Test de Lista sobre string", () => {
  it("Se instancia la clase correctamente", () => {
    expect(new Lista<string>(["hola", "adios"])).to.be.instanceOf(Lista);
  });
  it("Se pueden obtener la lista como array", () => {
    const list = new Lista<string>(["hola", "adios"]);
    expect(list.list).to.be.eql(["hola", "adios"]);
  });
  it("Se pueden añadir elementos mediante append()", () => {
    const list = new Lista<string>(["hola", "adios"]);
    list.append(new Lista<string>(["hola2"]));
    expect(list).to.be.eql(new Lista<string>(["hola", "adios", "hola2"]));
  });
  it("Se pueden concatenar elementos mediante concatenate()", () => {
    const list = new Lista<string>(["hola", "adios"]);
    expect(list.concatenate([new Lista<string>(["hola2"])])).to.be.eql(
      new Lista<string>(["hola", "adios", "hola2"])
    );
    expect(list).to.be.eql(new Lista<string>(["hola", "adios"]));
  });
  it("Se pueden filtrar elementos mediante filter()", () => {
    const list = new Lista<string>(["hola", "adios"]);
    expect(list.filter((string) => string === "hola")).to.be.eql(
      new Lista<string>(["hola"])
    );
  });
  it("Se pueden obtener el número de elementos mediante length()", () => {
    const list = new Lista<string>(["hola", "adios"]);
    expect(list.length()).to.be.eql(2);
  });
  it("Se pueden mapear mediante map()", () => {
    const list = new Lista<string>(["hola", "adios"]);
    expect(list.map((string) => string + "1")).to.be.eql(
      new Lista<string>(["hola1", "adios1"])
    );
    expect(list).to.be.eql(new Lista<string>(["hola", "adios"]));
  });
  it("Los elementos de la lista se pueden reducir", () => {
    const list = new Lista<string>(["hola", "adios"]);
    expect(
      list.reduce((string, acumulador) => acumulador + string, "")
    ).to.be.eql("holaadios");
  });
  it("Se puede obtener la lista inversa a travez de reverse()", () => {
    const list = new Lista<string>(["hola", "adios"]);
    list.reverse();
    expect(list).to.be.eql(new Lista<string>(["adios", "hola"]));
  });
  it("Se pueden aplicar funciones con forEach()", () => {
    const list = new Lista<string>(["hola", "adios"]);
    list.forEach((string) => string + "12");
    expect(list).to.be.eql(new Lista<string>(["hola12", "adios12"]));
  });
});
