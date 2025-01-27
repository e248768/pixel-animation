import Game from "./game.js"
import { Background,Sand,Water, Air, Player, Shells, crown, waterlily, seastar, Player2 } from "./game_objects.js"


/**
 * Diese Klasse liest eine Kartendatei und erstellt die Spiel-Objekte
 * an den Stellen die in der Karte angegeben sind.
 */
export default class Map {
  constructor(mapFile) {
    this._readMapFile(mapFile)
  }

  /**
   * Erstelle neue Spiel-Objekte an den jeweiligen Stellen.
   * @param {number} x Die x-Koordinate, an der die Spiel-Objekte erstellt werden.
   * @param {number} y Die y-Koordinate, an der die Spiel-Objekte erstellt werden.
   * @param {string} tileType Der Buchstabe an der Stelle in der Karte.
   */
  addTilesToMap(x, y, tileType) {
  
    
    if ( tileType === "b" ) {  new Water(x, y) }
    if ( tileType === "s" ) {  new Sand(x, y) }
    if ( tileType === "w" ) {  new Water(x, y) } 
    if ( tileType === "a" ) {  new Air(x, y) }
    if ( tileType === "m" ) {  new Shells(x, y) }
    if ( tileType === "c" ) {  new crown(x, y) }
    if ( tileType === "f" ) {  new waterlily(x, y) }
    if ( tileType === "e" ) {  new seastar(x, y) }
    if ( tileType === "A" ) { Game.player = new Player(x, y)}
    if ( tileType === "F" ) { Game.player2 = new Player2(x, y)}
  }

  /**
   * Liest die Karte aus der Datei und ruft die Erstellung der Spiel-Objekte auf.
   */
  _readMapFile(filename) {
    fetch(filename)
      .then((res) => res.text())
      .then((data) => {
        let rows = data.split("\n")
        for (let y = 0; y < rows.length; y++) {
          let row = rows[y].split("")
          for (let x = 0; x < row.length; x++) {
            this.addTilesToMap(x, y, row[x])
          }
        }
      })
  }
}

