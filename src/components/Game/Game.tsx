import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Gameboard from '../../factories/Gameboard'
import Player from '../../factories/Player'
import Board from './Board'
import EndScreen from './EndScreen'
import StartScreen from './StartScreen'

const Game = () => {
  const [user, setUser] = useState(new Player('User'))
  const [userGameboard, setUserGameboard] = useState(new Gameboard())
  const [computer, setComputer] = useState(new Player('Computer'))
  const [computerGameboard, setComputerGameboard] = useState(new Gameboard())
  const [hasGameStarted, setHasGameStarted] = useState(false)
  const [isGameOver, setIsGameOver] = useState(false)
  const [endScreenMessage, setEndScreenMessage] = useState('')
  
  useEffect(() => {
    setupComputerGameboard()
  }, [])

  const setupComputerGameboard = () => {
    const random = new Gameboard()
    random.placeShipsRandomly()
    setComputerGameboard(random)
  }

  const resetGame = () => {
    setUser(new Player('User'))
    setUserGameboard(new Gameboard())
    setComputer(new Player('Computer'))
    setupComputerGameboard()
    setHasGameStarted(false)
    setIsGameOver(false)
  }

  const handleFieldClick = (positionX: number, positionY: number) => {
    if (user.hasAlreadyHit(positionX, positionY)) return

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
    if (computerGameboard.isGameOver()) {
      setEndScreenMessage('You won')
      setIsGameOver(true)
      return
    }

    computerCopy.randomAttack(userGameboardCopy)
    setComputer(computerCopy)
    setUserGameboard(userGameboardCopy)
    if (userGameboard.isGameOver()) {
      setEndScreenMessage('Computer won')
      setIsGameOver(true)
      return
    }
  }

  return (
    <GameWrapper>
      {hasGameStarted ? (
        ''
      ) : (
        <StartScreen
          gameboard={userGameboard}
          setUserGameboard={setUserGameboard}
          setHasGameStarted={setHasGameStarted}
        />
      )}
      {isGameOver ? (
        <EndScreen message={endScreenMessage} resetGame={resetGame} />
      ) : (
        ''
      )}
      <Boards>
        <Board gameboard={userGameboard} owner={user} enemy={computer}></Board>
        <Board
          gameboard={computerGameboard}
          owner={computer}
          enemy={user}
          onFieldClick={handleFieldClick}
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

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export default Game
