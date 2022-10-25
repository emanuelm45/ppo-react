import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const NavbarContainer = styled.header`
  width: 100vw;
  position: fixed;
  top: 0;
  z-index: 1;
`

const NavbarStyled = styled.nav`
  background: linear-gradient(to top, var(--clr-blue-300), var(--clr-blue-500));
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
`

const NavLinkStyled = styled(NavLink)`
  position: relative;
  color: var(--clr-white);
  font-weight: var(--fw-semi-bold);
  padding: 1rem 0.5rem;
  margin: 0 0.5rem;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: var(--clr-blue-500);
    border-radius: 10rem;
    transform: scaleX(0);
    transition: transform var(--td-fast);
  }

  &:hover::after,
  &.active::after {
    transform: scaleX(1);
  }
`

export { NavbarContainer, NavbarStyled, NavLinkStyled }
