import Image from "next/image"
import styled from "styled-components"
import logo from ''

const Nav = () => {
  return (
    <Nav>
        <Image src='logo.png' />
        <ul>
            <li>About</li>
            <li>Mission</li>
            <li>Pitch To Us</li>
        </ul>
        <button>Contact Us</button>
    </Nav>
  )
}

export default Nav

const Navbar = styled.nav`
    
`