import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, url }) => {
  const card = (
    <div className="proj-imgbx">
      <img src={imgUrl} alt={`Vista previa de ${title}`} />
      <div className="proj-txtx">
        <h4>{title}</h4>
        <span>{description}</span>
        {url && <span className="project-visit">Ver proyecto ↗</span>}
      </div>
    </div>
  );

  return (
    <Col size={12} sm={6} md={4}>
      {url ? (
        <a className="project-card-link" href={url} target="_blank" rel="noreferrer" aria-label={`Visitar ${title}`}>
          {card}
        </a>
      ) : card}
    </Col>
  );
};
