import Gameboard from '../Gameboard'
import Ship from '../Ship'

describe('Gameboard', () => {
  let gameboard: Gameboard
  let ship: Ship
  let testObjectArray: object[][]
  let testBooleanArray: boolean[][]

  beforeAll(() => {
    gameboard = new Gameboard()
    ship = new Ship(3)
    testObjectArray = []
    testBooleanArray = []

    for (let i = 0; i < 10; i++) {
      testObjectArray[i] = []
      testBooleanArray[i] = []
      for (let j = 0; j < 10; j++) {
        testObjectArray[i][j] = null
        testBooleanArray[i][j] = false
      }
    }
  })

  test('creates and initializes a gameboard', () => {
    expect(gameboard).toEqual({
      board: testObjectArray,
      missedShots: testBooleanArray,
    })
  })

  test('places a ship', () => {
    gameboard.placeShip(ship, 1, 1, true)
    testObjectArray[1][1] = ship
    testObjectArray[1][2] = ship
    testObjectArray[1][3] = ship
    expect(gameboard).toEqual({
      board: testObjectArray,
      missedShots: testBooleanArray,
    })
  })

  test('prevents ship placement outside gameboard', () => {
    gameboard.placeShip(ship, 1, 1, true)
    expect(gameboard.isPlacementPossible(ship, 8, 8, true)).toBe(false)
    expect(gameboard.isPlacementPossible(ship, 10, 10, true)).toBe(false)
  })

  test('prevents ship placement on taken fields', () => {
    gameboard.placeShip(ship, 1, 1, true)
    expect(gameboard.isPlacementPossible(ship, 1, 1, true)).toBe(false)
    expect(gameboard.isPlacementPossible(ship, 1, 2, true)).toBe(false)
    expect(gameboard.isPlacementPossible(ship, 1, 3, true)).toBe(false)
  })

  test('prevents ship placement in direct neighbourhood of taken fields', () => {
    gameboard.placeShip(ship, 1, 1, true)
    expect(gameboard.isPlacementPossible(ship, 0, 0, true)).toBe(false)
    expect(gameboard.isPlacementPossible(ship, 2, 4, true)).toBe(false)
    expect(gameboard.isPlacementPossible(ship, 2, 5, true)).toBe(true)
  })
})
