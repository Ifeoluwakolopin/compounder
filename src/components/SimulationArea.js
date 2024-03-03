import React from "react";
import { Container, Card } from "react-bootstrap";

export default function SimulationArea({ children }) {
  const customCursorStyle = {
    cursor: `url('${process.env.PUBLIC_URL}/icons8-cursor-55.png'), pointer`,
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card
        className="shadow-lg simulation-area"
        style={{
          ...customCursorStyle,
          width: "95%",
          height: "95%",
          background: "linear-gradient(to bottom, #e0f2ff, #d3eefe, #a8e1c9)", // Light blue to light green gradient
          margin: "2rem",
          overflow: "auto",
        }}
      >
        <Card.Body className="d-flex flex-column justify-content-center">
          {children}
        </Card.Body>
      </Card>
    </Container>
  );
}
