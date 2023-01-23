import { Player } from "./game_objects.js"
import Map from "./map.js"

export default class Game {
  constructor() {
    this.tileSize = 32
    this.canvas = document.querySelector("#canvas")
    this.canvas.width = 10 * this.tileSize
    this.canvas.height = 15 * this.tileSize
    this.ctx = this.canvas.getContext("2d")
    this.ctx.imageSmoothingEnabled = false

    this.map = new Map("maps/map.txt")
    this.player = new Player(4, 5)
  }

  gameLoop() {
    this.player.update()

    this.ctx.clearRect(0, 0, canvas.width, canvas.height)

    this.map.drawMap(this.ctx)
    this.player.draw(this.ctx)
  }
}