import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { useEffect, useState } from "react";

export const Banner = () => {
  const headline = "Hola, soy Logicadev. Desarrollador web";
  const [typedHeadline, setTypedHeadline] = useState("");

  useEffect(() => {
    let index = 0;
    let deleting = false;
    let timer;

    const animateHeadline = () => {
      index += deleting ? -1 : 1;
      setTypedHeadline(headline.slice(0, index));

      let delay = deleting ? 35 : 65;
      if (!deleting && index === headline.length) {
        deleting = true;
        delay = 1100;
      } else if (deleting && index === 0) {
        deleting = false;
        delay = 300;
      }

      timer = window.setTimeout(animateHeadline, delay);
    };

    timer = window.setTimeout(animateHeadline, 300);

    return () => window.clearTimeout(timer);
  }, []);

  return (
  <section className="banner" id="home">
    <Container>
      <Row className="align-items-center">
        <Col xs={12} md={7} xl={7}>
          <TrackVisibility>
            {({ isVisible }) => (
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Desarrollo web | Logicadev</span>
                <h1>
                  <span className="txt-rotate" aria-label={headline}>
                    <span className="wrap" aria-hidden="true">{typedHeadline}</span>
                  </span>
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
};
