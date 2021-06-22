import Ship from './Ship'

const SIZE = 10

class Gameboard {
  board: Ship[][]
  missedShots: boolean[][]

  constructor() {
    this.board = []
    this.missedShots = []
    this.initialize()
  }

  initialize() {
    for (let i = 0; i < SIZE; i++) {
      this.board[i] = []
      this.missedShots[i] = []
      for (let j = 0; j < SIZE; j++) {
        this.board[i][j] = null
        this.missedShots[i][j] = false
      }
    }
  }

  placeShip(
    ship: Ship,
    positionX: number,
    positionY: number,
    isVertical: boolean
  ) {
    if (!this.isPlacementPossible(ship, positionX, positionY, isVertical))
      return

    if (isVertical) {
      for (let i = 0; i < ship.length; i++) {
        this.board[positionX][positionY + i] = ship
      }
    } else {
      for (let i = 0; i < ship.length; i++) {
        this.board[positionX + i][positionY] = ship
      }
    }
  }

  isPlacementPossible(
    ship: Ship,
    positionX: number,
    positionY: number,
    isVertical: boolean
  ) {
    // case position is out of gameboard
    if (
      positionX < 0 ||
      positionX > SIZE - 1 ||
      positionY < 0 ||
      positionY > SIZE - 1
    )
      return false

    // case ship doesn't fit in gameboard
    if (isVertical) {
      if (positionY + ship.length > SIZE) return false
    } else {
      if (positionX + ship.length > SIZE) return false
    }

    // case any of the fields is already taken
    if (isVertical) {
      for (let i = 0; i < ship.length; i++) {
        if (this.board[positionX][positionY + i]) return false
      }
    } else {
      for (let i = 0; i < ship.length; i++) {
        if (this.board[positionX + i][positionY]) return false
      }
    }

    // case any of the neighbour fields are already taken
    if (isVertical) {
      for (let i = 0; i < ship.length; i++) {
        for (let x = -1; x <= 1; x++) {
          for (let y = -1; y <= 1; y++) {
            if (
              positionX + x < 0 ||
              positionX + x >= SIZE ||
              positionY + y + i < 0 ||
              positionY + y + i >= SIZE
            )
              continue
            if (this.board[positionX + x][positionY + y + i]) return false
          }
        }
      }
    } else {
      for (let i = 0; i < ship.length; i++) {
        for (let x = -1; x <= 1; x++) {
          for (let y = -1; y <= 1; y++) {
            if (
              positionX + x < 0 ||
              positionX + x >= SIZE ||
              positionY + y + i < 0 ||
              positionY + y + i >= SIZE
            )
              continue
            if (this.board[positionX + x + i][positionY + y]) return false
          }
        }
      }
    }
    return true
  }

  receiveAttack(positionX: number, positionY: number) {
    if (
      positionX < 0 ||
      positionX >= SIZE ||
      positionY < 0 ||
      positionY >= SIZE
    ) {
      return
    }

    if (this.board[positionX][positionY]) {
      let hitIndex = 0
      // is vertical
      if (positionY > 0 && this.board[positionX][positionY - 1]) {
        let i = 1
        while (positionY - i >= 0 && this.board[positionX][positionY - i]) {
          hitIndex++
          i++
        }
      }
      // is horizontal
      else if (positionX > 0 && this.board[positionX - 1][positionY]) {
        let i = 1
        while (positionX - i >= 0 && this.board[positionX - i][positionY]) {
          hitIndex++
          i++
        }
      }
      this.board[positionX][positionY].hit(hitIndex)
    } else {
      this.missedShots[positionX][positionY] = true
    }
  }

  isGameOver() {
    for (let i = 0; i < SIZE; i++) {
      for (let j = 0; j < SIZE; j++) {
        if (this.board[i][j]) {
          if (!this.board[i][j].isSunk()) {
            return false
          }
        }
      }
    }
    return true
  }
}

export default Gameboard
