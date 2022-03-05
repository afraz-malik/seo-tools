import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
const TopNav = () => {
  return (
    <Navbar variant="dark" className="navbar">
      <Container>
        <Navbar.Brand href="/">SEO Content Hub</Navbar.Brand>
        <Nav className="right">
          <Nav.Link href="#top">Top Tools</Nav.Link>
          <Nav.Link href="#latest">Recent Tools</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default TopNav
