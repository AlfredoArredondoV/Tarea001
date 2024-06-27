import { Container } from "react-bootstrap";

import Contacto from "../components/Contact";

const ContactPage = () => {
    return (
        <Container className="pt-5 justify-content-center">
        <h1 className="mb-4">Cuentanos, ¿en que te podemos ayudar?</h1>
        <Contacto />
        </Container>
    );
};
export default ContactPage;