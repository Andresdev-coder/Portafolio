import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg3 from "../assets/img/project-img4.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

const projects = [
  {
    title: "FiadoYa",
    description: "Sistema para que las tiendas registren y organicen sus ventas fiadas.",
    imgUrl: projImg1,
    url: "https://fiadoya.vercel.app/",
  },
  {
    title: "ControlEdu",
    description: "Plataforma para gestionar cursos, estudiantes y materias.",
    imgUrl: projImg2,
    url: "https://controledu.vercel.app/",
  },
  {
    title: "Ferreteria Yunque",
    description: "Sistema para apoyar las ventas y el control de inventario de una ferreteria.",
    imgUrl: projImg3,
    url: "https://ferreteria-yunque.vercel.app/",
  },
  {
    title: "Unimeta",
    description: "Sistema para gestionar cursos, estudiantes, materias, profesores, notas.",
    imgUrl: projImg4,
    url: "https://unimeta.vercel.app/",
  },
];

export const Projects = () => (
  <section className="project" id="projects">
    <Container>
      <Row>
        <Col size={12}>
          <TrackVisibility>
            {({ isVisible }) => (
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Proyectos desplegados</h2>
                <p>He creado soluciones digitales para comercios y educaci&oacute;n: registro de ventas fiadas, gesti&oacute;n acad&eacute;mica e inventario.</p>
                <Row id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                  {projects.map((project) => <ProjectCard key={project.title} {...project} />)}
                </Row>
              </div>
            )}
          </TrackVisibility>
        </Col>
      </Row>
    </Container>
    <img className="background-image-right" src={colorSharp2} alt="" />
  </section>
);
