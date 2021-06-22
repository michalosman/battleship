import Ship from './Ship'

const SIZE = 10

class Gameboard {
  board: boolean[][]

  constructor() {
    this.board = []
    this.initialize()
  }

  initialize() {
    for (let i = 0; i < SIZE; i++) {
      this.board[i] = []
      for (let j = 0; j < SIZE; j++) {
        this.board[i][j] = false
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
        this.board[positionX][positionY + i] = true
      }
    } else {
      for (let i = 0; i < ship.length; i++) {
        this.board[positionX + i][positionY] = true
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

  receiveAttack() {}
}

export default Gameboard
