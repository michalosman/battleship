import styled from 'styled-components'
import Game from './Game/Game'

const Main = () => {
  return (
    <MainWrapper>
      <Game></Game>
    </MainWrapper>
  )
}

const MainWrapper = styled.main`
  padding: ${({ theme }) => theme.padding.lg};
`

export default Main
