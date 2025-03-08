import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import LogoImg from '../assets/img/logo.png';

const Navbar = () => {
    const location = useLocation();

    return (
        <Nav>
            <Logo to="/">
                <LogoImage src={LogoImg} alt="charcoal_chicken_logo" />
            </Logo>
            <NavLinks>
                <NavLink to="/" $active={location.pathname === "/"}>Home</NavLink>
                <NavLink to="/about" $active={location.pathname === "/about"}>About Us</NavLink>
                <NavLink to="/menu" $active={location.pathname === "/menu"}>Menu</NavLink>
                <NavLink to="/gallery" $active={location.pathname === "/gallery"}>Gallery</NavLink>
                <PhoneLink href="tel:0398878431">Call Now</PhoneLink>
            </NavLinks>
        </Nav>
    )
}


const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  width: 100%;
  background-color: #fff;
  max-width: 2000px; /* Restricts navbar width */
  margin: 0 auto; /* Centers the navbar */

  @media (max-width: 1000px) {
      padding: 0.8rem 1.5rem; /* Adjust padding for smaller screens */
  }
  
`

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: #333;
`
const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  flex-wrap: wrap; /* Prevents overflow by wrapping items */

  @media (max-width: 800px) {
    gap: 1rem; /* Reduce gap on smaller screens */
  }
`;

const PhoneLink = styled.a`
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  transition: color 0.3s ease;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  background-color: #7fbc42;
  border-radius: 4px;
  padding: 1rem 1.5rem; /* Increased padding for a bigger button */
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color:rgba(127, 188, 66, 0.9);
    box-shadow: 0px 4px 12px #rgba(127, 188, 66, 0.9);; /* Light glow effect */
  }
`

const NavLink = styled(Link)`
  text-decoration: none;
  color: ${({ $active }) => ($active ? "#7fbc42" : "#333")};
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #7fbc42;
  }
`

const LogoImage = styled.img`
    height: 75px;  /* Adjust this value to make logo smaller/larger */
    padding: 0;

`

export default Navbar;