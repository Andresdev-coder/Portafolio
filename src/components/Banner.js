import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => (
  <section className="banner" id="home">
    <Container>
      <Row className="align-items-center">
        <Col xs={12} md={7} xl={7}>
          <TrackVisibility>
            {({ isVisible }) => (
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Desarrollo web | Logicadev</span>
                <h1>
                  Hola, soy Logicadev{" "}
                  <span className="txt-rotate"><span className="wrap">Desarrollador web</span></span>
                </h1>
                <p>Soy desarrollador web y construyo aplicaciones para resolver necesidades reales. He creado sistemas para tiendas, gesti&oacute;n de cursos y control de inventario para una ferreter&iacute;a.</p>
                <a className="banner-cta" href="#connect">Hablemos <ArrowRightCircle size={25} /></a>
              </div>
            )}
          </TrackVisibility>
        </Col>
        <Col xs={12} md={5} xl={5}>
          <img className="logicadev-hero-logo" src="/logicadev1.png" alt="Logo personal de Logicadev" />
        </Col>
      </Row>
    </Container>
  </section>
);
