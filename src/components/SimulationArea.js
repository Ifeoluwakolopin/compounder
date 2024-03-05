import React from "react";
import { Container, Card } from "react-bootstrap";
import VolumeButton from "./VolumeButton";
import HomeButton from "./HomeButton";

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
          <div
            className="position-absolute"
            style={{ top: 0, left: 0, padding: "10px" }} // Adjusted for the HomeButton
          >
            <HomeButton />
          </div>
          <div
            className="position-absolute"
            style={{ top: 0, right: 0, padding: "10px" }}
          >
            <VolumeButton />
          </div>
          {children}
        </Card.Body>
      </Card>
    </Container>
  );
}
