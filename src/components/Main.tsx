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
`

export default Main
