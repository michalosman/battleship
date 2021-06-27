import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Gameboard from '../../factories/Gameboard'
import Player from '../../factories/Player'
import Board from './Board'

const Game = () => {
  // const [hasStarted, setHasStarted] = useState(false)
  const [userGameboard, setUserGameboard] = useState(new Gameboard())
  const [computerGameboard, setComputerGameboard] = useState(new Gameboard())

  useEffect(() => {
    setRandomGameboards()
  }, [])

  const setRandomGameboards = () => {
    const random1 = new Gameboard()
    random1.placeShipsRandomly()
    setUserGameboard(random1)

    const random2 = new Gameboard()
    random2.placeShipsRandomly()
    setComputerGameboard(random2)
  }

  const user = new Player('User')
  const computer = new Player('Computer')

  return (
    <GameWrapper>
      <Message></Message>
      <Boards>
        <Board gameboard={userGameboard} enemy={computer}></Board>
        <Board gameboard={computerGameboard} enemy={user}></Board>
      </Boards>
    </GameWrapper>
  )
}

const GameWrapper = styled.div`
  font-size: 5rem;
`
const Message = styled.div``
const Boards = styled.div``

export default Game
