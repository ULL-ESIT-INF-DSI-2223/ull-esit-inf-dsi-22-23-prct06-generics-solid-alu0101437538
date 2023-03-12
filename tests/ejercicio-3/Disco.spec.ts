import "mocha";
import { expect } from "chai";
import { Cancion } from "../../src/ejercicio-3/Cancion";
import { Disco } from "../../src/ejercicio-3/Disco";

describe("Test de Disco", () => {
  const WishYouWhereHere = new Disco("Wish you Where Here", 1975, [
    new Cancion(
      "Shine On You Crazy Diamond, pt 1-5",
      810,
      "Rock Progresivo",
      false,
      176637905
    ),
    new Cancion("Wish you Were Here", 427, "Rock Progresivo", false, 164593603),
    new Cancion("Have a Cigar", 307, "Rock Progresivo", true, 113342792),
  ]);

  it("El disco se crea correctamente", () => {
    expect(WishYouWhereHere).to.be.instanceOf(Disco);
  });
  it("Se puede acceder al atributo del nombre del disco", () => {
    expect(WishYouWhereHere.nombre).to.be.eql("Wish you Where Here");
  });
  it("Se puede editar atributo del nombre del disco", () => {
    WishYouWhereHere.nombre = "Minecraft";
    expect(WishYouWhereHere.nombre).to.be.eql("Minecraft");
    WishYouWhereHere.nombre = "Wish you Where Here";
  });
  it("Se puede acceder al atributo del año", () => {
    expect(WishYouWhereHere.año).to.be.eql(1975);
  });
  it("Se puede editar atributo del año del disco", () => {
    WishYouWhereHere.año = 2019;
    expect(WishYouWhereHere.año).to.be.eql(2019);
    WishYouWhereHere.año = 1975;
  });
  it("Se puede acceder al atributo de la lista de canciones", () => {
    expect(WishYouWhereHere.canciones).to.be.eql([
      new Cancion(
        "Shine On You Crazy Diamond, pt 1-5",
        810,
        "Rock Progresivo",
        false,
        176637905
      ),
      new Cancion(
        "Wish you Were Here",
        427,
        "Rock Progresivo",
        false,
        164593603
      ),
      new Cancion("Have a Cigar", 307, "Rock Progresivo", true, 113342792),
    ]);
  });
  it("Se puede editar atributo del nombre del disco", () => {
    WishYouWhereHere.canciones = [];
    expect(WishYouWhereHere.canciones).to.be.eql([]);
    WishYouWhereHere.canciones = [
      new Cancion(
        "Shine On You Crazy Diamond, pt 1-5",
        810,
        "Rock Progresivo",
        false,
        176637905
      ),
      new Cancion(
        "Wish you Were Here",
        427,
        "Rock Progresivo",
        false,
        164593603
      ),
      new Cancion("Have a Cigar", 307, "Rock Progresivo", true, 113342792),
    ];
  });
  it("Se puede buscar una canción en el disco", () => {
    expect(WishYouWhereHere.searchSong("Shine on")).to.be.eql([
      new Cancion(
        "Shine On You Crazy Diamond, pt 1-5",
        810,
        "Rock Progresivo",
        false,
        176637905
      ),
    ]);
  });
  it("Se pueden añadir canciones", () => {
    const disco1 = new Disco("Wish you Where Here", 1975, [
      new Cancion(
        "Shine On You Crazy Diamond, pt 1-5",
        810,
        "Rock Progresivo",
        false,
        176637905
      ),
      new Cancion(
        "Wish you Were Here",
        427,
        "Rock Progresivo",
        false,
        164593603
      ),
      new Cancion("Have a Cigar", 307, "Rock Progresivo", true, 113342792),
    ]);
    disco1.addSong(
      new Cancion(
        "Shine On You Crazy Diamond, pt 6-9",
        743,
        "Rock Progresivo",
        false,
        46839762
      )
    );
    expect(disco1).to.be.eql(
      new Disco("Wish you Where Here", 1975, [
        new Cancion(
          "Shine On You Crazy Diamond, pt 1-5",
          810,
          "Rock Progresivo",
          false,
          176637905
        ),
        new Cancion(
          "Wish you Were Here",
          427,
          "Rock Progresivo",
          false,
          164593603
        ),
        new Cancion("Have a Cigar", 307, "Rock Progresivo", true, 113342792),
        new Cancion(
          "Shine On You Crazy Diamond, pt 6-9",
          743,
          "Rock Progresivo",
          false,
          46839762
        ),
      ])
    );
  });
  it("Se pueden obtener el numero de canciones", () => {
    expect(WishYouWhereHere.numberOfSongs()).to.be.eql(3);
  });
  it("Se pueden obtener la duración total de la lista", () => {
    expect(WishYouWhereHere.totalDuration()).to.be.eql(1544);
  });
  it("Se pueden obtener el número total de reproducciones", () => {
    expect(WishYouWhereHere.totalReproductions()).to.be.eql(454574300);
  });
});
