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
  margin-top: 12rem;

  @media (max-width: 768px) {
    margin-top: 3rem;
  }
`

export default Main
