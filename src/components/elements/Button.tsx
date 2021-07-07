import styled from 'styled-components'

interface Props {
  content: string
  onClick: () => void
}

const Button = ({ content, onClick }: Props) => {
  return <ButtonWrapper onClick={onClick}>{content}</ButtonWrapper>
}

const ButtonWrapper = styled.button`
  padding: ${({ theme }) => theme.padding.sm} ${({ theme }) => theme.padding.md};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background-color: ${({ theme }) => theme.colors.dark.primary};
  color: ${({ theme }) => theme.colors.light.primary};
  transition: transform 0.1s ease-in-out;

  &:hover {
    transform: scale(1.03);
  }
`

export default Button
