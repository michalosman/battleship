import { useState } from 'react'
import styled, { css } from 'styled-components'
import Gameboard from '../../factories/Gameboard'
import Ship from '../../factories/Ship'
import Button from '../elements/Button'
import { v4 as uuidv4 } from 'uuid'

interface Props {
  gameboard: Gameboard
  setUserGameboard: (gameBoard: Gameboard) => void
  setHasGameStarted: (hasGameStarted: boolean) => void
}

const StartScreen = ({
  gameboard,
  setUserGameboard,
  setHasGameStarted,
}: Props) => {
  const [currentShipName, setCurrentShipName] = useState('Carrier')
  const [currentShip, setCurrentShip] = useState(new Ship(5))
  const [isVertical, setIsVertical] = useState(true)

  const toggleRotate = () => {
    setIsVertical(!isVertical)
  }

  const setShip = () => {
    // try to place ship on gameboard
    // if successful then change current name and ship
    // if unsuccessful return
    // if name === '' setHasGameStarted(true)
  }

  const fields = gameboard.board.map((row) => {
    return row.map((field) => (
      <Field
        key={uuidv4()}
        isFilled={field ? true : false}
        currentShipLength={currentShip.length}
        isVertical={isVertical}
      />
    ))
  })

  const startGame = () => {
    if (currentShipName === '') setHasGameStarted(true)
    else alert('You have to place all ships before starting')
  }

  return (
    <StartScreenWrapper>
      <SetupWindow>
        <p>Welcome to battleship game</p>
        <p>Place your {currentShipName}</p>
        <Button content={'Rotate'} onClick={toggleRotate} />
        <Board>{fields}</Board>
      </SetupWindow>
      <Overlay />
    </StartScreenWrapper>
  )
}

const StartScreenWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 3rem;
`

const SetupWindow = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 50%;
  height: 80%;
  padding: ${({ theme }) => theme.padding.md};
  background-color: ${({ theme }) => theme.colors.light.secondary};
`

const Board = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
  width: 40rem;
  height: 40rem;
  border: 1px solid ${({ theme }) => theme.colors.dark.primary};
`

interface IField {
  isFilled: boolean
  currentShipLength: number
  isVertical: boolean
}

const Field = styled.div<IField>`
  border: 1px solid ${({ theme }) => theme.colors.dark.primary};

  ${({ isFilled }) =>
    isFilled &&
    css`
      background-color: ${({ theme }) => theme.colors.dark.secondary};
    `}
`

const Overlay = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  height: 100%;
  width: 100%;
  background-color: black;
  opacity: 0.6;
`

export default StartScreen
