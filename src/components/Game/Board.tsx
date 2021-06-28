import styled from 'styled-components'
import Gameboard from '../../factories/Gameboard'
import Player from '../../factories/Player'
import { v4 as uuidv4 } from 'uuid'

interface Props {
  gameboard: Gameboard
  owner: Player
  enemy: Player
}

const Board = ({ gameboard, owner, enemy }: Props) => {
  // Load default look, but in players default ships are visible
  // On click check if hit and change look

  const fields = gameboard.board.map((row) =>
    row.map((field) =>
      field ? <ShipField key={uuidv4()} /> : <DefaultField key={uuidv4()} />
    )
  )

  return <BoardWrapper>{fields}</BoardWrapper>
}

const BoardWrapper = styled.div`
  display: grid;
  width: 200px;
  height: 200px;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
  border: 1px solid ${({ theme }) => theme.colors.dark.primary};
`

const Field = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.dark.primary};
`

const DefaultField = styled(Field)`
  background-color: ${({ theme }) => theme.colors.light.primary};
`

const ShipField = styled(Field)`
  background-color: ${({ theme }) => theme.colors.dark.secondary};
`

const MissedField = styled.div`
  background-color: ${({ theme }) => theme.colors.red};
`

const HitField = styled.div`
  background-color: ${({ theme }) => theme.colors.green};
`

export default Board
