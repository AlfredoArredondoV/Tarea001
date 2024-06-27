import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar bg="danger" variant="danger">
      <Container className="justify-content-start">
        <Link to="/" className="text-white ms-3 text-decoration-none">&#x1F3E0; Home</Link>
        <Link to="/contacto" className="text-white ms-3 text-decoration-none">&#x1F4D2; Contacto</Link>
      </Container>
      <Container className="justify-content-end">
        <Navbar.Brand className="text-white ms-3 text-decoration-none">Happy Cake &#x1F370;</Navbar.Brand>
      </Container>
    </Navbar>
    );
  };
export default Navigation;
