import { Container, Card } from "react-bootstrap";

export default function SimulationArea({ children }) {
  const customCursorStyle = {
    cursor: `url('${process.env.PUBLIC_URL}/icons8-cursor-100.png'), pointer`,
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card
        className="shadow-lg"
        style={{
          ...customCursorStyle,
          width: "95%",
          height: "95%",
          background: "#fff",
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
