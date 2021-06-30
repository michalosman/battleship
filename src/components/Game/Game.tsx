import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Gameboard from '../../factories/Gameboard'
import Player from '../../factories/Player'
import Board from './Board'

// TODO
// * Add missing functionalities
// * Fix layout
// * Refactoring
// * Clean code

const Game = () => {
  const [user, setUser] = useState(new Player('User'))
  const [computer, setComputer] = useState(new Player('Computer'))
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

  const handleComputerFieldClick = (positionX: number, positionY: number) => {
    if (computerGameboard.isGameOver() || userGameboard.isGameOver()) return

    let userCopy: Player = Object.assign(
      Object.create(Object.getPrototypeOf(user)),
      user
    )

    let computerCopy: Player = Object.assign(
      Object.create(Object.getPrototypeOf(computer)),
      computer
    )

    let userGameboardCopy: Gameboard = Object.assign(
      Object.create(Object.getPrototypeOf(userGameboard)),
      userGameboard
    )

    let computerGameboardCopy: Gameboard = Object.assign(
      Object.create(Object.getPrototypeOf(computerGameboard)),
      computerGameboard
    )

    userCopy.attack(positionX, positionY, computerGameboardCopy)
    setUser(userCopy)
    setComputerGameboard(computerGameboardCopy)
    if (computerGameboard.isGameOver()) alert('You won')

    computerCopy.randomAttack(userGameboardCopy)
    setComputer(computerCopy)
    setUserGameboard(userGameboardCopy)
    if (userGameboard.isGameOver()) alert('Computer won')
  }

  return (
    <GameWrapper>
      <Boards>
        <Board gameboard={userGameboard} owner={user} enemy={computer}></Board>
        <Board
          gameboard={computerGameboard}
          owner={computer}
          enemy={user}
          onFieldClick={handleComputerFieldClick}
        ></Board>
      </Boards>
    </GameWrapper>
  )
}

const GameWrapper = styled.div`
  font-size: 5rem;
`
const Boards = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;
`

export default Game
