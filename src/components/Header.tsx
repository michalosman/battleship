import styled from 'styled-components'

const Header = () => {
  return <HeaderWrapper>BATTLESHIP</HeaderWrapper>
}

const HeaderWrapper = styled.header`
  padding: ${({ theme }) => theme.padding.md};
  font-size: 12rem;
  font-weight: 900;
  letter-spacing: 1rem;
  line-height: 1;
  text-align: center;
`

export default Header