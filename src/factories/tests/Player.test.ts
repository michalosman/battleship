import Gameboard from '../Gameboard'
import Player from '../Player'
import Ship from '../Ship'

describe('Player', () => {
  let player: Player
  let gameboard: Gameboard
  let ship: Ship

  beforeEach(() => {
    player = new Player('p1')
    gameboard = new Gameboard()
    ship = new Ship(3)
  })

  test('creates and initializes an object', () => {
    expect(player).toEqual({ name: 'p1', alreadyHitCoords: [] })
  })

  test('hits', () => {
    gameboard.placeShip(ship, 1, 1, true)
    player.attack(1, 1, gameboard)
    player.attack(1, 2, gameboard)
    player.attack(1, 3, gameboard)
    expect(gameboard.isGameOver()).toBe(true)
  })

  test('randomly hits', () => {
    gameboard.placeShip(ship, 1, 1, true)
    for (let i = 0; i < 100; i++) {
      player.randomAttack(gameboard)
    }
    expect(gameboard.isGameOver()).toBe(true)
  })
})
