import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export default function coloredNavbar() {
  return (
    <>
      <Navbar className='navbar' data-bs-theme="dark" sticky='top'>
        <Container>
          <Navbar.Brand>Aksel Ercan</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href={`mailto:${import.meta.env.VITE_MAIL_CONTACT}`}>Contact me</Nav.Link>
          </Nav>
          <div className="navbar_icon_links">
            <Navbar.Brand href={import.meta.env.VITE_GITHUB_LINK}>
              <img
                src="src/assets/github.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="github"
              />
            </Navbar.Brand>
            <Navbar.Brand href={import.meta.env.VITE_LINKEDIN_LINK}>
              <img
                src="src/assets/linkedin.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="linkedin"
              />
            </Navbar.Brand>
          </div>
        </Container>
      </Navbar>
    </>
  );
}