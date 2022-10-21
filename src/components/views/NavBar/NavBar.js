import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" className="mt-4 mb-4 rounded">
      <Navbar.Brand className="ms-1 me-auto" as={NavLink} to="/">
        Table editor
        <span className='fa fa-edit ms-1' style={{fontSize: '22px'}}></span>
      </Navbar.Brand>
      <Navbar.Toggle className="me-1" aria-controls="navbar" />
      <Navbar.Collapse id="navbar">
        <Nav className="ms-auto">
          <Nav.Link as={NavLink} to="/">Home</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;