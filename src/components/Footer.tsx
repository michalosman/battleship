import styled from 'styled-components'
import { FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <FooterWrapper>
      Copyright © 2021 michalosman
      <GithubLink
        href="https://github.com/michalosman"
        target="_blank"
        rel="noopener"
      >
        <FaGithub />
      </GithubLink>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: ${({ theme }) => theme.padding.sm};
  font-size: 2.4rem;
  font-weight: 700;
`

const GithubLink = styled.a`
  display: flex;
  margin-left: 1rem;
  color: ${({ theme }) => theme.colors.dark.primary};
  transition: transform 0.15s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`

export default Footer
