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
  const ships = [
    new Ship(5),
    new Ship(4),
    new Ship(3),
    new Ship(3),
    new Ship(2),
  ]

  const shipNames = [
    'Carrier',
    'Battleship',
    'Destroyer',
    'Submarine',
    'Patrol Boat',
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentShipName, setCurrentShipName] = useState(shipNames[0])
  const [currentShip, setCurrentShip] = useState(ships[0])
  const [isVertical, setIsVertical] = useState(false)

  const toggleRotate = () => {
    setIsVertical(!isVertical)
  }

  const onFieldClick = (row: number, column: number) => {
    let gameboardCopy: Gameboard = Object.assign(
      Object.create(Object.getPrototypeOf(gameboard)),
      gameboard
    )

    if (
      !gameboardCopy.isPlacementPossible(currentShip, row, column, isVertical)
    ) {
      return
    }

    gameboardCopy.placeShip(currentShip, row, column, isVertical)
    setUserGameboard(gameboardCopy)
    // currentIndex updates after this method so we need to be 1 step ahead in all operations below
    setCurrentIndex(currentIndex + 1)
    setCurrentShip(ships[currentIndex + 1])
    setCurrentShipName(shipNames[currentIndex + 1])

    if (currentIndex > 3) {
      setHasGameStarted(true)
    }
  }

  const loadFields = () => {
    const fields = []
    for (let row = 0; row < gameboard.board.length; row++) {
      for (let column = 0; column < gameboard.board[row].length; column++) {
        fields.push(
          <Field
            key={uuidv4()}
            isFilled={gameboard.board[row][column] ? true : false}
            onClick={() => onFieldClick(row, column)}
          >
            <FieldHover
              shipLength={currentShip.length}
              isVertical={isVertical}
            />
          </Field>
        )
      }
    }
    return fields
  }

  return (
    <StartScreenWrapper>
      <SetupWindow>
        <p>
          <strong>Welcome to battleship game</strong>
        </p>
        <p>
          Place your <u>{currentShipName}</u>
        </p>
        <Button content={'Rotate'} onClick={toggleRotate} />
        <Board>{loadFields()}</Board>
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
  width: 50rem;
  height: 80rem;
  padding: ${({ theme }) => theme.padding.md};
  background-color: ${({ theme }) => theme.colors.light.secondary};
`

const Board = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 4rem);
  grid-template-rows: repeat(10, 4rem);
  width: 40.2rem;
  height: 40.2rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.dark.primary};
`

interface IField {
  isFilled: boolean
}

const Field = styled.div<IField>`
  border: 0.1rem solid ${({ theme }) => theme.colors.dark.primary};
  cursor: pointer;

  ${({ isFilled }) =>
    isFilled &&
    css`
      background-color: ${({ theme }) => theme.colors.dark.secondary};
    `}
`

interface IFieldHover {
  shipLength: number
  isVertical: boolean
}

const FieldHover = styled.div<IFieldHover>`
  position: relative;
  height: 3.8rem;
  width: 3.8rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.green};

    ${({ isVertical, shipLength }) =>
      isVertical &&
      css`
        height: calc(3.8rem + 4rem * ${shipLength - 1});
      `}

    ${({ isVertical, shipLength }) =>
      !isVertical &&
      css`
        width: calc(3.8rem + 4rem * ${shipLength - 1}); ;
      `}
  }
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
