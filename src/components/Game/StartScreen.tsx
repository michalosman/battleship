import { useState } from 'react'
import styled from 'styled-components'
import Gameboard from '../../factories/Gameboard'
import Ship from '../../factories/Ship'
import {FaRedo} from 'react-icons/fa';

interface Props {
  startGame: () => void
  setupUserGameboard: (gameBoard: Gameboard) => void
}

const StartScreen = ({ startGame, setupUserGameboard }: Props) => {
  const [currentShipName, setCurrentShipName] = useState('Carrier')
  const [currentShip, setCurrentShip] = useState(new Ship(5))

  return (
    <StartScreenWrapper>
      <SetupWindow>
        <p>Welcome to battleship game</p>
        <p>Place your {currentShipName}</p>
        <RotateButton>Rotate</RotateButton>
        Board
        <StartButton>Start</StartButton>
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
  height: 100%;
  width: 100%;
`

const SetupWindow = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 600px;
  width: 600px;
  padding: 3rem;
  background-color: ${({ theme }) => theme.colors.light.secondary};
`

const RotateButton = styled.button``

const StartButton = styled.button``

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
