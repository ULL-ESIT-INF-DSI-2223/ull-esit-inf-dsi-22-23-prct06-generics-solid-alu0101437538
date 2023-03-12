import "mocha";
import { expect } from "chai";
import { Cancion } from "../../src/ejercicio-3/Cancion";

describe("Test de Canción", () => {
  const ShineOn = new Cancion(
    "Shine On You Crazy Diamond, pt 1-5",
    810,
    "Rock Progresivo",
    false,
    176637905
  );
  it("Las canciones se crean correctamente", () => {
    expect(ShineOn).to.be.instanceOf(Cancion);
    expect(
      new Cancion("Have a Cigar", 307, "Rock Progresivo", true, 113342792)
    ).not.to.be.eql(undefined);
  });
  it("Cada canción tiene el nombre correspondiente", () => {
    expect(ShineOn.nombre).to.be.eql("Shine On You Crazy Diamond, pt 1-5");
  });
  it("Se puede cambiar el nombre de la canción", () => {
    const cancion = new Cancion("A", 1, "Rock", true, 1);
    cancion.nombre = "B";
    expect(cancion.nombre).to.be.eql("B");
  });
  it("Cada canción tiene la duración correspondiente", () => {
    expect(ShineOn.duracion).to.be.eql(810);
  });
  it("Se puede cambiar la duración de la canción", () => {
    const cancion = new Cancion("A", 1, "Rock", true, 1);
    cancion.duracion = 45;
    expect(cancion.duracion).to.be.eql(45);
  });
  it("Cada canción tiene el genero correspondiente", () => {
    expect(ShineOn.genero).to.be.eql("Rock Progresivo");
  });
  it("Se puede cambiar el género de la canción", () => {
    const cancion = new Cancion("A", 1, "Pop", true, 1);
    cancion.genero = "Blues";
    expect(cancion.genero).to.be.eql("Blues");
  });
  it("Cada canción indica correctamente si es single o no", () => {
    expect(ShineOn.single).to.be.eql(false);
  });
  it("Se puede cambiar el indicador de single de la canción", () => {
    const cancion = new Cancion("A", 1, "Rock ", true, 1);
    cancion.single = false;
    expect(cancion.single).to.be.eql(false);
  });
  it("Cada canción tiene el número de reproducciones correcto", () => {
    expect(ShineOn.reproducciones).to.be.eql(176637905);
  });
  it("Se puede cambiar el nº de reproducciones de la canción", () => {
    const cancion = new Cancion("A", 1, "Rock ", true, 1);
    cancion.reproducciones = 50;
    expect(cancion.reproducciones).to.be.eql(50);
  });
  it("Detección de errores", () => {
    expect(() => new Cancion("Cancion", -2, "Genero", true, 2)).to.throw();
    expect(() => new Cancion("Cancion", 1, "Genero", true, -7)).to.throw();
    expect(() => new Cancion("Cancion", 1, "Genero", true, 6645.45)).to.throw();
  });
});
