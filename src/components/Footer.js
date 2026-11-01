import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <div className="brand-lockup">
              <img src={logo} alt="" />
              <span>Logicadev</span>
            </div>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <p>Copyright {new Date().getFullYear()} Logicadev. Todos los derechos reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
