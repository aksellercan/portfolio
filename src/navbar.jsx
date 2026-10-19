import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import githubIcon from './assets/github.svg';
import linkedinIcon from './assets/linkedin.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const trafficBadgeUrl =
  "https://hitscounter.dev/api/hit?url=https%3A%2F%2Faksellercan.github.io%2Fportfolio%2F&label=Traffic&icon=github&color=%23198754&message=&style=flat&tz=localtime";

const socialLinks = [
  { label: 'Traffic', href: import.meta.env.VITE_SELF_REPO_LINK, icon: trafficBadgeUrl },
  { label: 'GitHub', href: import.meta.env.VITE_GITHUB_LINK, icon: githubIcon },
  { label: 'LinkedIn', href: import.meta.env.VITE_LINKEDIN_LINK, icon: linkedinIcon },
];

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
          <div className="navbar_icon_links d-none d-md-inline-flex">
            {socialLinks.map(({ label, href, icon }) => (
              <Navbar.Brand key={label} href={href}>
                {label === 'Traffic'
                  ? <img src={icon} alt={label} />
                  : (
                    <img
                      src={icon}
                      width="30"
                      height="30"
                      className="d-inline-block align-top"
                      alt={label}
                    />
                  )}
              </Navbar.Brand>
            ))}
          </div>
          <Dropdown className="socials-dropdown d-md-none" align="end">
            <Dropdown.Toggle
              variant="link"
              className="socials-dropdown-toggle p-0 border-0 text-reset"
              aria-label="Social links"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor"
                viewBox="0 0 16 16"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 0-1z"
                />
                <path
                  fillRule="evenodd"
                  d="M15.5 3.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.646a.5.5 0 1 0 .708.708L15 4.707V8.5a.5.5 0 0 0 1 0v-5z"
                />
              </svg>
            </Dropdown.Toggle>
            <Dropdown.Menu className="socials-dropdown-menu">
              {socialLinks.map(({ label, href, icon }) => (
                <Dropdown.Item key={label} href={href}>
                  <img src={icon} alt={label} height={label === 'Traffic' ? 24 : 20} />
                  <span>{label}</span>
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Navbar>
    </>
  );
}
