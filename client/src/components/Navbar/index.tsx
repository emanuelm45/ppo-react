import { UseAuth } from '../../contexts/Auth/UseAuth'
import { NavbarContainer, NavbarStyled, NavLinkStyled } from './style'
import { FaUser } from 'react-icons/fa'

const Navbar = () => {
  const auth = UseAuth()
  return (
    <>
      <NavbarContainer>
        <NavbarStyled>
          <div>
            <NavLinkStyled to="/home/">Home</NavLinkStyled>
            <NavLinkStyled to="/classes/">Classes</NavLinkStyled>
          </div>
          <NavLinkStyled to="/profile/">
            <FaUser />
          </NavLinkStyled>
        </NavbarStyled>
      </NavbarContainer>
    </>
  )
}

export { Navbar }
