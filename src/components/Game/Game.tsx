import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Gameboard from '../../factories/Gameboard'
import Player from '../../factories/Player'
import Board from './Board'

const Game = () => {
  const [hasStarted, setHasStarted] = useState(false)
  const [userGameboard, setUserGameboard] = useState(new Gameboard())
  const [computerGameboard, setComputerGameboard] = useState(new Gameboard())

  useEffect(() => {
    setRandomGameboards()
  }, [])

  // Everything that changes over time needs to be defined as state
  // For every operation we will have to copy state with Object.assign, modify copy and then setState with the modified copy
  const setRandomGameboards = () => {
    const randomGameboard1 = new Gameboard()
    const randomGameboard2 = new Gameboard()
    randomGameboard1.placeShipsRandomly()
    randomGameboard2.placeShipsRandomly()
    setUserGameboard(Object.assign({}, randomGameboard1))
    setComputerGameboard(Object.assign({}, randomGameboard2))
  }

  const user = new Player('User')
  const computer = new Player('Computer')
  const be = new Gameboard()
  be.placeShipsRandomly()

  return (
    <GameWrapper>
      <Message></Message>
      <Boards>
        <Board></Board>
        <Board></Board>
        <button onClick={setRandomGameboards}>Randomize</button>
      </Boards>
    </GameWrapper>
  )
}

const GameWrapper = styled.div``
const Message = styled.div``
const Boards = styled.div``

export default Game
