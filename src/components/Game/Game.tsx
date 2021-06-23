import { useState } from 'react'
import styled from 'styled-components'
import Gameboard from '../../factories/Gameboard'
import Player from '../../factories/Player'
import Board from './Board'

const Game = () => {
  const [hasStarted, setHasStarted] = useState(false)

  const user = new Player('User')
  const computer = new Player('Computer')
  const userGameboard = new Gameboard()
  const computerGameboard = new Gameboard()
  userGameboard.placeShipsRandomly()
  computerGameboard.placeShipsRandomly()

  return (
    <GameWrapper>
      <Message></Message>
      <Boards>
        <Board></Board>
        <Board></Board>
      </Boards>
    </GameWrapper>
  )
}

const GameWrapper = styled.div``
const Message = styled.div``
const Boards = styled.div``

export default Game
