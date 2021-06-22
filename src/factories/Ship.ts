class Ship {
  length: number
  hits: number[]

  constructor(length: number) {
    this.length = length
    this.hits = []
  }

  hit(position: number) {
    if (this.hits.includes(position) || position < 0 || position >= this.length)
      return
    this.hits.push(position)
  }

  isSunk() {
    return this.hits.length === this.length
  }
}

export default Ship
