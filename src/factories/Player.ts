import Gameboard from './Gameboard'

class Player {
  name: string
  alreadyHitCoords: number[][]

  constructor(name: string) {
    this.name = name
    this.alreadyHitCoords = []
  }

  attack(positionX: number, positionY: number, gameboard: Gameboard) {
    if (this.hasAlreadyHit(positionX, positionY)) return

    this.alreadyHitCoords.push([positionX, positionY])
    gameboard.receiveAttack(positionX, positionY)
  }

  randomAttack(gameboard: Gameboard) {
    let positionX = Math.floor(Math.random() * 10)
    let positionY = Math.floor(Math.random() * 10)

    while (this.hasAlreadyHit(positionX, positionY)) {
      positionX = Math.floor(Math.random() * 10)
      positionY = Math.floor(Math.random() * 10)
    }

    this.alreadyHitCoords.push([positionX, positionY])
    gameboard.receiveAttack(positionX, positionY)
  }

  hasAlreadyHit(positionX: number, positionY: number) {
    for (let i = 0; i < this.alreadyHitCoords.length; i++) {
      if (
        this.alreadyHitCoords[i][0] === positionX &&
        this.alreadyHitCoords[i][1] === positionY
      ) {
        return true
      }
    }
    return false
  }
}

export default Player
