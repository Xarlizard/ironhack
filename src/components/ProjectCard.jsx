import React from "react";
import { Card, Button } from "react-bootstrap";
import "../styles/projectCard.css";

const ProjectCard = ({ index, variant = true, projectData }) => {
  // Updated image path to use assets from public folder
  const imageSrc = `/assets/projects-section/${variant ? index + 1 : index + 3}.jpg`;

  return (
    <Card className="project-card">
      <div className="image-container">
        <Card.Img
          variant="top"
          src={imageSrc}
          alt={projectData.name}
          className="card-image"
        />
      </div>
      <Card.Body>
        <Card.Title className="mb-3">{projectData.name}</Card.Title>
        <Card.Text className="mb-3">{projectData.description}</Card.Text>
        <div className="text-start">
          <Button
            variant="link"
            className="p-0"
            style={{ color: "var(--color-boton)", textDecoration: "none" }}
          >
            Learn More
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
