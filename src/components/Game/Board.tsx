import styled from 'styled-components'
import Gameboard from '../../factories/Gameboard'

interface Props {
  gameboard: Gameboard
}

const Board = ({ gameboard }: Props) => {
  // 1. Load every time from data
  // 
  // set each ship hits to red
  // set missed to black

  // 2. Change appearance on click depending on return

  const loadFields = gameboard.board.map(() => {})

  return <BoardWrapper></BoardWrapper>
}

const BoardWrapper = styled.div``

export default Board
