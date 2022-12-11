import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavBar() {
  return (
    <div>
    <Navbar bg="light" expand="sm">
      <Container>
        <Navbar.Brand href="/">Realty Tools</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link as={Link} to={'/'}>Home</Nav.Link>
          {/* <Nav.Link as={Link} to={'/house'}>House</Nav.Link> */}
          <Nav.Link as={Link} to={'/about'}>About</Nav.Link>
          <Nav.Link as={Link} to={'/inspo'}>Inspiration</Nav.Link>
          <Nav.Link as={Link} to={'/contact'}>Contact</Nav.Link>
          </Nav>
      </Container>
    </Navbar></div>
  );
}

export default NavBar;