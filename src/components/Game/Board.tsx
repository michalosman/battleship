import styled, { css } from 'styled-components'
import Gameboard from '../../factories/Gameboard'
import Player from '../../factories/Player'
import { v4 as uuidv4 } from 'uuid'

interface Props {
  gameboard: Gameboard
  owner: Player
  enemy: Player
}

const Board = ({ gameboard, owner, enemy }: Props) => {
  // TODO
  // On click enemy.attack and reload fields UI
  // Add gameflow in Game - turns and random computer attacks

  const loadFields = () => {
    const fields = []
    for (let row = 0; row < gameboard.board.length; row++) {
      for (let column = 0; column < gameboard.board[row].length; column++) {
        const field = gameboard.board[row][column]
        let status = 'default'
        if (gameboard.missedShots[row][column]) status = 'missed'
        if (field) {
          if (owner.name !== 'Computer') status = 'ship'
          if (enemy.hasAlreadyHit(row, column)) status = 'hit'
        }
        fields.push(<Field key={uuidv4()} status={status} owner={owner} />)
      }
    }
    return fields
  }

  return <BoardWrapper>{loadFields()}</BoardWrapper>
}

const BoardWrapper = styled.div`
  display: grid;
  width: 40rem;
  height: 40rem;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
  border: 1px solid ${({ theme }) => theme.colors.dark.primary};
`

interface IField {
  status: string
  owner: Player
}

const Field = styled.div<IField>`
  border: 1px solid ${({ theme }) => theme.colors.dark.primary};

  ${({ status }) =>
    status === 'default' &&
    css`
      background-color: ${({ theme }) => theme.colors.light.primary};

      ${({ owner }: IField) =>
        owner.name === 'Computer' &&
        css`
          cursor: pointer;

          &:hover {
            background-color: ${({ theme }) => theme.colors.light.secondary};
          }
        `}
    `}

  ${({ status }) =>
    status === 'ship' &&
    css`
      background-color: ${({ theme }) => theme.colors.dark.secondary};
    `}
  
  ${({ status }) =>
    status === 'missed' &&
    css`
      background-color: ${({ theme }) => theme.colors.red};
    `}

  ${({ status }) =>
    status === 'hit' &&
    css`
      background-color: ${({ theme }) => theme.colors.green};
    `}
`

export default Board
