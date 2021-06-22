import Ship from '../Ship'

describe('Ship', () => {
  let ship: Ship

  beforeEach(() => {
    ship = new Ship(3)
  })

  test('creates and initializes a ship', () => {
    expect(ship).toEqual({ length: 3, hits: [] })
  })

  test('takes a hit', () => {
    ship.hit(2)
    expect(ship.hits).toContain(2)
  })

  test('sinks', () => {
    ship.hit(0)
    ship.hit(1)
    ship.hit(2)
    expect(ship.isSunk()).toBe(true)
  })

  test('prevents being hit multiple times at the same spot', () => {
    ship.hit(1)
    ship.hit(1)
    ship.hit(1)
    expect(ship.hits.length).toBe(1)
  })
})
