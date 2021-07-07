import styled from 'styled-components'
import Button from '../elements/Button'

interface Props {
  message: string
  resetGame: () => void
}

const EndScreen = ({ message, resetGame }: Props) => {
  return (
    <EndScreenWrapper>
      <EndMessage>
        <p>{message}</p>
        <Button content={'Play again'} onClick={resetGame} />
      </EndMessage>
      <Overlay />
    </EndScreenWrapper>
  )
}

const EndScreenWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`

const EndMessage = styled.p`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 500px;
  height: 300px;
  background-color: ${({ theme }) => theme.colors.light.primary};
  z-index: 2;
  padding: ${({ theme }) => theme.padding.md};
  border-radius: ${({ theme }) => theme.borderRadius.md}; ;
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

export default EndScreen
