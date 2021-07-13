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

  placeShip(ship: Ship, row: number, column: number, isVertical: boolean) {
    if (!this.isPlacementPossible(ship, row, column, isVertical)) return false

    if (isVertical) {
      for (let i = 0; i < ship.length; i++) {
        this.board[row + i][column] = ship
      }
    } else {
      for (let i = 0; i < ship.length; i++) {
        this.board[row][column + i] = ship
      }
    }
    return true
  }

  placeShipsRandomly() {
    if (!this.isEmpty()) return

    const ships = []
    const carrier = new Ship(5)
    const battleship = new Ship(4)
    const destroyer = new Ship(3)
    const submarine = new Ship(3)
    const patrolBoat = new Ship(2)
    ships.push(carrier, battleship, destroyer, submarine, patrolBoat)

    let succesfulPlacements = 0

    while (succesfulPlacements < 5) {
      const row = Math.floor(Math.random() * 10)
      const column = Math.floor(Math.random() * 10)
      const isVertical = Math.floor(Math.random() * 2) === 1 ? true : false

      if (this.placeShip(ships[succesfulPlacements], row, column, isVertical))
        succesfulPlacements++
    }
  }

  isPlacementPossible(
    ship: Ship,
    row: number,
    column: number,
    isVertical: boolean
  ) {
    // case position is out of gameboard
    if (row < 0 || row > SIZE - 1 || column < 0 || column > SIZE - 1)
      return false

    // case ship doesn't fit in gameboard
    if (isVertical) {
      if (row + ship.length > SIZE) return false
    } else {
      if (column + ship.length > SIZE) return false
    }

    // case any of the fields is already taken
    if (isVertical) {
      for (let i = 0; i < ship.length; i++) {
        if (this.board[row + i][column]) return false
      }
    } else {
      for (let i = 0; i < ship.length; i++) {
        if (this.board[row][column + i]) return false
      }
    }

    // case any of the neighbour fields are already taken
    if (isVertical) {
      for (let i = 0; i < ship.length; i++) {
        for (let x = -1; x <= 1; x++) {
          for (let y = -1; y <= 1; y++) {
            if (
              row + x + i < 0 ||
              row + x + i >= SIZE ||
              column + y < 0 ||
              column + y >= SIZE
            )
              continue
            if (this.board[row + x + i][column + y]) return false
          }
        }
      }
    } else {
      for (let i = 0; i < ship.length; i++) {
        for (let x = -1; x <= 1; x++) {
          for (let y = -1; y <= 1; y++) {
            if (
              row + x < 0 ||
              row + x >= SIZE ||
              column + y + i < 0 ||
              column + y + i >= SIZE
            )
              continue
            if (this.board[row + x][column + y + i]) return false
          }
        }
      }
    }
    return true
  }

  receiveAttack(row: number, column: number) {
    if (row < 0 || row >= SIZE || column < 0 || column >= SIZE) {
      return false
    }

    if (this.board[row][column]) {
      let hitIndex = 0
      // is vertical
      if (column > 0 && this.board[row][column - 1]) {
        let i = 1
        while (column - i >= 0 && this.board[row][column - i]) {
          hitIndex++
          i++
        }
      }
      // is horizontal
      else if (row > 0 && this.board[row - 1][column]) {
        let i = 1
        while (row - i >= 0 && this.board[row - i][column]) {
          hitIndex++
          i++
        }
      }
      this.board[row][column].hit(hitIndex)
      return true
    } else {
      this.missedShots[row][column] = true
      return false
    }
  }

  isGameOver() {
    let isBoardEmpty = true
    for (let i = 0; i < SIZE; i++) {
      for (let j = 0; j < SIZE; j++) {
        if (this.board[i][j]) {
          isBoardEmpty = false
          if (!this.board[i][j].isSunk()) {
            return false
          }
        }
      }
    }
    return isBoardEmpty ? false : true
  }

  isEmpty() {
    for (let i = 0; i < SIZE; i++) {
      for (let j = 0; j < SIZE; j++) {
        if (this.board[i][j] !== null) return false
      }
    }
    return true
  }

  getEmptyFieldsAmount() {
    let result = 0
    for (let i = 0; i < SIZE; i++) {
      for (let j = 0; j < SIZE; j++) {
        if (this.board[i][j] === null) result++
      }
    }
    return result
  }
}

export default Gameboard
