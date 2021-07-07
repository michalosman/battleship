import { useState } from 'react'
import styled from 'styled-components'
import Gameboard from '../../factories/Gameboard'
import Ship from '../../factories/Ship'
import { FaRedo } from 'react-icons/fa'
import Board from './Board'
import Button from '../elements/Button'

interface Props {
  gameboard: Gameboard
  startGame: () => void
  setUserGameboard: (gameBoard: Gameboard) => void
}

const StartScreen = ({ gameboard, startGame, setUserGameboard }: Props) => {
  const [currentShipName, setCurrentShipName] = useState('Carrier')
  const [currentShip, setCurrentShip] = useState(new Ship(5))
  const [isVertical, setIsVertical] = useState(true)

  const toggleRotate = () => {
    setIsVertical(!isVertical)
  }

  return (
    <StartScreenWrapper>
      <SetupWindow>
        <p>Welcome to battleship game</p>
        <p>Place your {currentShipName}</p>
        <Button content={'Rotate'} onClick={toggleRotate} />
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
`

const SetupWindow = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 600px;
  height: 600px;
  padding: ${({ theme }) => theme.padding.md};
  background-color: ${({ theme }) => theme.colors.light.secondary};
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
