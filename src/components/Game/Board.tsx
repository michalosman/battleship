import styled from 'styled-components'
import Gameboard from '../../factories/Gameboard'
import Player from '../../factories/Player'

interface Props {
  gameboard: Gameboard
  enemy: Player
}

const Board = ({ gameboard, enemy }: Props) => {
  // Load default look, but in players default ships are visible
  // On click check if hit and change look

  const loadFields = gameboard.board.map(() => {})

  return <BoardWrapper></BoardWrapper>
}

const BoardWrapper = styled.div``

export default Board
