import Gameboard from '../Gameboard'
import Ship from '../Ship'

describe('Gameboard', () => {
  let gameboard: Gameboard
  let testArray: boolean[][]

  beforeAll(() => {
    gameboard = new Gameboard()
    testArray = []

    for (let i = 0; i < 10; i++) {
      testArray[i] = []
      for (let j = 0; j < 10; j++) {
        testArray[i][j] = false
      }
    }
  })

  test('creates and initializes a gameboard', () => {
    expect(gameboard).toEqual({ board: testArray })
  })

  test('places a ship', () => {
    const ship = new Ship(3)
    gameboard.placeShip(ship, 1, 1, true)

    testArray[1][1] = true
    testArray[1][2] = true
    testArray[1][3] = true

    expect(gameboard).toEqual({ board: testArray })
  })

  test('prevents ship placement outside gameboard', () => {
    const ship = new Ship(3)
    gameboard.placeShip(ship, 1, 1, true)
    expect(gameboard.isPlacementPossible(ship, 8, 8, true)).toBe(false)
    expect(gameboard.isPlacementPossible(ship, 10, 10, true)).toBe(false)
  })

  test('prevents ship placement on taken fields', () => {
    const ship = new Ship(3)
    gameboard.placeShip(ship, 1, 1, true)
    expect(gameboard.isPlacementPossible(ship, 1, 1, true)).toBe(false)
    expect(gameboard.isPlacementPossible(ship, 1, 2, true)).toBe(false)
    expect(gameboard.isPlacementPossible(ship, 1, 3, true)).toBe(false)
  })

  test('prevents ship placement in direct neighbourhood of taken fields', () => {
    const ship = new Ship(3)
    gameboard.placeShip(ship, 1, 1, true)
    expect(gameboard.isPlacementPossible(ship, 0, 0, true)).toBe(false)
    // expect(gameboard.isPlacementPossible(ship, 2, 4, true)).toBe(false)
  })
})
